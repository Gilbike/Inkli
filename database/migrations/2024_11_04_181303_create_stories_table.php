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
    Schema::create('stories', function (Blueprint $table) {
      $table->id();
      $table->string('title')->unique();
      $table->string('slug')->unique();
      $table->text('content');
      $table->boolean('highlighted')->default(false);
      $table->foreignId('author')->constrained('users')->cascadeOnDelete();
      $table->integer('likeCount')->default(0);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('stories');
  }
};
