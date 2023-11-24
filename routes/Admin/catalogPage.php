<?php

use App\Http\Controllers\Admin\CatalogsPageController;
use Illuminate\Support\Facades\Route;

Route::get('admin/catalogs', [CatalogsPageController::class, 'index'])->name('catalogs');

Route::get('admin/catalogs/json', [CatalogsPageController::class, 'indexJson'])->name('catalogs.json');

Route::post('admin/catalogs/setCatalog', [CatalogsPageController::class, 'addCatalog'])->name('setCatalog');

Route::post('admin/catalogs/updateCatalog', [CatalogsPageController::class, 'updateCatalog'])->name('updateCatalog');

Route::post('admin/catalogs/updateCatalogForCategory', [CatalogsPageController::class, 'updateCatalogForCategory'])->name('updateCatalogForCategory');

Route::get('admin/catalogs/deleteCatalog/{id}', [CatalogsPageController::class, 'deleteCatalog'])->name('deleteCatalog');

Route::get('admin/catalogs/acardion', [CatalogsPageController::class, 'indexAcardion'])->name('catalogs.acardion');