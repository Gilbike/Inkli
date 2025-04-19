<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Models\Genre;

class GenreController extends Controller
{
  public function show(Genre $genre)
  {
    $stories = $genre->stories()->get();
    $followed = DB::table("genre_follows")
      ->where("who", "=", auth()->user()->id)
      ->where("which", "=", $genre->id)
      ->count("*") > 0;

    return inertia("Genres/Show", ["stories" => $stories, "followed" => $followed, "genre" => $genre]);
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      "name" => "required|string|max:25"
    ]);

    Genre::create($validated);

    return back()->with("success", "");
  }

  public function destroy(Genre $genre)
  {
    $genre->delete();

    return back()->with("success", "");
  }

  public function follow(Request $request, Genre $genre)
  {
    DB::beginTransaction();
    DB::table("genre_follows")->insert(["who" => auth()->user()->id, "which" => $genre->id]);
    DB::commit();

    return back()->with("success", "");
  }

  public function unfollow(Request $request, Genre $genre)
  {
    DB::beginTransaction();
    DB::table("genre_follows")
      ->where("who", "=", auth()->user()->id)
      ->where("which", "=", $genre->id)
      ->delete();
    DB::commit();

    return back()->with("success", "");
  }
}
