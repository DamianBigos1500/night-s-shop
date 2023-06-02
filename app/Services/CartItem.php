<?php


namespace App\ValueObjects;

use App\Models\Product;

class CartItem
{
  private int $productId;
  private int $quantity = 0;


  public function __construct(Product $product, int $quantity = 1)
  {
    $this->productId = $product->id;
    $this->quantity += $quantity;
  }

  public function getProductId(): int
  {
    return $this->productId;
  }

  public function getQuantity(): int
  {
    return $this->quantity;
  }

  public function getSum(): float
  {
    return 0;
    // return $this->price * $this->quantity;
  }

  public function addQuantity(Product $productId): CartItem
  {
    return new CartItem($productId, ++$this->quantity);
  }
}
