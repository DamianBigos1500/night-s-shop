<?php

namespace App\Models;

use App\Models\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'short_description',
        'description',
    ];

    // public function category(): BelongsTo
    // {
    //     return $this->belongsTo(Category::class);
    // }

    // public function skus(): HasMany
    // {
    //     return $this->hasMany(Sku::class);
    // }


    public function productVariants(): HasMany
    {
        return $this->hasMany(ProductVariant::class);
    }
    
}
