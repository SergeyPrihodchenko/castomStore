<?php

use App\Http\Controllers\Admin\CategoriesController;
use Illuminate\Support\Facades\Route;

Route::get('admin/categoies', [CategoriesController::class, 'index'])->name('categories');

Route::get('admin/categories/json', [CategoriesController::class, 'setCategory'])->name('setCategory');

Route::get('admin/categories/categoriesForCatalog/{id}', [CategoriesController::class, 'categoriesForCatalog'])->name('categoriesForCatalog');

Route::post('admin/categories/setCategory', [CategoriesController::class, 'setCategory'])->name('setCategory');

Route::post('admin/categories/updateCategory', [CategoriesController::class, 'updateCategory'])->name('updateCategory');

Route::get('admin/categories/deleteCategory/{id}', [CategoriesController::class, 'deleteCategory'])->name('deleteCategory');
