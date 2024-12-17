<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing');
});

Route::inertia("/aboutus", "Aboutus");

Route::middleware('auth')->group(function () {
  Route::inertia('/stories', "Stories/Index")->name('stories');
  Route::get("/profile", [ProfileController::class, 'show']);
});

require __DIR__ . '/auth.php';

