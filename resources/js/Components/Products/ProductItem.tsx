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
                <span className="text-sm font-semibold text-gray-800 leading-tight">
                    {
                        product.price
                    }
                    <span className="text-gray-400">T</span>
                </span>
            </div>
            <div className="flex flex-col space-y-4 flex-shrink-0">
                <img
                    src={product.image_url}
                    className="w-24 h-24 rounded-lg object-cover"
                    alt="food"/>
                <button
                    className="border border-pink-500 text-pink-500 hover:bg-pink-700 hover:text-white hover:border-pink-700 font-bold py-1 px-2 rounded-lg">
                    Edit
                </button>
            </div>
        </div>
    );
}
