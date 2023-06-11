<?php

use App\Http\Controllers\Api\ProductVariantController;
use App\Models\Attribute;
use App\Models\AttributeValue;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\Sku;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('product-variant-attribute', [ProductVariantController::class, 'productVariantAttribute'])->name('change-attribute-to-product');
Route::post('product-variant-attribute-value', [ProductVariantController::class, 'productVariantAttributeValue'])->name('change-attribute-value-to-product');

Route::get('/test2', function (Request $request) {
    $table1 = DB::table('attribute_product_variant')->insert([
        ['product_variant_id' => 1,   'attribute_id' => 1],
        ['product_variant_id' => 1,  'attribute_id' => 2],
        ['product_variant_id' => 1 ,  'attribute_id' => 3],
    ]);
    
    $table1 = DB::table('attribute_value_product_variant')->insert([
        ['product_variant_id' => 1,   'attribute_value_id' => 1],
        ['product_variant_id' => 1,   'attribute_value_id' => 3],

        ['product_variant_id' => 1,   'attribute_value_id' => 4],
        ['product_variant_id' => 1,   'attribute_value_id' => 5],

        ['product_variant_id' => 1,  'attribute_value_id' => 7],
        ['product_variant_id' =>1 ,  'attribute_value_id' => 8],
    ]);

    $table2 = DB::table('attribute_sku')->insert([
        ['sku_id' => 1,   'attribute_value_id' => 1],
        ['sku_id' => 1,  'attribute_value_id' => 4],
        ['sku_id' => 1,  'attribute_value_id' => 7],

        ['sku_id' => 2,   'attribute_value_id' => 1],
        ['sku_id' => 2,  'attribute_value_id' => 4],
        ['sku_id' => 2,  'attribute_value_id' => 8],

    ]);
});

Route::get('/test3/{id}', function (int $id, Request $request) {

    $sku = Sku::with(['product', 'product.productVariants.attributes',  'product.productVariants.attributeValues', 'attributeValues'])->find($id);
    // $skuAttr = DB::table('attribute_sku')->where(['sku_id' => 1])->get();
    $skus = Sku::with(['attributeValues'])->where(['product_id' => $sku->id])->get();

    return response()->json([
        'sku' => $sku,
        'skus' => $skus,
    ]);
});

Route::get('/test', function () {
    $product = Product::find(1);
    if (!$product) {
        Product::create([
            'name' => 'Iphone 14',
            'short_description' => 'dfxivpasoapasdkoa sdakldasdknlasldknasdlk',
            'description' => 'dfxivpasoapasdkoa sdakldasdknlasldknasdlk',
        ]);
    }
    $product = Product::find(1);

    $attribute = Attribute::find(1);
    if (!$attribute) {
        Attribute::create([
            'name' => 'colors'
        ]);
    }
    $attribute = Attribute::find(1);

    $attr_value = AttributeValue::find(1);
    if (!$attr_value) {
        $attr_value = AttributeValue::create([
            'attribute_id' => 1,
            'value' => 'blue'
        ]);
    }
    $attr_value = AttributeValue::find(1);


    $sku = Sku::find(1);
    if (!$sku) {
        $sku = Sku::create([
            'product_id' => 1,
            'regular_price' => 372,
            'sold_price' => 360,
            'quantity' => 200,
            'sku' => '23-12-31',
        ]);
    }

    $productVariant = ProductVariant::find(1);
    if (!$productVariant) {
        $productVariant = ProductVariant::create([
            'product_id' => 1
        ]);
    }

    // $productVariant->attributes()->attach([$attribute->id]);
    // $productVariant->attributeValues()->attach([$attr_value->id]);

    $productVariant = ProductVariant::with(['product', 'attributes'])->find(1);

    $sku = Sku::with(['product'])->find(1);
    $attribute = Attribute::with([])->find(1);


    // $skuAttribute = SkuAttribute::find(1);
    // if (!$skuAttribute) {
    //     $skuAttribute = SkuAttribute::create([
    //         'sku_id' => $sku->id,
    //         'attribute_id' => $attribute->id,
    //         'attribute_value_id' => $attr_value->id
    //     ]);
    // }
    // $skuAttribute = SkuAttribute::find(1);

    return response()->json([
        // 'product' => $product,
        'productVariant' => $productVariant,
        'sku' => $sku,
        'attribute' =>   $attribute,
        'attr_value' => $attr_value,
        // 'skuAttribute' => $skuAttribute
    ]);
});
