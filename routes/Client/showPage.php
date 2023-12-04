<?php

use App\Http\Controllers\Client\ShowElementController;
use Illuminate\Support\Facades\Route;

Route::get('/show', [ShowElementController::class, 'index'])->name('show');