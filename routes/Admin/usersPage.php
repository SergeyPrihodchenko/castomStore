<?php

use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function() {
    Route::get('admin/users', [UsersController::class, 'showAllUsers'])->name('usersPanel');
    Route::get('admin/users/showUser/{id}', [UsersController::class, 'showUser'])->name('showUser');

    Route::post('admin/users/admins', [UsersController::class, 'admins'])->name('admins');

    Route::post('admin/users/byElmail', [UsersController::class, 'sortUsersByEmail'])->name('byEmail');

    Route::post('admin/users/changeAdmin', [UsersController::class, 'changeAdmin'])->name('changeAdmin');
});