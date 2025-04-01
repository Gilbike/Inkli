<?php

namespace App\Http\Controllers;

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

    return inertia("Profile", ["stories" => $stories]);
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

    return inertia("Profile", ["user" => $user, "stories" => $stories]);
  }
}
