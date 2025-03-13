<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    $sort = $request->get('sort', 'newest');
    switch ($sort) {
      case 'abc':
        $stories = Story::orderBy('title')->get();
        break;
      case 'like':
        $stories = Story::orderByDesc('likeCount')->get();
        break;
      default:
        $stories = Story::orderByDesc('created_at')->get();
        break;
    }
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
      'title' => 'required|string|min:3|unique:stories,title', // Minimum 3 karakter, egyedi cím
      'content' => 'required|string|min:200', // Minimum 200 karakter
    ]);
    $validatedData['author'] = auth()->id(); // Bejelentkezett felhasználó azonosítója
    $validatedData['slug'] = Str::slug($validatedData['title']); // Slug létrehozása
    Story::create($validatedData); // Történet létrehozása
    return redirect()->back()->with(['message' => 'Történet sikeresen létrehozva']);
  }
  /**
   * Display the specified resource.
   */
  public function show(Story $story)
  {
    return inertia('Stories/Show', ['story' => $story]);
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
