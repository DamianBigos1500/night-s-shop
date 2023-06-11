<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Sku;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkuAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Sku/Index', ['skus' => Sku::with(['product'])->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Sku/Create', ['products' => Product::get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'product_id' => 'required',
            'sku' => 'required',
            'regular_price' => 'required',
            'sale_price' => 'required',
            'quantity' => 'required',
        ]);

        Sku::create([
            'product_id' => $validatedData["product_id"],
            'sku' => $validatedData["sku"],
            'regular_price' => $validatedData["regular_price"],
            'sale_price' => $validatedData["sale_price"],
            'quantity' => $validatedData["quantity"],
        ]);

        return to_route('sku.index');
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
