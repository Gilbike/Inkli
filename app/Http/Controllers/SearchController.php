<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Story;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->query->get('q');
        if ($query == null) {
            return redirect('/stories');
        }

        $users = User::where('name', 'like', "%$query%")->orderByDesc('updated_at')->get();
        $story = Story::where('title', 'like', "%$query%")->orderByDesc('updated_at')->get();

        return inertia('Search', ['users' => $users, 'stories' => $story]);
    }
}
