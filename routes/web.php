<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\GenreController;
use App\Models\Story;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing');
})->name('landing');

Route::inertia("/aboutus", "Aboutus");
Route::inertia("/privacy-policy", "Policy");
Route::inertia("/markdown", "Markdown");

Route::get("/api/stories", function () {
  return response()->json(Story::with(["author", "genre"])->orderByDesc("created_at")->get());
});

Route::middleware('auth')->group(function () {
  Route::resource('stories', StoryController::class)->only(["index", "create", "store", "show"]);
  Route::get("/my-stories", [ProfileController::class, 'stories'])->name('user-stories');
  Route::get("/highlights", [StoryController::class, 'showHighlighted']);

  Route::get('/stories/{story}/like', [StoryController::class, 'getLike'])->name('likes.getLike');
  Route::post('/stories/{story}/like', [StoryController::class, 'like'])->name('stories.like');
  Route::post('/stories/{story}/dislike', [StoryController::class, 'dislike'])->name('stories.dislike');

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

// Admin routes
Route::middleware(["auth", "admin"])->group(function () {
  Route::get("/adminpanel", [AdminController::class, "show"])->name("admin.panel");

  Route::delete("/user/{user}/ban", [ProfileController::class, "deleteByAdmin"])->name("user.ban");
  Route::put("/user/{user}/grant", [ProfileController::class, "grantAdmin"])->name("user.admin.grant");
  Route::put("/user/{user}/remove", [ProfileController::class, "removeAdmin"])->name("user.admin.remove");

  Route::post("/genres/create", [GenreController::class, "store"])->name("genres.store");
  Route::delete("/genres/{genre}/delete", [GenreController::class, "destroy"])->name("genres.delete");

  Route::post('/stories/{story}/highlight-toggle', [StoryController::class, 'toggleHighlight'])->middleware("admin")->name('stories.highlight');
  Route::delete('/stories/{story}/remove', [StoryController::class, 'destroy'])->name('stories.delete');
});

require __DIR__ . '/auth.php';
