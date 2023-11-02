<?php

use App\Http\Controllers\Admin\CatalogsPageController;
use Illuminate\Support\Facades\Route;

Route::post('admin/catalogs', [CatalogsPageController::class, 'index'])->name('catalogs');
Route::post('admin/allCategory', [CatalogsPageController::class, 'allCategory'])->name('allCategory');
Route::post('admin/categoriesForCatalog', [CatalogsPageController::class, 'categoriesForCatalog'])->name('categoriesForCatalog');
Route::post('admin/addCatalog', [CatalogsPageController::class, 'addCatalog'])->name('addCatalog');
Route::post('admin/addCategory', [CatalogsPageController::class, 'addCategory'])->name('addCategory');
Route::post('admin/updateCatalog', [CatalogsPageController::class, 'updateCatalog'])->name('updateCatalog');
Route::post('admin/updateCategory', [CatalogsPageController::class, 'updateCategory'])->name('updateCategory');
Route::post('admin/updateCatalogForCategory', [CatalogsPageController::class, 'index'])->name('updateCatalogForCategory');
