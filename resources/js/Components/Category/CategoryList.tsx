import React, {useEffect, useState} from "react";
import NewCategoryModal from "@/Components/Category/NewCategoryModal";
import {PageProps} from "@/types";
import axios from "axios";

export default function CategoryList() {
    const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);


    const [selectedCategory, setSelectedCategory] = useState(0);

    const [categories, setCategories] = useState([]);

    const reloadCategories = () => {
        axios.get(route('categories.index'))
            .then(
                (response) => {
                    setCategories(response.data.data);
                }
            );
    }
    useEffect(() => {
        reloadCategories();
    }, []);

    return (
        <>
            {
                showNewCategoryModal && <NewCategoryModal
                    onClosed={function () {
                        setShowNewCategoryModal(false);
                    }}
                    onCreated={function () {
                        setShowNewCategoryModal(false);
                        reloadCategories();
                    }}
                />
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
                        className={`py-0.5 px-3 text-sm rounded-full whitespace-nowrap ${selectedCategory === 0 ? 'bg-neutral-700 text-white' : 'text-neutral-700'}`}
                        onClick={() => setSelectedCategory(0)}
                    >
                        All
                    </button>
                    {
                        categories.map(
                            (category: any) => <button
                                key={category.id}
                                className={`py-0.5 px-3 text-sm rounded-full whitespace-nowrap ${selectedCategory === category.id ? 'bg-neutral-700 text-white' : 'text-neutral-700'}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.title}
                            </button>
                        )
                    }
                </div>
            </div>
        </>
    );
}
