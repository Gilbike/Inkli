<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;

class AdminController extends Controller
{
    function show()
    {
        $users = User::all();
        return inertia("AdminPanel", ["users" => $users]);
    }
}
