<?php

use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;

Route::post('/admin/products/create', [AdminProductController::class, 'create'])->name('product.create');
Route::get('/admin/product/{id}', [AdminProductController::class, 'show'])->name('product.get');
Route::delete('/admin/product/{id}', [AdminProductController::class, 'delete'])->name('product.delete');