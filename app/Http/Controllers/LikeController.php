<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Like;
use function PHPUnit\Framework\returnArgument;

class LikeController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $likes = Like::all();
    return inertia('Likes/Index', ['likes' => $likes]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('Likes/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'user_id'  => 'required|exists:users,id',
      'story_id' => 'required|exists:stories,id',
    ]);
    Like::create($validatedData);
    return redirect()->back()->with(['message' => 'Liked successfully']);
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
