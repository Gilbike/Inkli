<?php

namespace App\Http\Middleware;

use DB;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $followedUsers = [];
        if ($request->user()) {
            $followedUsers = $request->user()->following()->get();
        }

        $followedGenres = [];
        if ($request->user()) {
            $followedGenres = $request->user()->followingGenres()->get();
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'followedUsers' => $followedUsers,
                'followedGenres' => $followedGenres
            ],
        ];
    }
}
