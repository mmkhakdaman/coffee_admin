import { Order } from "@/types";
import { OrderStatusEnum } from "@/types/enums";
import { router } from "@inertiajs/react";
import axios from "axios";

export default function OrderItem(
    {
        order
    }:
        {
            order: Order
        }
) {

    const handleConfirm = () => {
        axios.put(route('order.confirm', order.id))
            .then(
                () => {
                    router.reload();
                }
            );
    }

    const handleCancel = () => {
        axios.put(route('order.cancel', order.id))
            .then(
                () => {
                    router.reload();
                }
            );
    }


    const handleComplete = () => {
        axios.put(route('order.complete', order.id))
            .then(
                () => {
                    router.reload();
                }
            );
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">
            <div className="flex flex-row justify-between space-x-reverse space-x-2">
                <div className="grow flex flex-col space-y-2 justify-between">
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-lg font-semibold text-gray-800 leading-tight">
                            سفارش شماره {order.id}
                        </h1>
                        <p className="text-sm text-gray-500">
                            {
                                order.description
                            }
                        </p>
                        <div className="flex flex-col space-y-2">
                            {
                                order.items.map(
                                    (item) => <span
                                        key={item.id}
                                        className="text-sm font-semibold text-gray-800 leading-tight flex items-center justify-between">
                                        <p>
                                            {
                                                item.product.title
                                            }
                                        </p>
                                        <span className="text-gray-400">
                                            {
                                                item.quantity
                                            }&times;
                                        </span>
                                    </span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span
                    className="text-sm font-semibold text-gray-800 leading-tight flex items-center space-x-reverse space-x-1">
                    <p>
                        {
                            order.price.toLocaleString()
                        }
                    </p>
                    <span className="text-gray-400">
                        تومان
                    </span>
                </span>
                {
                    {
                        [OrderStatusEnum.CONFIRMED]: <>
                            <div className="flex space-x-2 space-x-reverse">
                                <button
                                    onClick={handleComplete}
                                    className="bg-green-500 text-white hover:bg-green-700 font-bold py-1 px-2 rounded-lg">
                                    تحویل
                                </button>
                            </div>
                        </>,
                        [OrderStatusEnum.PENDING]: <>
                            <div className="flex space-x-2 space-x-reverse">
                                <button
                                    onClick={handleConfirm}
                                    className="bg-green-500 text-white hover:bg-green-700 font-bold py-1 px-2 rounded-lg">
                                    تایید
                                </button>

                                <button
                                    onClick={handleCancel}
                                    className="bg-red-500 text-white hover:bg-red-700 font-bold py-1 px-2 rounded-lg">
                                    لغو
                                </button>
                            </div>
                        </>,
                        [OrderStatusEnum.CANCELLED]: <>
                            <span className="text-red-500">
                                لغو شده
                            </span>
                        </>,
                        [OrderStatusEnum.COMPLETED]: <>
                            <span className="text-green-500">
                                تحویل داده شده
                            </span>
                        </>,
                    }[order.status]
                }
            </div>
        </div>
    );
}
