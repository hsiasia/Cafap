<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\AppController;
use App\Http\Controllers\Web\AuthenticationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [AppController::class, 'getApp'])
->middleware('auth');

// middleware('guest') for guest not for auth user
Route::get('/login', [AppController::class, 'getLogin'])
    ->name('login')
    ->middleware('guest');

// social mean OAuth provider (config/services.php => github)
// change with app\Http\Middleware\RedirectIfAuthenticated.php
Route::get( '/auth/{social}',  [AuthenticationController::class, 'getSocialRedirect'])
      ->middleware('guest');

Route::get( '/auth/{social}/callback',  [AuthenticationController::class, 'getSocialCallback'])
      ->middleware('guest');