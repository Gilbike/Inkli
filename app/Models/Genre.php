<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
  use HasFactory;

  public function stories()
  {
    return $this->hasMany(Story::class, "genre");
  }
  protected $fillable = ['name'];
}
