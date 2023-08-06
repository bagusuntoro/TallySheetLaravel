<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'nik' => '1',
            'telp' => '1',
            'role' => 'admin',
            'alamat' => 'pusat',
            'email' => 'admin@test.com',
            'password' => Hash::make('12345'),
        ]);
    }
}
