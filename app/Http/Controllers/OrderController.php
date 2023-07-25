<?php

namespace App\Http\Controllers;

use App\Services\OrderService;
use Inertia\Inertia;

class OrderController extends Controller
{
    private function service(): OrderService
    {
        return resolve(OrderService::class);
    }


    public function list()
    {
        $orders = $this->service()->getOrders();

        return Inertia::render('Orders/OrderList', [
            'orders' => $orders
        ]);
    }
}
