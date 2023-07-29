import {useState, PropsWithChildren, ReactNode} from 'react';
import {User} from '@/types';
import {Link} from '@inertiajs/react';
import NavLink from "@/Components/NavLink";

export default function Authenticated({user, header, children}: PropsWithChildren<{ user: User, header?: ReactNode }>) {

    return (
        <div className="min-h-screen bg-gray-100">
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main
                className="pb-16"
            >{children}</main>

            <div className="fixed bottom-0 w-full">
                <div
                    className="flex justify-around bg-white rounded-t-lg shadow-[0_0px_50px_0px_rgba(0,0,0,0.3)] w-11/12 mx-auto">
                    <NavLink href={route('products.index')} active={route().current('products.index')}>
                        <div
                            className="flex items-center justify-center w-full py-4 px-6 space-x-reverse space-x-2 text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                            </svg>
                            <span className="font-medium">محصولات</span>
                        </div>
                    </NavLink>
                    <NavLink href={route('order.list')} active={route().current('order.list')}>
                        <div
                            className="flex items-center justify-center w-full py-4 px-6 space-x-reverse space-x-2 text-gray-600"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                            <span className="font-medium">لیست سفارشات</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
