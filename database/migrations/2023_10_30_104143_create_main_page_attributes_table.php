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
        Schema::create('main_page_attributes', function (Blueprint $table) {
            $table->foreignId('title_id')->nullable()->index()->constrained('title_main_page_attributes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('header_id')->nullable()->index()->constrained('header_main_page_attributes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('subheader_id')->nullable()->index()->constrained('subheader_main_page_attributes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('img_path_id')->nullable()->index()->constrained('image_main_page_attributes')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_page_attributes');
    }
};
