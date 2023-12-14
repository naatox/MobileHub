<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::create([
            'fullName' => 'Test User',
            'email' => 'test@alumnos.ucn.cl',
            'rut' => '123456789',
            'password' => bcrypt('password'),
            'birthYear' => 1999,

         ]);

    }
}
