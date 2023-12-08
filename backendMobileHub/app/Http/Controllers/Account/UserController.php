<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

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

    public function editUser(Request $request)
    {
        $user = auth()->user();
        if($user->email == $request->email){
            $messages = makeMessages();
            $this->validate($request,[
                'fullName' => ['string', 'max:255'],
                'birthYear' => ['integer', 'min:1900', 'max:2023'],
            ],$messages);
        }else{
            $messages = makeMessages();
            $this->validate($request,[
            'fullName' => ['string', 'max:255'],
            'email' => ['string','email', 'max:255', 'unique:users'
            ,function ($attribute, $value, $fail) {
                if (strpos($value, '@alumnos.ucn.cl') === false && strpos($value, '@ucn.cl') === false  && strpos($value, '@ce.ucn.cl') === false  && strpos($value, '@disc.ucn.cl') === false) {
                    $fail('El email debe ser de la forma @alumnos.ucn.cl o @ucn.cl');
                }
            }],
            'birthYear' => ['integer', 'min:1900', 'max:2023'],
            ],$messages);

        }


        try{

            $beforeUser = User::find($request->id)->update([
                'fullName' => $request->fullName,
                'email' => $request->email,
                'birthYear' => $request->birthYear

            ]);
            $updatedUser= User::find($request->id);
            return response()->json([
                'status' => $updatedUser,
                'message' => 'Usuario actualizado correctamente.'
            ], 200);

        }catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }

    }
    public function updatePass(Request $request){
        $user = auth()->user();
        $messages = makeMessages();
        $this->validate($request,[
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ],$messages);
        try{
            $user->update([
                'password' => bcrypt($request->password),
            ]);
            return response()->json([
                'status' => $user,
                'message' => 'Contraseña actualizada correctamente.'
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }
    }

}
