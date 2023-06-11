<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\CartController;
use App\Http\Controllers\User\IndexController;
use App\Http\Controllers\User\ProductController;
use App\Models\Sku;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [IndexController::class, 'index'])->name('index');
Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');
Route::get('/cart', [CartController::class, 'index'])->name('cart.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/sku/{id}', function (int $id, Request $request) {

    $sku = Sku::with(['product', 'product.productVariants.attributes',  'product.productVariants.attributeValues', 'attributeValues'])->find($id);
    // $skuAttr = DB::table('attribute_sku')->where(['sku_id' => 1])->get();
    $skus = Sku::with(['attributeValues'])->where(['product_id' => $sku->product->id])->get();

    // return response()->json([
    //     'sku' => $sku,
    //     'skus' => $skus,
    // ]);

    return Inertia::render('Details', [
        'sku' => $sku,
        'skus' => $skus,
    ]);
});


require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
