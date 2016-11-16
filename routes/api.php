<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/events', function (Request $request) {
	$events = App\Event::all();
	$json = json_encode($events);
	echo $json;
	return;
});

Route::get('/restaurants', function (Request $request){
	$restaurants = App\Restaurant::all();
	$json = json_encode($restaurants);
	echo $json;
	return;
});

Route::get('/venues', function (Request $request){
	$venues = App\Venue::all();
	$json = json_encode($venues);
	echo $json;
	return;
});

Route::get('/equipements', function (Request $request){
	$equipements = App\Equipement::all();
	$json = json_encode($equipements);
	echo $json;
	return;
});