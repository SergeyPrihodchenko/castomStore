<?php

use App\Http\Controllers\Admin\AdminMainPageController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/dashboard/main', [AdminMainPageController::class, 'index'])->name('index');
Route::post('/setAttribute', [AdminMainPageController::class, 'setAttributes'])->name('setAttribute');

Route::post('/updateTitle/{id}', [AdminMainPageController::class, 'updateTitle'])->name('updateTitle');
Route::post('/updateHeader/{id}', [AdminMainPageController::class, 'updateHeader'])->name('updateHeader');
Route::post('/updateSubheader/{id}', [AdminMainPageController::class, 'updateSubheader'])->name('updateSubheader');
Route::post('/updateImage/{id}', [AdminMainPageController::class, 'updateImage'])->name('updateImage');

Route::delete('/deleteImg/{id}', [AdminMainPageController::class, 'deleteImg'])->name('deleteImg');
Route::delete('/deleteTitle/{id}', [AdminMainPageController::class, 'deleteTitle'])->name('deleteTitle');
Route::delete('/deleteHeader/{id}', [AdminMainPageController::class, 'deleteHeader'])->name('deleteHeader');
Route::delete('/deleteSubheader/{id}', [AdminMainPageController::class, 'deleteSubheader'])->name('deleteSubheader');