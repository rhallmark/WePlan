<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FoodChoice extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'breakast', 'lunch', 'dinner', 'dessert'
    ];
}
