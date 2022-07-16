<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// pricate API need auth
// 'prefix' for API version, ''middleware' => 'auth:api'' means neet auth
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
    // for list online user data
    Route::get('/user', function( Request $request ){
        return $request->user();
    });
});
