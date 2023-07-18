<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Services\CategoryService;

class CategoryController extends Controller
{

    private function service()
    {
        return resolve(CategoryService::class);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = $this->service()->getCategories();

        return CategoryResource::collection($data);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $this->service()->createCategory($request->validated());

        return new CategoryResource($data);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data = $this->service()->updateCategory($category, $request->validated());

        return new CategoryResource($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $this->service()->deleteCategory($category);

        return response()->noContent();
    }
}
