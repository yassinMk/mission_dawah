<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = ['name','phone'];
    protected $table = "persons";

    public function lists()
    {
        return $this->belongsToMany('App\Listing', 'listing_person');
    }
}