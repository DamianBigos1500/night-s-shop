<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'code',
        'short_description',
        'description',
        'regular_price',
        'sale_price',
        'stock_status',
        'quantity',
        'featured',
        'user',
        'deleted_at',
        'category_id',
        'deleted_by',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
