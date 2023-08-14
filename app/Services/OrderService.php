<?php

namespace App\Services;

use App\Enums\OrderStatusEnum;
use App\Repositories\OrderRepository;

class OrderService
{
    private function repo(): OrderRepository
    {
        return resolve(OrderRepository::class);
    }

    public function getPendingOrders()
    {
        return $this->repo()->getPendingOrders();
    }

    public function getHistoryOrders()
    {
        return $this->repo()->getHistoryOrders();
    }

    public function confirmOrder($order)
    {
        return $this->repo()->setOrderStatus($order, OrderStatusEnum::CONFIRMED);
    }
    public function cancelOrder($order)
    {
        return $this->repo()->setOrderStatus($order, OrderStatusEnum::CANCELLED);
    }

    public function completeOrder($order)
    {
        return $this->repo()->setOrderStatus($order, OrderStatusEnum::COMPLETED);
    }
}
