<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\Story;
use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Like;
use Illuminate\Support\Facades\DB;

class StoryController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    $genres = Genre::all(['id', 'name']);

    $sort = $request->get('sort', 'newest');
    $genre = $request->get('genre');
    $stories = Story::with([
      'genre' => function ($query) {
        $query->select('id', 'name');
      }
    ]);
    switch ($sort) {
      case 'abc':
        $stories = $stories->orderBy('title');
        break;
      case 'like':
        $stories = $stories->orderByDesc('likeCount');
        break;
      default:
        $stories = $stories->orderByDesc('created_at');
        break;
    }
    if ($genre != null) {
      $stories = $stories->where('genre', '=', $genre);
    }
    $stories = $stories->get();
    return inertia('Stories/Index', ['stories' => $stories, 'genres' => $genres]);
  }

  /**
   * Show the form for creating a mew resource.
   */
  public function create()
  {
    $genres = Genre::all();
    return inertia("Stories/Create", ['genres' => $genres]);
  }

  public function like($id)
  {
    $story = Story::findOrFail($id);
    $user = Auth::user();
    if ($story->likes()->where('user_id', $user->id)->exists()) {
      return redirect()->back()->with('error', 'You already liked this story.');
    }
    DB::transaction(function () use ($story, $user) {
      $story->increment('likecount');
      Like::create([
        'story_id' => $story->id,
        'user_id' => $user->id,
        'is_liked' => true,
      ]);
    });
    return response()->json(['success' => 'Story liked!', 'change' => 1]);
    // return redirect()->back()->with('success', 'Story liked!');
  }

  public function dislike($id)
  {
    $story = Story::findOrFail($id);
    $user = Auth::user();
    if ($story->likes()->where('user_id', $user->id)->exists()) {
      return redirect()->back()->with('error', 'Már értékelted ezt a sztorit.');
    }
    DB::transaction(function () use ($story, $user) {
      $story->decrement('likecount');
      Like::create([
        'story_id' => $story->id,
        'user_id' => $user->id,
        'is_liked' => false,
      ]);
    });
    return response()->json(['success' => 'Story disliked!', 'change' => -1]);
  }

  /**
   * Store a mewly created resource in storage.
   */
  public function store(Request $request)
  {
    // Adatok validálása
    $validatedData = $request->validate([
      'title' => 'required|string|min:3|unique:stories,title', // Minimum 3 karakter, egyedi cím
      'content' => 'required|string|min:200', // Minimum 200 karakter
      'genre' => 'required|numeric|exists:genres,id'
    ]);
    $validatedData['author'] = auth()->id(); // Bejelentkezett felhasználó azonosítója
    $validatedData['slug'] = Str::slug($validatedData['title']); // Slug létrehozása
    Story::create($validatedData); // Történet létrehozása
    return redirect()->back()->with(['message' => 'Történet sikeresen létrehozva']);
  }
  /**
   * Display the specified resource.
   */
  public function show(Request $request, Story $story)
  {
    $author = $story->author()->first(['id', 'name']);
    $likes = $story->likes()->where('is_liked', '=', '1')->count();
    $dislikes = $story->likes()->where('is_liked', '=', '0')->count();

    $zenMode = $request->get('zen') == "true";

    return inertia('Stories/Show', ['story' => $story, 'author' => $author, 'likes' => $likes, 'dislikes' => $dislikes, 'zen' => $zenMode]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    //
  }
}
