import React, {useState} from "react";
import NewCategoryModal from "@/Components/Category/NewCategoryModal";

export default function CategoryList() {
    const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);

    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Pizza',
        },
        {
            id: 2,
            name: 'Burger',
        },
        {
            id: 3,
            name: 'Sandwich',
        },
        {
            id: 4,
            name: 'Kabab',
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState(0);


    return (
        <>
            {
                showNewCategoryModal && <NewCategoryModal onClosed={function () {
                    setShowNewCategoryModal(false);
                }}/>
            }
            <div className="flex text-white space-x-2 items-start">
                <button
                    className="py-0.5 px-3 text-sm rounded-full whitespace-nowrap border border-neutral-700 bg-white text-neutral-700"
                    onClick={() => setShowNewCategoryModal(true)}
                >
                    + New
                </button>
                <div className="flex text-white space-x-2 overflow-x-auto pb-4">
                    <button
                        className={`py-0.5 px-3 text-sm rounded-full whitespace-nowrap border border-neutral-700 ${selectedCategory === 0 ? 'bg-neutral-700 text-white' : 'bg-white text-neutral-700'}`}
                        onClick={() => setSelectedCategory(0)}
                    >
                        All
                    </button>
                    {
                        categories.map(
                            (category) => (
                                <button
                                    key={category.id}
                                    className={`py-0.5 px-3 text-sm rounded-full whitespace-nowrap border border-neutral-700 ${selectedCategory === category.id ? 'bg-neutral-700 text-white' : 'bg-white text-neutral-700'}`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    {category.name}
                                </button>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
}
