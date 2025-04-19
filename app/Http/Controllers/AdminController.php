<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;
use \App\Models\Genre;
use \App\Models\Story;

class AdminController extends Controller
{
    function show(Request $request)
    {
        $success = $request->session()->has("success");

        $users = User::all();
        $genres = Genre::all();
        $stories = Story::all();

        return inertia("AdminPanel", ["users" => $users, "genres" => $genres, "stories" => $stories, "success" => $success]);
    }
}
