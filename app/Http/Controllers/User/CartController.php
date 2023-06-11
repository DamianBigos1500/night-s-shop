<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\ValueObjects\Cart;
use App\ValueObjects\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $item = new CartItem(5);
        // $item->changeQuantity(6, 20);

        $cart = new Cart();
        $cart->addItem(2, 5);
        $cart->addItem(5, 12);

        // $cart = Cookie::get('cart_items', new Cart());
        // $cart = $cart->addItem(2, 5);
        Cookie::queue('cart_items', $cart->getItems(), 60 * 24 * 30);

        $cookie = Cookie::get('cart_items');
        dd($cookie);


        return Inertia::render('User/Cart', ['cart2' => Cookie::get('cart_items')]);
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
