<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'category_id',
        'price',
        'description',
        'image',
        'is_active',
        'order',
        'in_stock'
    ];

    protected $appends = [
        'image_url'
    ];


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    protected function imageUrl(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->image ? asset('storage/' . $this->image) : asset('images/no-image.jpg');
            }
        );
    }
}
