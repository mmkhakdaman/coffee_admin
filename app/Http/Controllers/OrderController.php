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
        $orders = $this->service()->getPendingOrders();

        return Inertia::render('Orders/OrderList', [
            'orders' => $orders
        ]);
    }

    public function history()
    {
        $orders = $this->service()->getHistoryOrders();

        return Inertia::render('Orders/OrderHistory', [
            'orders' => $orders
        ]);
    }
}
