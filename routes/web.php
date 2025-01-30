<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing');
});

Route::inertia("/aboutus", "Aboutus");

Route::inertia("/create", "Stories/Create");

Route::middleware('auth')->group(function () {
  Route::inertia('/stories', "Stories/Index")->name('stories');

  Route::get("/profile", [ProfileController::class, 'show']);
  Route::get("/search", [SearchController::class, 'search']);
});

require __DIR__ . '/auth.php';

