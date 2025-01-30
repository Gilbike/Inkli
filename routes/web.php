<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\StoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing');
});

Route::inertia("/aboutus", "Aboutus");
Route::middleware('auth')->group(function () {

  Route::resource('/stories', StoryController::class);



  Route::get("/profile", [ProfileController::class, 'show']);
  Route::get("/search", [SearchController::class, 'search']);
});

require __DIR__ . '/auth.php';

