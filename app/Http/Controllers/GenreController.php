<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;

class GenreController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $genres = Genre::all();
    return response()->json($genres);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('Genres/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'name' => 'required|string|max:255',
    ]);
    Genre::create($validatedData);
    return redirect()->back()->with(['message' => 'Genre created successfully']);
  }
}
