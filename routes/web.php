<?php

use App\Http\Controllers\MainPageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [MainPageController::class, 'index'])->name('main');

Route::get('/dashboard', function () {
    return Inertia::render('AdminPage/HomePage/HomeAdminPage');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

require __DIR__ . '/Admin/mainPage.php';

require __DIR__ . '/Admin/usersPage.php';

require __DIR__ . '/Admin/catalogPage.php';

require __DIR__ . '/Admin/categoryPage.php';

require __DIR__ . '/Admin/productsPage.php';

require __DIR__ . '/Client/showPage.php';









//test
Route::get('/editShopDetails', function () {
    return Inertia::render('AdminPage/Form/EditShopDetailsPage');
})->middleware(['auth', 'verified'])->name('editShopDetails');

Route::get('/EditHomeShop', function () {
    return Inertia::render('AdminPage/Form/EditHomeShopPage');
})->middleware(['auth', 'verified'])->name('EditHomeShop');

Route::get('/EditShopProduct', function () {
    return Inertia::render('AdminPage/Form/EditShopProductPage');
})->middleware(['auth', 'verified'])->name('EditShopProduct');

Route::get('/AddShopProduct', function () {
    return Inertia::render('AdminPage/Form/AddShopProductPage');
})->middleware(['auth', 'verified'])->name('AddShopProduct');

Route::get('/CatalogPage', function () {
    return Inertia::render('AdminPage/CatalogPage/CatalogPage');
})->middleware(['auth', 'verified'])->name('CatalogPage');

Route::get('/CategoryPage', function () {
    return Inertia::render('AdminPage/CategoryPage/CategoryPage');
})->middleware(['auth', 'verified'])->name('CategoryPage');

Route::get('/ProductPage', function () {
    return Inertia::render('AdminPage/ProductPage/ProductPage');
})->middleware(['auth', 'verified'])->name('ProductPage');