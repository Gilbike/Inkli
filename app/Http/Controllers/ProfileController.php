<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
  /**
   * Display the specified resource.
   */
  public function show(Request $request)
  {
    $user = auth()->user();
    $stories = $user->stories()->get();
    $likes = $user->likes()->count();

    $badges = [
      "stry" => null,
      "like" => null,
      "join" => null,
      "rgst" => null
    ];

    if ($stories->count() >= 10) {
      $badges["stry"] = "brnz";
    } else if ($stories->count() >= 50) {
      $badges["stry"] = "slvr";
    } else if ($stories->count() >= 100) {
      $badges["stry"] = "gld";
    }

    if ($likes >= 50) {
      $badges["like"] = "brnz";
    } else if ($likes >= 100) {
      $badges["like"] = "slvr";
    } else if ($likes >= 500) {
      $badges["like"] = "gld";
    }

    // account age in months
    $acc_age = date_diff(date_create($user->created_at), date_create("now"))->m;
    if ($acc_age >= 0) {
      $badges["join"] = "brnz";
    } else if ($acc_age >= 6) {
      $badges["join"] = "slvr";
    } else if ($acc_age >= 12) {
      $badges["join"] = "gld";
    }

    if ($user->id <= 1000) {
      $badges["rgst"] = "brnz";
    } else if ($user->id <= 100) {
      $badges["rgst"] = "slvr";
    } else if ($user->id <= 10) {
      $badges["rgst"] = "gld";
    }

    return inertia("Profile", ["stories" => $stories, "badges" => $badges]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Request $request)
  {
    return inertia("Profile/Edit");
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request)
  {
    $validated = $request->validate([
      "name" => "required",
      "profilepicture" => "required"
    ]);

    $image = "data:image/jpg;base64," . base64_encode(file_get_contents($request->file('profilepicture')->path()));

    $user = auth()->user();
    $user->name = $validated["name"];
    $user->profilepicture = $image;

    $user->save();

    return back()->with("success", "");
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Request $request)
  {
    $user = auth()->user();
    $user->delete();

    Auth::guard('web')->logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect("/")->with("success", "");
  }

  public function stories()
  {
    $user = auth()->user();
    $stories = $user->stories()->get();

    return inertia("Stories/MyStories", ["stories" => $stories]);
  }

  public function other(User $user)
  {
    $stories = $user->stories()->get();
    $likes = $user->likes()->count();
    $followed = DB::table("follows")
      ->where("who", "=", auth()->user()->id)
      ->where("whom", "=", $user->id)
      ->count("*") > 0;

    $badges = [
      "stry" => null,
      "like" => null,
      "join" => null,
      "rgst" => null
    ];

    if ($stories->count() >= 10) {
      $badges["stry"] = "brnz";
    } else if ($stories->count() >= 50) {
      $badges["stry"] = "slvr";
    } else if ($stories->count() >= 100) {
      $badges["stry"] = "gld";
    }

    if ($likes >= 50) {
      $badges["like"] = "brnz";
    } else if ($likes >= 100) {
      $badges["like"] = "slvr";
    } else if ($likes >= 500) {
      $badges["like"] = "gld";
    }

    // account age in months
    $acc_age = date_diff(date_create($user->created_at), date_create("now"))->m;
    if ($acc_age >= 0) {
      $badges["join"] = "brnz";
    } else if ($acc_age >= 6) {
      $badges["join"] = "slvr";
    } else if ($acc_age >= 12) {
      $badges["join"] = "gld";
    }

    if ($user->id <= 10) {
      $badges["rgst"] = "gld";
    } else if ($user->id <= 100) {
      $badges["rgst"] = "slvr";
    } else if ($user->id <= 1000) {
      $badges["rgst"] = "brnz";
    }

    return inertia("Profile", ["user" => $user, "stories" => $stories, "badges" => $badges, "followed" => $followed]);
  }

  public function follow(Request $request, User $user)
  {
    DB::beginTransaction();
    DB::table("follows")->insert(["who" => auth()->user()->id, "whom" => $user->id]);
    DB::commit();

    return back()->with("success", "");
  }

  public function unfollow(Request $request, User $user)
  {
    DB::beginTransaction();
    DB::table("follows")
      ->where("who", "=", auth()->user()->id)
      ->where("whom", "=", $user->id)
      ->delete();
    DB::commit();

    return back()->with("success", "");
  }
}
