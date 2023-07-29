<?php

namespace App\Services;

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


}
