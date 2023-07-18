export default function OrderItem() {
    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">
            <div className="flex flex-row justify-between space-x-2">
                <div className="grow flex flex-col space-y-2 justify-between">
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-lg font-semibold text-gray-800 leading-tight">
                            Pizza
                        </h1>
                        <p className="text-sm text-gray-500">
                            Pizza is a savory dish of Italian origin consisting of a usually round,
                            Pizza is a savory dish of Italian origin consisting of a usually round,
                            Pizza is a savory dish of Italian origin consisting of a usually round,
                            Pizza is a savory dish of Italian origin consisting of a usually round,
                            Pizza is a savory dish of Italian origin consisting of a usually round,
                            Pizza is a savory dish of Italian origin consisting of a usually round,
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 flex-shrink-0">
                    <img src="https://cdn.snappfood.ir/200x201/cdn/72/54/8/vendor/61b05b8c541d2.jpeg"
                         className="w-24 h-24 rounded-lg object-cover"
                         alt="food"/>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-800 leading-tight flex items-center space-x-1">
                    <p>23000</p>
                    <span className="text-gray-400">T</span>
                </span>
                <div className="flex flex-row space-x-2">
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
