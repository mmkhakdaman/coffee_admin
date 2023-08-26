<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository
{


    public function storeProduct($data)
    {
        $order = $this->query()->max('order');
        $data['order'] = $order + 1;
        return $this->query()->create($data);
    }

    private function query()
    {
        return Product::query();
    }

    public function updateProduct(Product $product, array $data)
    {
        return $product->update($data);
    }

    public function delete(Product $product)
    {
        return $product->delete();
    }

    public function getProducts()
    {
        return $this->query()
            ->orderBy('order')
            ->get();
    }

    public function toggleInStock(Product $product)
    {
        return $product->update([
            'in_stock' => !$product->in_stock
        ]);
    }

    public function toggleIsActive(Product $product)
    {
        return $product->update([
            'is_active' => !$product->is_active
        ]);
    }
}
