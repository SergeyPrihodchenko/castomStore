<?php

use App\Http\Controllers\Admin\CatalogsPageController;
use Illuminate\Support\Facades\Route;

Route::get('admin/catalogs', [CatalogsPageController::class, 'index'])->name('catalogs');
Route::get('admin/catalogs/allCategory', [CatalogsPageController::class, 'allCategory'])->name('allCategory');
Route::get('admin/catalogs/categoriesForCatalog/{id}', [CatalogsPageController::class, 'categoriesForCatalog'])->name('categoriesForCatalog');

Route::post('admin/catalogs/addCatalog', [CatalogsPageController::class, 'addCatalog'])->name('addCatalog');
Route::post('admin/catalogs/addCategory', [CatalogsPageController::class, 'addCategory'])->name('addCategory');
Route::post('admin/catalogs/updateCatalog', [CatalogsPageController::class, 'updateCatalog'])->name('updateCatalog');
Route::post('admin/catalogs/updateCategory', [CatalogsPageController::class, 'updateCategory'])->name('updateCategory');

Route::post('admin/catalogs/updateCatalogForCategory', [CatalogsPageController::class, 'index'])->name('updateCatalogForCategory');

Route::get('admin/catalogs/deleteCatalog/{id}', [CatalogsPageController::class, 'deleteCatalog'])->name('deleteCatalog');
Route::get('admin/catalogs/deleteCategory/{id}', [CatalogsPageController::class, 'deleteCategory'])->name('deleteCategory');