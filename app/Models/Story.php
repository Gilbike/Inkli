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
  protected $fillable = ['title', 'content', 'author', 'slug'];
}

