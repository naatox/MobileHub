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
        'fullName.min' => 'El nombre debe tener al menos 10 caracteres',
        'fullName.max' => 'El nombre debe tener un maximo de 150 caracteres',

        'rut.required' => 'El rut es requerido',
        'rut.integer' => 'El rut debe ser un numero',
        'rut.max' => 'El rut debe tener un maximo de 10 digitos',
        'rut.unique' => 'El rut ya existe',

        'password.required' => 'La contraseña es requerida',
        'password.min' => 'La contraseña debe tener al menos 8 caracteres',
        'password.confirmed' => 'Las contraseñas no coinciden',

        'birthYear.required' => 'El año de nacimiento es requerido',
        'birthYear.integer' => 'El año de nacimiento debe ser un numero',
        'birthYear.min' => 'El año de nacimiento debe ser mayor a 1900',
        'birthYear.max' => 'El año de nacimiento debe ser menor a 2023',


    ];
    return $messages;

}

function digit($rut) {
    $rutNumeros = (int)substr($rut, 0, -1);
    $rutArray = str_split(strrev($rutNumeros));

    $serie = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7];

    $suma = 0;

    foreach ($rutArray as $index => $digito) {
        $suma += $digito * $serie[$index % count($serie)];
    }

    $resto = $suma % 11;

    $digitoVerificador = 11 - $resto;

    return ($digitoVerificador == 11) ? 0 : (($digitoVerificador == 10) ? 'K' : $digitoVerificador);
}

function validateRut($rut)
{
    // Eliminar puntos y guión del rut
    $rut = str_replace('.', '', $rut);
    $rut = str_replace('-', '', $rut);

    if (strlen($rut) !== 9) {
        return false;
    }

    if (!ctype_digit(substr($rut, 0, 8))) {
        return false;
    }

    $ultimoCaracter = substr($rut, -1);
    if (!ctype_digit($ultimoCaracter) && $ultimoCaracter !== 'K') {
        return false;
    }

    return true;
}

function password($rut){
    $rut = str_replace('.', '', $rut);
    $rut = str_replace('-', '', $rut);

    return substr($rut, 0, 8);
}

function rutFormat($rut) {



    $numero = substr($rut, 0, -1);
    $verificador = substr($rut, -1);

    $numero_formateado = number_format($numero, 0, '', '.');

    return $numero_formateado . '-' . $verificador;
}
