<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RentalCompanies extends Model
{
	/**
	 * The name of the primary key column used by the model.
	 *
	 * @var string
	*/
	protected $primaryKey = 'rentalID';

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'rentalCompanies';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'address','phone', 'link','email', 'description',
    ];
}
