import React, {useEffect, useState} from "react";
import NewCategoryModal from "@/Components/Category/NewCategoryModal";
import {PageProps} from "@/types";
import axios from "axios";

export default function CategoryList(
    {
        onCategorySelected
    }:
        {
            onCategorySelected: (id: number) => void;
        }
) {
    const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);


    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(0);

    const reloadCategories = () => {
        axios.get(route('categories.index'))
            .then(
                (response) => {
                    setCategories(response.data.data);
                    if (response.data.data.length > 0) {
                        setSelectedCategory(response.data.data[0].id);
                        onCategorySelected(response.data.data[0].id);
                    }
                }
            );
    }
    useEffect(() => {
        reloadCategories();
    }, []);

    function handleCategoryClick(id: number) {
        setSelectedCategory(id);
        onCategorySelected(id);
    }

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
            <div className="flex text-white space-x-reverse space-x-2 items-start">
                <button
                    className="py-0.5 px-3 text-sm rounded-full whitespace-nowrap border border-neutral-700 bg-white text-neutral-700"
                    onClick={() => setShowNewCategoryModal(true)}
                >
                    دسته بندی جدید +
                </button>
                <div className="flex text-white space-x-reverse space-x-2 overflow-x-auto pb-4">
                    {
                        categories.map(
                            (category: any) => <button
                                key={category.id}
                                className={`py-0.5 px-3 text-sm rounded-full whitespace-nowrap ${selectedCategory === category.id ? 'bg-neutral-700 text-white' : 'text-neutral-700'}`}
                                onClick={() => handleCategoryClick(category.id)}
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
