<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Story;
use App\Models\Genre;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $genres = Genre::factory(6)->create();

        User::factory(10)
            ->create()
            ->each(function ($user) use ($genres) {
                $user
                    ->stories()
                    ->saveMany(Story::factory(5)->make(['author' => $user->id, 'genre' => $genres->random(1)->pluck('id')[0]]));
            });
    }
}
