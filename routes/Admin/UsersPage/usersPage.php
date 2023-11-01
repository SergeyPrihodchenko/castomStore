<?php

use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;

Route::post('admin/dashboard/users', [UsersController::class, 'showAllUsers'])->name('showAllUsers');
Route::post('admin/dashboard/showUser', [UsersController::class, 'showUser'])->name('showUser');
Route::post('admin/dashboard/showAllAdmins', [UsersController::class, 'showAllAdmins'])->name('showAllAdmins');

Route::post('admin/dashboard/changeAdmin', [UsersController::class, 'changeAdmin'])->name('changeAdmin');