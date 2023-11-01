<?php

use App\Http\Controllers\AdminMainPageController;
use Illuminate\Support\Facades\Route;

Route::post('/admin/dashboard', [AdminMainPageController::class, 'index'])->name('index');
Route::post('/setAttribute', [AdminMainPageController::class, 'setAttributes'])->name('setAttribute');

Route::post('/updateTitle/{id}', [AdminMainPageController::class, 'updateTitle'])->name('updateTitle');
Route::post('/updateHeader/{id}', [AdminMainPageController::class, 'updateHeader'])->name('updateHeader');
Route::post('/updateSubheader/{id}', [AdminMainPageController::class, 'updateSubheader'])->name('updateSubheader');
Route::post('/updateImage/{id}', [AdminMainPageController::class, 'updateImage'])->name('updateImage');

Route::post('/deleteImg/{id}', [AdminMainPageController::class, 'deleteImg'])->name('deleteImg');
Route::post('/deleteTitle/{id}', [AdminMainPageController::class, 'deleteTitle'])->name('deleteTitle');
Route::post('/deleteHeader/{id}', [AdminMainPageController::class, 'deleteHeader'])->name('deleteHeader');
Route::post('/deleteSubheader/{id}', [AdminMainPageController::class, 'deleteSubheader'])->name('deleteSubheader');