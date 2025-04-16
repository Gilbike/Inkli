<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\GenreController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing');
})->name('landing');

Route::inertia("/aboutus", "Aboutus");
Route::inertia("/privacy-policy", "Policy");
Route::inertia("/markdown", "Markdown");

Route::middleware('auth')->group(function () {
  Route::resource('stories', StoryController::class);
  Route::get("/my-stories", [ProfileController::class, 'stories'])->name('user-stories');

  Route::get('/stories/{story}/like', [StoryController::class, 'getLike'])->name('likes.getLike');
  Route::post('/stories/{story}/like', [StoryController::class, 'like'])->name('stories.like');
  Route::post('/stories/{story}/dislike', [StoryController::class, 'dislike'])->name('stories.dislike');
  Route::post('/stories/{story}/highlight-toggle', [StoryController::class, 'toggleHighlight'])->middleware("admin")->name('stories.highlight');

  Route::get('/genres/{genre}', [GenreController::class, 'show'])->name('genres.show');
  Route::post('/genres/{genre}/follow', [GenreController::class, 'follow'])->name('genres.follow');
  Route::post('/genres/{genre}/unfollow', [GenreController::class, 'unfollow'])->name('genres.unfollow');

  Route::get("/profile", [ProfileController::class, 'show'])->name('profile');
  Route::get("/profile/edit", [ProfileController::class, 'edit'])->name('profile.edit');
  Route::post("/profile/edit", [ProfileController::class, 'update'])->name('profile.update');
  Route::get("/profile/delete", [ProfileController::class, 'destroy'])->name('profile.delete');

  Route::get("/search", [SearchController::class, 'search'])->name('search');

  Route::get("/user/{user}", [ProfileController::class, 'other'])->name('user');
  Route::post("/user/{user}/follow", [ProfileController::class, 'follow'])->name('user.follow');
  Route::post("/user/{user}/unfollow", [ProfileController::class, 'unfollow'])->name('user.unfollow');
});

require __DIR__ . '/auth.php';
