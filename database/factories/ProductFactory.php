<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product_name = $this->faker->unique()->words($nb = 3, $asText = true);
        $slug = Str::slug($product_name);
        $featured = rand(0, 120) < 30 ? true : false;

        return [
            'name' => $product_name,
            'slug' => $slug,
            'code' => $this->faker->text(200),
            'short_description' => $this->faker->text(100),
            'description' => $this->faker->text(400),
            'regular_price' => $this->faker->numberBetween(100, 500),
            // 'sale_price' => 343,
            'quantity' =>  $this->faker->numberBetween(20, 50),
            'featured' =>  $featured,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
