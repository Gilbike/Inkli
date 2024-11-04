<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('story_genres', function (Blueprint $table) {
            $table->foreignId('story')->constrained('stories')->cascadeOnDelete();
            $table->foreignId('genre')->constrained('genres')->cascadeOnDelete();
            $table->primary(['story', 'genre']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('story_genres');
    }
};
