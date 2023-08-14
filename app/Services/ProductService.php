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

    public function updateProduct(Product $product, array $data)
    {
        if (
            isset($data['image']) && $data['image'] instanceof \Illuminate\Http\UploadedFile
        ) {
            $data['image'] = $data['image']->store('products', 'public');
        } else {
            unset($data['image']);
        }

        return $this->repo()->updateProduct($product, $data);
    }

    public function deleteProduct(Product $product)
    {
        return $this->repo()->delete($product);
    }

    public function toggleInStock(Product $product)
    {
        return $this->repo()->toggleInStock($product);
    }
}
