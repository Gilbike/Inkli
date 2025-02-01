<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $stories = Story::all();
    return inertia('Stories/Index', ['stories' => $stories]);
  }

  /**
   * Show the form for creating a mew resource.
   */
  public function create()
  {
    return inertia("Stories/Create");
  }

  /**
   * Store a mewly created resource in storage.
   */
  public function store(Request $request)
  {
    // Adatok validálása
    $validatedData = $request->validate([
      'title' => 'required|string|min:3|unique:stories,title',
      'content' => 'required|string|min:200',
    ]);

    // Új történet létrehozása
    $story = new Story();
    $story->title = $validatedData['title'];
    $story->slug = \Str::slug($validatedData['title']);
    $story->content = $validatedData['content'];
    $story->author = auth()->id();
    $story->continue_after = now();
    $story->save();

    return response()->json(['message' => 'Történet sikeresen létrehozva'], 201);
  }
  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
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
