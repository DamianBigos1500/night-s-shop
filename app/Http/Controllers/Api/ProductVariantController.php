<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductVariantController extends Controller
{
    public function productVariantAttribute(Request $request)
    {
        $table = DB::table('attribute_product_variant');
        $values = [
            'product_variant_id' => $request->product_variant_id,
            'attribute_id' => $request->attribute_id
        ];

        $tableRef = $table->where($values);
        if (!$tableRef->get()->count()) {
            $table->insert($values);
        } else {
            $tableRef->delete();
        }
        return to_route('product-variant.show', $request->product_variant_id);
    }

    public function productVariantAttributeValue(Request $request)
    {
        $table = DB::table('attribute_value_product_variant');
        $values = [
            'product_variant_id' => $request->product_variant_id,
            'attribute_value_id' => $request->attribute_value_id
        ];

        $tableRef = $table->where($values);
        if (!$tableRef->get()->count()) {
            $table->insert($values);
        } else {
            $tableRef->delete();
        }
        return to_route('product-variant.show', $request->product_variant_id);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
