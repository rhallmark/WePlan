<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /**
	 * The name of the primary key column used by the model.
	 *
	 * @var string
	*/
	protected $primaryKey = 'eventID';
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'events';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'orgName', 'eventTitle', 'eventType', 'date', 'time', 'info'
    ];
}
