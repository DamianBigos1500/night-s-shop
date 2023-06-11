<?php

namespace App\Services;

use App\ValueObjects\Cart;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class CartService
{

  private $userId = null;
  private Collection $cartItems;

  public function __construct()
  {
    $this->userId = Auth::user();
    $this->cartItems = collect(Cookie::get('cart_items'));
  }

  public function getCartItems()
  {
  }
  public function getCartProducts()
  {
    $items = $this->cartItems->map((fn ($item) =>
    ["product_id" => $item->product_id]
    ));
  }
}
