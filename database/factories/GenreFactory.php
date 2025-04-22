<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Genre>
 */
class GenreFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $names = ["Sci-fi", "Romantic", "Action", "Kids", "Medieval", "Fantasy", "Real life"];
        return [
            'name' => fake()->unique()->randomElement($names)
        ];
    }
}
