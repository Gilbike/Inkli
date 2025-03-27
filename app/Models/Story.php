<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Story extends Model
{
  use HasFactory;

  public function author()
  {
    return $this->belongsTo(User::class, "author");
  }

  public function likes()
  {
    return $this->hasMany(Like::class, 'story_id');
  }

  public function genre()
  {
    return $this->belongsTo(Genre::class);
  }

  protected $fillable = ['title', 'content', 'author', 'slug'];
}

