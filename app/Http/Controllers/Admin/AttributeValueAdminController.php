<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use App\Models\AttributeValue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttributeValueAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Attribute/AttributeValue/Index', ['attributeValues' => AttributeValue::with(['attribute'])->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Attribute/AttributeValue/Create', ['attributes' => Attribute::get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'attributeId' => 'required',
            'value' => 'required|unique:attribute_values|max:255',
        ]);

        AttributeValue::create([
            'attribute_id' => $validatedData['attributeId'],
            'value' => strtolower($validatedData['value'])
        ]);

        return to_route('attribute-value.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('Admin/Attribute/AttributeValue/Create', ['attributes' => Attribute::get()]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Admin/Attribute/AttributeValue/Edit', [
            'attributes' => Attribute::get(),
            'attributeValue' => AttributeValue::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'attributeId' => 'required',
            'value' => ['required', 'max:255', 'unique:attribute_values,value' . ",$id"],
        ]);
        
        AttributeValue::where("id", $id)->update([
            'attribute_id' => $validatedData['attributeId'],
            'value' => strtolower($validatedData['value'])
        ]);

        return to_route('attribute-value.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        AttributeValue::where('id', $id)->delete();
        return to_route('attribute.index');
    }
}
