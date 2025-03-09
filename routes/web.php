<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\StoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing');
})->name('landing');

Route::inertia("/aboutus", "Aboutus");
Route::middleware('auth')->group(function () {
  Route::resource('stories', StoryController::class);
  Route::get("/my-stories", [ProfileController::class, 'stories'])->name('user-stories');

  Route::get("/profile", [ProfileController::class, 'show'])->name('profile');
  Route::get("/search", [SearchController::class, 'search'])->name('search');

  Route::get("/user/{user}", [ProfileController::class, 'other'])->name('user');
});

require __DIR__ . '/auth.php';

