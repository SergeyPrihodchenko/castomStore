<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('main_pages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('title_id')->nullable()->index()->constrained('titles');
            $table->foreignId('header_id')->nullable()->index()->constrained('headers');
            $table->foreignId('subheader_id')->nullable()->index()->constrained('subheaders');
            $table->foreignId('image_id')->nullable()->index()->constrained('images');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_pages');
    }
};
