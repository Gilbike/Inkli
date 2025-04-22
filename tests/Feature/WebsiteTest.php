<?php

use App\Models\User;

it('checks if the landing page is accessible', function () {
  $response = $this->get('/');
  $response->assertStatus(200);
});

it('checks if the about us page is accessible', function () {
  $response = $this->get('/aboutus');
  $response->assertStatus(200);
});

it('checks if the privacy policy page is accessible', function () {
  $response = $this->get('/privacy-policy');
  $response->assertStatus(200);
});

it('checks if the markdown page is accessible', function () {
  $response = $this->get('/markdown');
  $response->assertStatus(200);
});

it('checks if the user stories page is accessible', function () {
  $this->actingAs(User::factory()->create());
  $response = $this->get('/my-stories');
  $response->assertStatus(200);
});

it('checks if the highlights page is accessible', function () {
  $this->actingAs(User::factory()->create());
  $response = $this->get('/highlights');
  $response->assertStatus(200);
});

it('checks if the profile page is accessible', function () {
  $this->actingAs(User::factory()->create());
  $response = $this->get('/profile');
  $response->assertStatus(200);
});

it('checks if the profile edit page is accessible', function () {
  $this->actingAs(User::factory()->create());
  $response = $this->get('/profile/edit');
  $response->assertStatus(200);
});



