<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RentalCompanies extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'address','phone', 'link','email', 'description',
    ];
}
