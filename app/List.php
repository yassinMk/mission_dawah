<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = ['name','phone'];

    public function persons()
    {
        return $this->belongsToMany('App\Person', 'listing_person');
    }
}