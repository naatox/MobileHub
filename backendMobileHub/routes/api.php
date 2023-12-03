<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SessionController;

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





Route::get('login', function (){
    return response()->json([
        'message' => 'No se ha iniciado sesión'
    ], 401);
})->name('login');
