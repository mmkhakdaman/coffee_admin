import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';
import CategoryList from "@/Components/Category/list";
import ProductItem from "@/Components/Products/Item";

export default function Dashboard({auth}: PageProps) {
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
                                Products
                            </h1>

                            <Link
                                href={route('products.new')}
                                className="bg-pink-500 text-white hover:bg-pink-700 font-bold py-1 px-2 rounded-lg">
                                New
                            </Link>
                        </div>
                        <div className="flex flex-col mt-6 space-y-2">
                            {
                                [
                                    0, 1, 2, 3
                                ].map(
                                    () => <ProductItem/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}