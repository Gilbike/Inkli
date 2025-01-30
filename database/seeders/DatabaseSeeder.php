<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Story;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)
            ->has(Story::factory()->count(5))
            ->create();
    }
}
