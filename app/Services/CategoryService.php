<?php

namespace App\Services;

use App\Models\Category;
use App\Repositories\CategoryRepository;

class CategoryService
{
    private function repo(): CategoryRepository
    {
        return resolve(CategoryRepository::class);
    }

    public function getCategories()
    {
        return $this->repo()->getCategories();
    }

    public function getHasProductsCategories()
    {
        return $this->repo()->getHasProductsCategories();
    }

    public function createCategory($data)
    {
        return $this->repo()->storeCategory(
            $data
        );
    }

    public function updateCategory(Category $category, array $data)
    {
        return $this->repo()->updateCategory($category, $data);
    }

    public function deleteCategory(Category $category){
        return $this->repo()->delete($category);
    }
}
