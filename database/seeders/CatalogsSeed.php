<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CatalogsSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('catalogs')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];

        for ($i=0; $i < 10; $i++) { 
            $data[] = ['title' => fake()->title];
        }

        return $data;
    }
}
