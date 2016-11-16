<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoginCredentialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loginCredentials', function (Blueprint $table) {
            $table->integer('userID')->unsigned();
            $table->foreign('userID')->references('id')->on('users');
            $table->string('username');
            //hashed password $table->
            //salt

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
        Schema::dropIfExists('loginCredentials');
    }
}
