<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductAdminController;
use App\Http\Controllers\Admin\AttributeAdminController;
use App\Http\Controllers\Admin\AttributeValueAdminController;
use App\Http\Controllers\Admin\ProductVariantAdminController;
use App\Http\Controllers\Admin\SkuAdminController;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
  Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

  Route::resource('product', ProductAdminController::class);
  Route::resource('attribute', AttributeAdminController::class);
  Route::resource('attribute-value', AttributeValueAdminController::class);
  Route::resource('product-variant', ProductVariantAdminController::class);
  Route::resource('sku', SkuAdminController::class);
});
