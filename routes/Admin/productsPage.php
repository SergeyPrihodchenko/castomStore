<?php

use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;

// Route::get('/admin/product/list', [AdminProductController::class, 'showProducts'])->name('product.list');
Route::post('/admin/products/create', [AdminProductController::class, 'create'])->name('product.create');
Route::get('/admin/products', [AdminProductController::class, 'index'])->name('products.get');
Route::get('/admin/product/{id}', [AdminProductController::class, 'show'])->name('product.get');
Route::delete('/admin/product/{id}', [AdminProductController::class, 'delete'])->name('product.delete');