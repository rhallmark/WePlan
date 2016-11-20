<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquipementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipment', function (Blueprint $table) {
            $table->integer('rentalID')->unsigned();
            $table->foreign('rentalID')->references('rentalId')->on('rentalCompanies');
            $table->boolean('tablesChairs');
            $table->boolean('lights');
            $table->boolean('sound');
            $table->boolean('decorations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipment');
    }
}
