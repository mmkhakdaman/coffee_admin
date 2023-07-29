import {Order} from "@/types";

export default function OrderItem(
    {
        order
    }:
        {
            order: Order
        }
) {
    console.log(order);
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
                                        className="text-sm font-semibold text-gray-800 leading-tight flex items-center space-x-reverse space-x-1">
                                        <p>
                                            {
                                                item.product.title
                                            }
                                        </p>
                                        <span className="text-gray-400">
                                            {
                                                item.quantity
                                            }
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
                <div className="flex flex-row space-x-reverse space-x-2">
                    <button
                        className="border border-pink-500 text-pink-500 hover:bg-pink-700 hover:text-white hover:border-pink-700 font-bold py-1 px-2 rounded-lg">
                        Done
                    </button>
                    <button
                        className="border border-pink-500 text-pink-500 hover:bg-pink-700 hover:text-white hover:border-pink-700 font-bold py-1 px-2 rounded-lg">
                        Print
                    </button>
                    <button
                        className="border border-pink-500 text-pink-500 hover:bg-pink-700 hover:text-white hover:border-pink-700 font-bold py-1 px-2 rounded-lg">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
