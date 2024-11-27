<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing');
});

Route::inertia("/aboutus", "Aboutus");

Route::inertia('/stories', "Stories/Index");

require __DIR__ . '/auth.php';
