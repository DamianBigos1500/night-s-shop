<?php

namespace App\Models;

use App\Models\AttributeValue;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Sku extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'product_id',
        'sku',
        'regular_price',
        'sale_price',
        'stock_status',
        'quantity',
        'featured',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    // public function attributeValues()
    // {
    //     return AttributeValue::where('sku_id', '=', $this->id);
    // }

    public function attributes(): BelongsToMany
    {
        return $this->belongsToMany(Attribute::class, 'attribute_sku');
    }

    public function attributeValues(): BelongsToMany
    {
        return $this->belongsToMany(AttributeValue::class, 'attribute_sku');
    }
}
