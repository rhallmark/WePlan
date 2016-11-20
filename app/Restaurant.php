<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
	/**
	 * The name of the primary key column used by the model.
	 *
	 * @var string
	*/
	protected $primaryKey = 'restID';
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'restaurants';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'addres', 'phone', 'link', 'description'
    ];
}
