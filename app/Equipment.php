<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'equipment';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tableChairs', 'lights', 'sound', 'decorations'
    ];
}
