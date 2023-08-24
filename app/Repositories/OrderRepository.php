<?php

namespace App\Repositories;

use App\Enums\OrderStatusEnum;
use App\Models\Order;

class OrderRepository
{

    private function query()
    {
        return Order::query();
    }

    public function getPendingOrders()
    {
        return $this->query()
            ->whereIn('status', [OrderStatusEnum::PENDING, OrderStatusEnum::CONFIRMED])
            ->with('items.product', 'customer')
            ->orderBy('pending_at', 'desc')
            ->get();
    }

    public function getOrdersByCustomerId(int|string|null $id)
    {
        return $this->query()
            ->where('customer_id', $id)
            ->with('items.product', 'customer')
            ->orderBy('pending_at', 'desc')
            ->get();
    }

    public function getHistoryOrders()
    {
        return $this->query()
            ->whereNotIn('status', [OrderStatusEnum::PENDING, OrderStatusEnum::NOT_PAID])
            ->with('items.product', 'customer')
            ->orderBy('pending_at', 'desc')
            ->get();
    }

    public function setOrderStatus($orderId, OrderStatusEnum $status)
    {
        return $this->query()
            ->whereId($orderId)
            ->update(
                [
                    'status' => $status
                ]
            );
    }
}
