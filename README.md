# MobileHub

Taller 3 - Introducción Desarrollo Web/Móvil



Tecnologías Utilizadas
================================================================================================================
Base de Datos:
- MySQL Workbench
  
Backend:
- Laravel 10
  
Frontend:
- Ionic basado en Angular 16

Descarga del proyecto
================================================================================================================
## Programas a instalar

Instala [GIT](https://git-scm.com/downloads)

Instala [XAMPP](https://www.apachefriends.org/es/index.html) con PHP V8.1.

Instala [Composer](https://getcomposer.org/download/) V2.6.5.

Instala [Nodejs](https://nodejs.org/en) V18.17.

Luego de instalado los programas, deber abrir XAMPP Control Panel, ahí debes presionar el boton "config" de Apache y luego seleciona la opcion "PHP (php.ini)", esta abrira un .txt en el cual buscaras "extension=zip", a este le borras el ";" que se encuentra delante.

Todo esto es para habilitar la instalacion del composer desde la misma maquina, evitando que tenga que descargarlo directamente de internet.

Luego guardas el .txt y continuas con los siguientes pasos.

- Clona este repositorio en tu máquina local: 

		git clone https://github.com/naatox/MobileHub


## Backend
Ejecuta estos comandos en una terminal en el siguiente orden:
```bash

cd backendMobileHub

composer install

copy .env.example .env

php artisan key:generate

php artisan jwt:secret

composer dump-autoload


```
Luego de copiado el archivo .ENV ingresa tus preferencias en el archivo.
- DB_PORT => Puerto (Por defecto 3306, cambiar según su preferencia).
- DB_DATABASE => Nombre de la base de datos.
- DB_PASSWORD => Contraseña del proveedor de la base.


Luego continua con estas instrucciones:
```bash

php artisan migrate

php artisan serve
```
Al utilizar el comando php artisan serve, debe de aceptar el crear una nueva base de datos con el nombre ingresado en las preferencias del .ENV, teclear "y" y presionar enter.
La url del backend deberia de desplegarse en la terminal.

## Frontend Mobile
En una nueva termina ejecuta:
```bash

npm install -g @ionic/cli

```
Luego
```bash
cd frontendMobileH

npm install 

ionic serve --o
```
La aplicación se abrira en el navegador, para que esta se pueda visualizar de mejor manera, ingrese a inspecionar elemento y ponga la página en dispositivo móvil.

