<?php

use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\ProductFilterController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/products/create', [ProductController::class, 'create'])->name('product.create');
Route::get('/admin/products/update/{product}', [ProductController::class, 'update'])->name('product.update');
Route::post('/admin/products/save', [ProductController::class, 'save'])->name('product.save');
Route::get('/admin/products', [ProductController::class, 'create'])->name('product.index');
Route::get('/admin/products', [ProductController::class, 'index'])->name('products.get');
Route::get('/admin/product/{id}', [ProductController::class, 'show'])->name('product.get');
Route::delete('/admin/product/{id}', [ProductController::class, 'delete'])->name('product.delete');

// Поиск по названию
Route::get('/admin/products/{search}', [ProductFilterController::class, 'get']);
// Получение товаров в виде json
Route::get('/admin/products/json/{limit}', [ProductController::class, 'indexJson']);
