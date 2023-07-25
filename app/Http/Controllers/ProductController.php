<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Category;
use App\Models\Product;
use App\Services\CategoryService;
use App\Services\ProductService;
use Inertia\Inertia;

class ProductController extends Controller
{
    private function service(): ProductService
    {
        return resolve(ProductService::class);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Products/ProductList', [
            'products' => $this->service()->getProducts(),
            'categories' => resolve(CategoryService::class)->getHasProductsCategories()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/ProductCreate', [
            'categories' => resolve(CategoryService::class)->getCategories()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $this->service()->createProduct($request->validated());
        return to_route('products.list');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
