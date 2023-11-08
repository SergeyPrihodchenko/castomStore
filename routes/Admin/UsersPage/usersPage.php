<?php

use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('admin/users', [UsersController::class, 'showAllUsers'])->name('showAllUsers');
Route::get('admin/users/showUser/{id}', [UsersController::class, 'showUser'])->name('showUser');

Route::get('admin/users/showAllAdmins', [UsersController::class, 'showAllAdmins'])->name('showAllAdmins');

Route::post('admin/users/changeAdmin', [UsersController::class, 'changeAdmin'])->name('changeAdmin');