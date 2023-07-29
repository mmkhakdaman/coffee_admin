import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm} from '@inertiajs/react';
import {Category, PageProps, Product} from '@/types';
import CategoryList from "@/Components/Category/CategoryList";
import ProductItem from "@/Components/Products/ProductItem";
import axios from "axios";
import {ChangeEvent, FormEvent, useState} from "react";

export default function ProductEdit(
    {
        auth,
        categories,
        product
    }: PageProps & {
        categories: Category[],
        product: Product
    }
) {
    const form = useForm({
        title: product.title,
        description: product.description,
        price: product.price,
        category_id: product.category_id,
        image: '',
        _method: 'put'
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        price: '',
        category_id: '',
        image: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        // @ts-ignore
        form.setData(key, value);

        setErrors({
            ...errors,
            [key]: ''
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        form.post(route('products.update', product.id), {
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">ویرایش محصول</h2>}
        >
            <Head title="New Product"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                          onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <p className="block text-gray-700 text-sm font-bold mb-2">
                                تصویر
                            </p>
                            <input
                                className="hidden"
                                id="image" type="file"
                                placeholder="تصویر"
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
                            <label
                                htmlFor="image"
                                className="inline-block w-full text-center bg-transparent hover:bg-green-700 hover:text-white text-green-500 border border-green-500 font-bold py-2 px-4 rounded cursor-pointer"
                            >
                                تغییر تصویر
                            </label>
                        </div>
                        {/*preview image*/}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                پیش نمایش
                            </label>
                            <img alt="preview" className="w-32 h-32"
                                 src={product.image_url}
                                 id="preview"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                عنوان محصول
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title" type="text" placeholder="عنوان"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                            />
                            {
                                errors.title &&
                                <p className="text-red-500 text-xs italic">{errors.title}</p>
                            }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                توضیحات
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description" placeholder="توضیحات"
                                name="description"
                                onChange={handleChange}
                                defaultValue={values.description}
                            ></textarea>
                            {
                                errors.description &&
                                <p className="text-red-500 text-xs italic">{errors.description}</p>
                            }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                قیمت
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price" type="number" placeholder="قیمت"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                            />
                            {
                                errors.price &&
                                <p className="text-red-500 text-xs italic">{errors.price}</p>
                            }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                دسته بندی
                            </label>
                            <select
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline appearance-none"
                                id="category"
                                name="category_id"
                                placeholder="دسته بندی"
                                defaultValue={values.category_id}
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                {
                                    categories.map(
                                        (category: Category) => <option key={category.id} value={category.id}
                                        >
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
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
                                ذخیره تغییرات
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
