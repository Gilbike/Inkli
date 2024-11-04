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
        Schema::create('proposed_additions', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->integer('likes')->default(0);
            $table->foreignId('author')->constrained('users')->cascadeOnDelete();
            $table->foreignId('story')->constrained('stories')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposed_additions');
    }
};
