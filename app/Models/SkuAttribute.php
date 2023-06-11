<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkuAttribute extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'sku_id',
        'attribute_id',
        'attribute_value_id',
    ];
}
