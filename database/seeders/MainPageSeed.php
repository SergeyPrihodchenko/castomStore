<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MainPageSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('main_pages')->insert(['title_id' => 1, 'header_id' => 1, 'subheader_id' => 1, 'image_id' => 1]);
    }
}
