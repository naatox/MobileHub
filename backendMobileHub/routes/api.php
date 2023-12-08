<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SessionController;
use App\Http\Controllers\Account\UserController;
use App\Http\Controllers\Guest\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(SessionController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('logout', 'logout');

});

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
});

Route::controller(UserController::class)->group(function(){
    Route::get('user', 'user');
    Route::put('edit', 'editUser');
    Route::put('password', 'updatePass');
});





Route::get('login', function (){
    return response()->json([
        'message' => 'No se ha iniciado sesión'
    ], 401);
})->name('login');
