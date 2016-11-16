<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'location', 'roomNumber', 'link'
    ];
}
