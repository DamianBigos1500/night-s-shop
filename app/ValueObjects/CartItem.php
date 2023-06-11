<?php


namespace App\ValueObjects;

class CartItem
{
  private int $product_id;
  private int $quantity = 0;


  public function __construct(int $productId, int $quantity = 1)
  {
    $this->product_id = $productId;
    $this->quantity += $quantity;
  }

  public function getProductId(): int
  {
    return $this->product_id;
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

  public function changeQuantity(int $productId, int $quantity = 1): CartItem
  {
    return new CartItem($productId, $quantity);
  }
}
