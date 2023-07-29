import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {Category, PageProps, Product} from '@/types';
import CategoryList from "@/Components/Category/CategoryList";
import ProductItem from "@/Components/Products/ProductItem";

export default function ProductList(
    {
        auth,
        products,
        categories
    }: PageProps & { products: Product[], categories: Category[] }
) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">محصولات</h2>}
        >
            <Head title="محصولات"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4">
                        <CategoryList
                            onCategorySelected={(id) => {
                                const element = document.getElementById(`category-${id}`);
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                        />
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
                        <div className="flex flex-col mt-6 space-y-6">
                            {
                                categories.map(
                                    (category) =>
                                        (
                                            <div className="flex-col space-y-4"
                                                 id={`category-${category.id}`}
                                            >
                                                <h2 className="text-xl font-semibold text-gray-800 leading-tight">
                                                    {category.title}
                                                </h2>
                                                <div className="flex flex-col space-y-4">
                                                    {
                                                        products
                                                            .filter((product) => product.category_id === category.id)
                                                            .map(
                                                                (product: Product) => <ProductItem
                                                                    key={product.id}
                                                                    product={product}
                                                                />
                                                            )
                                                    }
                                                </div>
                                            </div>
                                        )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
