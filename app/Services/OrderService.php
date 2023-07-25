<?php

namespace App\Services;

use App\Repositories\OrderRepository;

class OrderService
{
    private function repo(): OrderRepository
    {
        return resolve(OrderRepository::class);
    }

    public function getOrders()
    {
        return $this->repo()->getPendingOrders();
    }


}
