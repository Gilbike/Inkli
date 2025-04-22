<?php

use App\Models\User;
use App\Models\Genre;
use App\Models\Story;


it('checks if there is data in the users table', function () {
  $this->assertTrue(User::exists(), 'The users table is empty.');
});
it('checks if there is data in the genres table', function () {
  $this->assertTrue(Genre::exists(), 'The genres table is empty.');
});
it('checks if there is data in the stories table', function () {
  $this->assertTrue(Story::exists(), 'The stories table is empty.');
});
it('checks if data can be added to the stories table', function () {
  $story = Story::create([
    'title'   => 'Test Story',
    'content' => 'This is a test story content.',
    'genre'   => 'Test Genre',
    'author'  => 0, // Assuming 0 is the ID of the author in the users table
  ]);
  $this->assertTrue(Story::where('title', 'Test Story')->exists(), 'Failed to add data to the stories table.');
});



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
