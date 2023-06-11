<?php

namespace App\ValueObjects;

use Illuminate\Support\Collection;
use App\Models\Product;
use App\ValueObjects\CartItem;
use Closure;

class Cart
{
  private Collection $items;

  /**
   * @param Collection|null $items
   */
  public function __construct(Collection $items = null)
  {
    $this->items = $items ?? Collection::empty();
  }

  /**
   * @return Collection
   */
  public function getItems(): Collection
  {
    return $this->items;
  }

  public function hasItems(): bool
  {
    return $this->items->isNotEmpty();
  }

  public function getQuantity(): int
  {
    return $this->items->sum(function ($item) {
      return $item->getQuantity();
    });
  }

  public function addItem(int $productId, int $quantity = 1): Cart
  {
    $items = $this->items;
    $item = $items->first($this->isProductIdSameAsItemProduct($productId));

    if (!is_null($item)) {
      $items = $this->removeItemFromCollection($this->items, $productId);
      $newItem = $item->changeQuantity($productId, $quantity);
    } else {
      $newItem = new CartItem($productId, $quantity);
    }
    $items->add($newItem);
    return new Cart($items);
  }

  public function removeItem(int $productId): Cart
  {
    $items = $this->removeItemFromCollection($this->items, $productId);
    return new Cart($items);
  }

  private function removeItemFromCollection(Collection $items, int $productId): Collection
  {
    return $items->reject($this->isProductIdSameAsItemProduct($productId));
  }

  private function isProductIdSameAsItemProduct(int $productId): Closure
  {
    return function ($item) use ($productId) {
      return $productId == $item->getProductId();
    };
  }
}
