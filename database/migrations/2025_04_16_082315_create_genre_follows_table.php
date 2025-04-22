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
        Schema::create('genre_follows', function (Blueprint $table) {
            $table->foreignId('who')->constrained('users')->cascadeOnDelete();
            $table->foreignId('which')->constrained('genres')->cascadeOnDelete();
            $table->primary(['who', 'which']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('genre_follows');
    }
};
