<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class genre extends Model
{
  use HasFactory;
  public function stories()
  {
    return $this->hasMany(Story::class, "author");
  }
}
