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

Route::get('/equipment', function (Request $request){
	$equipments = App\Equipment::all();
	$json = json_encode($equipments);
	echo $json;
	return;
});

//
Route::get('/venues/{id}', function($id, Request $request){
	$venue = App\Venue::find($id);
	$json = json_encode($venue);
	echo $json;
	return;
});

Route::post('/user', function(Request $request) {
	$name = $request->input('name');
	$email = $request->input('email');
	$password = $request->input('password');
	$user = new App\User;
	$user->name = $name;
	$user->email = $email;
	$user->password = $password;
	$user->save();
	// 201 == created, 200 == OK
	return response(json_encode($user), 201) 
            ->header('Content-Type', 'application/json');
});


Route::post('/venues', function(Request $request) {
	$location = $request->input('location');
	$roomNumber = $request->input('roomNumber');
	$link = $request->input('link');
	$venue = new App\Venue;
	$venue->location = $location;
	$venue->roomNumber = $roomNumber;
	$venue->link = $link;
	$venue->save();
	// 201 == created, 200 == OK
	return response(json_encode($venue), 201) 
            ->header('Content-Type', 'application/json');
});


Route::post('/restaurants', function(Request $request){
	$name = $request->input('name');
	$address = $request->input('address');
	$phone = $request->input('phone');
	$link = $request->input('link');
	$description = $request->input('description');
	$restaurant = new App\Restaurant;
	$restaurant->name = $name;
	$restaurant->address = $address;
	$restaurant->phone = $phone;
	$restaurant->link = $link;
	$restaurant->description = $description;
	$restaurant->save();
	// 201 == created, 200 == OK
	return response(json_encode($restaurant), 201) 
            ->header('Content-Type', 'application/json');

});

Route::post('/rentalCompanies', function(Request $request){
	$name = $request->input('name');
	$address = $request->input('address');
	$phone = $request->input('phone');
	$link = $request->input('link');
	$email = $request->input('email');
	$description = $request->input('description');
	$rentalCompanies = new App\RentalCompanies;
	$rentalCompanies->name = $name;
	$rentalCompanies->address = $address;
	$rentalCompanies->phone = $phone;
	$rentalCompanies->link = $link;
	$rentalCompanies->email = $email;
	$rentalCompanies->description = $description;
	$rentalCompanies->save();
	// 201 == created, 200 == OK
	return response(json_encode($rentalCompanies), 201) 
            ->header('Content-Type', 'application/json');

});

Route::post('/equipment', function(Request $request){
	$tablesChairs = $request->input('tablesChairs');
	$lights = $request->input('lights');
	$sound = $request->input('sound');
	$decorations = $request->input('decorations');
	$rentalID = $request->input('rentalID');
	// Verify the rental exists
	try {
		$rental = App\RentalCompanies::find($rentalID);
	} catch (PDOException $e) {
		$error = ["error" => $e->getMessage()];
		return response(json_encode($error), 400)
				->header('Content-Type', 'application/json');
	}
	$equipment = new App\Equipment;
	$equipment->tablesChairs = $tablesChairs;
	$equipment->lights = $lights;
	$equipment->sound = $sound;
	$equipment->decorations = $decorations;
	$equipment->rentalID = $rentalID;
	$equipment->save();
	// 201 == created, 200 == OK
	return response(json_encode($equipment), 201) 
            ->header('Content-Type', 'application/json');

});

Route::post('/events', function(Request $request){
	$orgName = $request->input('orgName');
	$eventTitle = $request->input('eventTitle');
	$eventType = $request->input('eventType');
	$date = $request->input('date');
	$time = $request->input('time');
	$info = $request->input('info');
	$userID = $request->input('userID');
	// Verify the user exists
	try {
		$user = App\User::find($userID);
	} catch (PDOException $e) {
		$error = ["error" => $e->getMessage()];
		return response(json_encode($error), 400)
				->header('Content-Type', 'application/json');
	}
	$restID = $request->input('restID');
	// Verify the restaurant exists
	try {
		$restaurant = App\Restaurant::find($restID);
	} catch (PDOException $e) {
		$error = ["error" => $e->getMessage()];
		return response(json_encode($error), 400)
				->header('Content-Type', 'application/json');
	}
	$locationID = $request->input('locationID');
	// Verify the event exists
	try {
		$venue = App\Venue::find($locationID);
	} catch (PDOException $e) {
		$error = ["error" => $e->getMessage()];
		return response(json_encode($error), 400)
				->header('Content-Type', 'application/json');
	}
	$rentalID = $request->input('rentalID');
	// Verify the rental exists
	try {
		$rental = App\RentalCompanies::find($rentalID);
	} catch (PDOException $e) {
		$error = ["error" => $e->getMessage()];
		return response(json_encode($error), 400)
				->header('Content-Type', 'application/json');
	}
	$events = new App\Event;
	$events->orgName = $orgName;
	$events->eventTitle = $eventTitle;
	$events->eventType = $eventType;
	$events->date = $date;
	$events->time = $time;
	$events->info = $info;
	$events->userID = $userID;
	$events->restID = $restID;
	$events->locationID = $locationID;
	$events->rentalID = $rentalID;
	$events->save();
	// 201 == created, 200 == OK
	return response(json_encode($events), 201) 
            ->header('Content-Type', 'application/json');

});


