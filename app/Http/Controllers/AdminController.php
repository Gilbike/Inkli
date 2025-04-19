<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;
use \App\Models\Genre;

class AdminController extends Controller
{
    function show()
    {
        $users = User::all();
        $genres = Genre::all();

        return inertia("AdminPanel", ["users" => $users, "genres" => $genres]);
    }
}
