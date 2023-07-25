<?php

namespace App\Models;

use App\Enums\OrderStatusEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'costumer_id',
        'description',
        'price',
        'status',
        'completed_at',
        'cancelled_at',
        'confirmed_at',
        'pending_at',
    ];

    protected $casts = [
        'status' => OrderStatusEnum::class,
        'completed_at' => 'datetime',
        'cancelled_at' => 'datetime',
        'confirmed_at' => 'datetime',
        'pending_at' => 'datetime',
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
