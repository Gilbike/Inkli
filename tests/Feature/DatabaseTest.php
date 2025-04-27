<?php

use App\Models\User;
use App\Models\Genre;






it('checks if data can be added to the users table', function () {
  $user = User::create([
    'name'     => 'Test User',
    'email'    => 'testuser@example.com',
    'password' => bcrypt('password'),
  ]);

  $this->assertTrue(User::where('email', 'testuser@example.com')->exists(), 'Failed to add data to the users table.');
});

it('checks if data can be added to the genres table', function () {
  $genre = Genre::create([
    'name' => 'Test Genre',
  ]);

  $this->assertTrue(Genre::where('name', 'Test Genre')->exists(), 'Failed to add data to the genres table.');
});
