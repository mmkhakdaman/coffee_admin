import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {PageProps} from '@/types';
import CategoryList from "@/Components/Category/CategoryList";
import ProductItem from "@/Components/Products/ProductItem";
import axios from "axios";
import {ChangeEvent, FormEvent, useState} from "react";

export default function ProductCreate(
    {auth, categories}: PageProps & { categories: Category[] }
) {
    const form = useForm({
        title: '',
        description: '',
        price: '',
        category_id: '',
        image: ''
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        price: '',
        category_id: '',
        image: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        form.setData(key, value);

        setErrors({
            ...errors,
            [key]: ''
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        form.post(route('products.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setIsSubmitting(false);
            },
            onError: (errors: any) => {
                setIsSubmitting(false);
                setErrors(errors);
            }
        });
    }

    const {data: values, setData: setValues} = form;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Product</h2>}
        >
            <Head title="New Product"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                          onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="image" type="file"
                                onChange={(e) => {
                                    // @ts-ignore
                                    const file = e.target.files[0];
                                    setValues({
                                        ...values,
                                        // @ts-ignore
                                        image: file
                                    });

                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                        // @ts-ignore
                                        document.getElementById('preview').src = e.target.result;
                                    }
                                    reader.readAsDataURL(file);
                                }}
                            />
                        </div>
                        {/*preview image*/}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Preview
                            </label>
                            <img src="https://via.placeholder.com/150" alt="preview" className="w-32 h-32"
                                 id="preview"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title" type="text" placeholder="Name"
                                name="title"
                                onChange={handleChange}
                            />
                            {
                                errors.title &&
                                <p className="text-red-500 text-xs italic">{errors.title}</p>
                            }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description" placeholder="Description" name="description"
                                onChange={handleChange}
                            ></textarea>
                            {
                                errors.description &&
                                <p className="text-red-500 text-xs italic">{errors.description}</p>
                            }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price" type="number" placeholder="Price"
                                name="price"
                                onChange={handleChange}
                            />
                            {
                                errors.price &&
                                <p className="text-red-500 text-xs italic">{errors.price}</p>
                            }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Category
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                name="category_id"
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                {
                                    categories.map(
                                        (category: Category) => <option key={category.id} value={category.id}>
                                            {category.title}
                                        </option>
                                    )
                                }
                            </select>
                            {
                                errors.category_id &&
                                <p className="text-red-500 text-xs italic">{errors.category_id}</p>
                            }
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={() => {
                                    setErrors({
                                        title: '',
                                        description: '',
                                        price: '',
                                        category_id: '',
                                        image: ''
                                    });
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
