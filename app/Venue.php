<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
	/**
	 * The name of the primary key column used by the model.
	 *
	 * @var string
	*/
	protected $primaryKey = 'locationID';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'location', 'roomNumber', 'link'
    ];
}
