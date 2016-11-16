<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipement extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tableChairs', 'lights', 'sound', 'decorations'
    ];
}
