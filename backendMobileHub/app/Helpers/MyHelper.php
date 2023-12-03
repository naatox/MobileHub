<?php



/**
 * Función makeMessages
 *
 * Devuelve un array asociativo con mensajes personalizados para las reglas de validación.
 *
 * @return array
 */
function makeMessages()
{
    $messages = [
        'email.required' => 'El email es requerido',
        'email.email' => 'El email debe ser un email valido',
        'email.unique' => 'El email ya existe',

        'fullName.required' => 'El nombre es requerido',
        'fullName.string' => 'El nombre debe ser un string',

        'rut.required' => 'El rut es requerido',
        'rut.integer' => 'El rut debe ser un numero',
        'rut.max' => 'El rut debe tener un maximo de 10 digitos',

        'password.required' => 'La contraseña es requerida',
        'password.min' => 'La contraseña debe tener al menos 8 caracteres',

        'yearBirth.required' => 'El año de nacimiento es requerido',
        'yearBirth.integer' => 'El año de nacimiento debe ser un numero',
        'yearBirth.min' => 'El año de nacimiento debe ser mayor a 1900',
        'yearBirth.max' => 'El año de nacimiento debe ser menor a 2023',


    ];
    return $messages;
}
