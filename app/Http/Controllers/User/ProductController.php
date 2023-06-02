<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $max_price = Product::max('regular_price');
        $productsQuery = Product::query()
            ->when(
                request('q'),
                function ($query) {
                    $query->where('name', "LIKE", '%' . request('q') . '%')
                        ->orWhere('slug', "LIKE", '%' . request('q') . '%')
                        ->orWhere('short_description', "LIKE", '%' . request('q') . '%')
                        ->orWhere('description', "LIKE", '%' . request('q') . '%')
                        ->orWhereHas('category', function ($query) {
                            $query->where('name', "LIKE", '%' . request('q') . '%')
                                ->orWhere('slug', "LIKE", '%' . request('q') . '%');
                        })->orWhereHas('category.parent', function ($query) {
                            $query->where('name', "LIKE", '%' . request('q') . '%')
                                ->orWhere('slug', "LIKE", '%' . request('q') . '%');
                        });
                }
            )
            ->when(request('sub_cat'), function ($query) {
                $query->where('category_id', request('sub_cat'));
            })
            ->when(request('cat'), function ($query) {
                $query->whereHas('category', function ($query) {
                    $query->where('parent_id', request('cat'));
                });
            })
            ->when(request('price_fr') || request('price_to'), function ($query) use ($max_price) {
                $query->whereBetween('regular_price', [request('price_fr') ?? 0, request('price_to') ?? $max_price])
                    ->orWhereBetween('sale_price', [request('price_fr') ?? 0, request('price_to') ?? $max_price]);
            })
            ->when(request('order_by'), function ($query) {
                if (in_array(request('order_by'), DB::getSchemaBuilder()->getColumnListing('products')))
                    $query->orderBy(request('order_by'), request('order_method') ?? 'asc');
            });

        return Inertia::render('User/Product/Index', ['products' => $productsQuery->paginate(30)]);

        // return response()->json([
        //     'productsCount' => $productsQuery->count(),
        //     'products' => $productsQuery->with(["images", "ratings"])->paginate(18),
        // ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
        $product = Product::find($id);

        return Inertia::render('User/Product/Show', ['products' => $product]);
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
