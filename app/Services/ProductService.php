<?php

namespace App\Services;

use App\Models\Product;
use App\Repositories\ProductRepository;

class ProductService
{
    private function repo(): ProductRepository
    {
        return resolve(ProductRepository::class);
    }

    public function getProducts()
    {
        return $this->repo()->getProducts();
    }

    public function createProduct($data)
    {
        if (isset($data['image'])) {
            $data['image'] = $data['image']->store('products', 'public');
        }

        return $this->repo()->storeProduct(
            $data
        );
    }

    public function updateProduct(Product $category, array $data)
    {
        return $this->repo()->updateProduct($category, $data);
    }

    public function deleteProduct(Product $category)
    {
        return $this->repo()->delete($category);
    }
}
