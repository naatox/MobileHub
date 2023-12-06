<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
     /**
     * Constructor: Establece el middleware para autenticar las solicitudes de la API.
     */
    public function __construct()
    {
        $this->middleware('auth:api');

    }
    public function user()
    {
        return auth()->user();
    }


}
