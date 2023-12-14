<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $rutDigits = substr($request->rut, -1);
        $digit = digit($request->rut);
        if($digit != $rutDigits){
            return response()->json([
                'message' => 'El rut no es válido',
            ], 400);
        }

        $messages = makeMessages();
        $this->validate($request,[
            'fullName' => ['required', 'string','min:10', 'max:150'],
            'email' => ['required', 'string','email', 'max:255', 'unique:users'
            ,function ($attribute, $value, $fail) {
                if (strpos($value, '@alumnos.ucn.cl') === false && strpos($value, '@ucn.cl') === false  && strpos($value, '@ce.ucn.cl') === false  && strpos($value, '@disc.ucn.cl') === false) {
                    $fail('El email debe ser de la forma @alumnos.ucn.cl o @ucn.cl');
                }
            }],
            'rut' => ['required', 'max:255', 'min:0'],
            'birthYear' => ['required', 'integer', 'min:1900', 'max:2023'],
        ],$messages);
        try{
            $rutFormat = rutFormat($request->rut);
            if(User::where('rut', $rutFormat)->exists()){
                return response()->json([
                    'message' => 'El rut ya existe',
                ], 400);
            }
            $request->rut = rutFormat($request->rut);

            $password = password($request->rut);
            $user = User::create([
                'fullName' => $request->fullName,
                'email' => $request->email,
                'rut' => $request->rut,
                'password' => Hash::make($password),
                'birthYear' => $request->birthYear,
                'enabled' => false,
            ]);
            //->sendEmailVerificationNotification();


            return response()->json([
                'message' => 'Cliente creado exitosamente!',
                'user' => $user
            ], 200);

        }catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }

    }

}
