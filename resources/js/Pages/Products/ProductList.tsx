import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps, Product} from '@/types';
import CategoryList from "@/Components/Category/CategoryList";
import ProductItem from "@/Components/Products/ProductItem";

export default function ProductList(
    {
        auth,
        products
    }: PageProps & { products: Product[] }
) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4">
                        <CategoryList/>
                    </div>
                    <div className="px-4 mt-4">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold text-gray-800 leading-tight">
                                محصولات
                            </h1>

                            <Link
                                href={route('products.create')}
                                className="bg-pink-500 text-white hover:bg-pink-700 font-bold py-1 px-2 rounded-lg">
                                New
                            </Link>
                        </div>
                        <div className="flex flex-col mt-6 space-y-2">
                            {
                                products.map(
                                    (product: Product) => <ProductItem
                                        key={product.id}
                                        product={product}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
