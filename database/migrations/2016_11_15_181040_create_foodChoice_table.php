<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodChoiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foodChoice', function (Blueprint $table) {
            $table->integer('restID')->unsigned();
            $table->foreign('restID')->references('restID')->on('restaurant');
            $table->boolean('breakfast');
            $table->boolean('lunch');
            $table->boolean('dinner');
            $table->boolean('dessert');
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
        Schema::dropIfExists('foodChoice');
    }
}
