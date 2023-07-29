import {Order, PageProps} from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import OrderItem from "@/Components/Order/OrderItem";

export default function ProductList(
    {
        auth,
        orders
    }: PageProps & { orders: Order[] }
) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">سفارشات</h2>}
        >
            <Head title="سفارشات"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 mt-4">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold text-gray-800 leading-tight">
                                 تاریخچه سفارشات
                            </h1>
                            <Link href={route('order.list')}
                                  className="bg-pink-500 text-white hover:bg-pink-700 font-bold py-1 px-2 rounded-lg">
                                سفارشات فعلی
                            </Link>
                        </div>
                        <div className="flex flex-col mt-6 space-y-2">
                            {
                                orders.map(
                                    (order: Order) => <OrderItem
                                        key={order.id}
                                        order={order}
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
