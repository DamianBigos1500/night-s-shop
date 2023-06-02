<?php

namespace App\Enums;

class StockStatus
{
  const IN_STOCK = 'IN_STOCK';
  const OUT_OF_STOCK = 'OUT_OF_STOCK';

  const TYPES = [
    self::IN_STOCK,
    self::OUT_OF_STOCK
  ];
}
