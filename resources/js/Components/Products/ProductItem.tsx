import { Product } from "@/types";
import { Link } from "@inertiajs/react";

export default function ProductItem(
    {
        product
    }
        :
        {
            product: Product
        }
) {
    return (

        <div className="flex flex-row justify-between bg-white p-4 rounded-xl space-x-2 shadow">
            <div className="grow flex flex-col space-y-2 justify-between">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-lg font-semibold text-gray-800 leading-tight">
                        {
                            product.title
                        }
                    </h1>
                    <p className="text-sm text-gray-500">
                        {
                            product.description
                        }
                    </p>
                </div>

                <div className="flex flex-col mt-2 space-y-2">
                    <div className="flex items-center space-x-2 space-x-reverse">
                        <span className="text-sm font-semibold text-gray-800 leading-tight">
                            موجود
                        </span>
                        {/*switch button*/}
                        <label className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" className="hidden" />
                                <div
                                    className="toggle__line w-10 h-6 bg-green-400 rounded-full shadow-inner"></div>
                                <div
                                    className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
                                {/*<div*/}
                                {/*    className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 right-0"></div>*/}
                            </div>
                        </label>
                    </div>
                </div>

                <div
                    className="flex items-center space-x-2 space-x-reverse"
                >
                    <span className="text-sm font-semibold text-gray-800 leading-tight">
                        {
                            product.price.toLocaleString()
                        }
                    </span>

                    <span className="text-gray-400">
                        تومان
                    </span>
                </div>
            </div>
            <div className="flex flex-col space-y-4 flex-shrink-0">
                <img
                    src={product.image_url}
                    className="w-24 h-24 rounded-lg object-cover"
                    alt="food" />
                <Link
                    href={route('products.edit', product.id)}
                    className="border text-center border-green-500 text-green-500 hover:bg-green-700 hover:text-white hover:border-green-700 font-bold py-1 px-2 rounded-lg">
                    ویرایش
                </Link>
            </div>
        </div>
    );
}
