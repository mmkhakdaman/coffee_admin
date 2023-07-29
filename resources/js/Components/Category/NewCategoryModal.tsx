import {useState} from "react";
import axios from "axios";

export default function NewCategoryModal(
    {
        onClosed,
        onCreated
    }: { onClosed: () => void, onCreated: () => void }
) {
    const [values, setValues] = useState({
        title: '',
    });

    const [errors, setErrors] = useState({
        title: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        setValues({
            ...values,
            [key]: value
        });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setIsSubmitting(true);
        axios.post(route('categories.store'), values)
            .then(
                () => {
                    setIsSubmitting(false);
                    onCreated();
                }
            )
            .catch(
                (error) => {
                    setIsSubmitting(false);
                    setErrors(error.response.data.errors);
                }
            );
    }


    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
             aria-modal="true">
            <div
                className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                     aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                      aria-hidden="true">&#8203;</span>
                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-right grow">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">

                                دسته بندی جدید

                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    <label htmlFor="title"
                                           className="block text-sm font-medium text-gray-700 w-full">
                                        عنوان دسته بندی
                                    </label>
                                    <input type="text" name="title" id="title"
                                           className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                           placeholder="عنوان دسته بندی"
                                           onChange={handleChange}
                                    />
                                    {errors.title &&
                                        <small className="text-red-500 text-xs italic">{errors.title}</small>}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                        >
                            ذخیره
                        </button>
                        <button type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={onClosed}
                        >
                            انصراف
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
