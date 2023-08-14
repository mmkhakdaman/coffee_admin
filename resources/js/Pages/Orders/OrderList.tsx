import { Order, PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import OrderItem from "@/Components/Order/OrderItem";
import { OrderStatusEnum } from "@/types/enums";

export default function ProductList(
    {
        auth,
        orders
    }: PageProps & { orders: Order[] }
) {

    const pendingOrders = orders.filter((order: Order) => order.status === OrderStatusEnum.PENDING);

    const confirmedOrders = orders.filter((order: Order) => order.status === OrderStatusEnum.CONFIRMED);


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">سفارشات</h2>}
        >
            <Head title="سفارشات" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 mt-4">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold text-gray-800 leading-tight">
                                سفارشات
                            </h1>
                            <Link href={route('order.history')}
                                className="bg-green-500 text-white hover:bg-green-700 font-bold py-1 px-2 rounded-lg">
                                تاریخچه سفارشات
                            </Link>
                        </div>
                        {
                            pendingOrders.length > 0 &&
                            <>
                                <div className="relative w-full mt-12">
                                    <hr
                                        className="border-2 border-gray-200"
                                    />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-3 text-gray-500 text-lg"
                                    >
                                        سفارشات جدید
                                    </span>
                                </div>
                                <div className="flex flex-col mt-6 space-y-2">
                                    {
                                        pendingOrders
                                            .map(
                                                (order: Order) => <OrderItem
                                                    key={order.id}
                                                    order={order}
                                                />
                                            )
                                    }
                                </div>
                            </>
                        }
                        {
                            confirmedOrders.length > 0 &&
                            <>
                                <div className="relative w-full mt-12">
                                    <hr
                                        className="border-2 border-gray-200"
                                    />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-3 text-gray-500 text-lg"
                                    >
                                        سفارشات تایید شده
                                    </span>
                                </div>
                                <div className="flex flex-col mt-6 space-y-2">
                                    {
                                        confirmedOrders
                                            .map(
                                                (order: Order) => <OrderItem
                                                    key={order.id}
                                                    order={order}
                                                />
                                            )
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
