<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];

        for ($i=0; $i < 10; $i++) { 
            $id = rand(2, 10);
            $data[] = ['title' => fake()->title, 'catalog_id' => $id];
        }

        return $data;
    }
}
