<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];

        for ($i=0; $i < 10; $i++) { 
            $id = rand(200, 1000);
            $data[] = ['name' => 'test', 'email' => "test{$id}@mail.ru", 'password' => Hash::make('12345'), 'code' => 12345, 'time_live_code' => Carbon::now('Europe/Moscow')->toDateString()];
        }

        return $data;
    }
}
