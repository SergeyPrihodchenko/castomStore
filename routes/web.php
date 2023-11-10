<?php

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

Route::get('/', function () {
    return Inertia::render('HomePage/HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('AdminPage/HomePage/HomeAdminPage');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

require __DIR__ . '/Admin/MainPage/mainPage.php';

require __DIR__ . '/Admin/UsersPage/usersPage.php';

require __DIR__ . '/Admin/CatalogPage/catalogPage.php';

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
