<?php

use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/products/create', [AdminProductController::class, 'create'])->name('product.create');
Route::get('/admin/products/update/{product}', [AdminProductController::class, 'update'])->name('product.update');
Route::post('/admin/products/save', [AdminProductController::class, 'save'])->name('product.save');
Route::get('/admin/products', [AdminProductController::class, 'create'])->name('product.index');
Route::get('/admin/products', [AdminProductController::class, 'index'])->name('products.get');
Route::get('/admin/product/{id}', [AdminProductController::class, 'show'])->name('product.get');
Route::delete('/admin/product/{id}', [AdminProductController::class, 'delete'])->name('product.delete');
