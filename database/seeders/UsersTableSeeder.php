<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Auth\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                "id" => 1,
                'name' => 'Damian',
                'email' => 'w@w.com',
                'email_verified_at' => now(),
                'password' => bcrypt("12345678"),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                "id" => 2,
                'name' => 'Damian',
                'email' => 'd@d.com',
                'email_verified_at' => now(),
                'password' => bcrypt("12345678"),
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        User::insert($users);
    }
}
