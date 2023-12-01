<?php

use App\Http\Controllers\Admin\MainPageController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/dashboard/main', [MainPageController::class, 'index'])->name('index');
Route::post('/setAttribute', [MainPageController::class, 'setAttributes'])->name('setAttribute');

Route::post('/updateTitle/{id}', [MainPageController::class, 'updateTitle'])->name('updateTitle');
Route::post('/updateHeader/{id}', [MainPageController::class, 'updateHeader'])->name('updateHeader');
Route::post('/updateSubheader/{id}', [MainPageController::class, 'updateSubheader'])->name('updateSubheader');
Route::post('/updateImage/{id}', [MainPageController::class, 'updateImage'])->name('updateImage');

Route::delete('/deleteImg/{id}', [MainPageController::class, 'deleteImg'])->name('deleteImg');
Route::delete('/deleteTitle/{id}', [MainPageController::class, 'deleteTitle'])->name('deleteTitle');
Route::delete('/deleteHeader/{id}', [MainPageController::class, 'deleteHeader'])->name('deleteHeader');
Route::delete('/deleteSubheader/{id}', [MainPageController::class, 'deleteSubheader'])->name('deleteSubheader');