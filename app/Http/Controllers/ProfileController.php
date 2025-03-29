<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
  /**
   * Display the specified resource.
   */
  public function show(Request $request)
  {
    $user    = auth()->user();
    $stories = $user->stories()->get();

    return inertia("Profile", ["stories" => $stories]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    //
  }

  public function stories()
  {
    $user    = auth()->user();
    $stories = $user->stories()->get();

    return inertia("Stories/MyStories", ["stories" => $stories]);
  }

  public function other(User $user)
  {
    $stories = $user->stories()->get();

    return inertia("Profile", ["user" => $user, "stories" => $stories]);
  }
}
