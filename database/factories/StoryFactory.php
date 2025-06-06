<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Story>
 */
class StoryFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    $title = fake()->sentence();
    return [
      'title'       => $title,
      'slug'        => Str::slug($title),
      'content'     => fake()->paragraph(),
      'highlighted' => fake()->boolean(7),
      'likeCount'   => fake()->numberBetween(0, 100)
    ];
  }
}
