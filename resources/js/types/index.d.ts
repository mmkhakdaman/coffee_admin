import { OrderStatusEnum } from "./enums";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Category {
    id: number,
    title: string,
    order: number
}

export interface Product {
    is_active: boolean;
    id: number;
    title: string;
    description: string;
    price: number;
    category_id: number;
    image: string;
    image_url: string;
    category: Category;
    stock: number;
    in_stock: boolean;
}

export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    product: Product;
}

export interface Customer {
    id: number;
    phone: string;
}

export interface Order {
    is_delivery: boolean;
    id: number;
    user_id: number;
    status: OrderStatusEnum;
    description: string;
    price: number;
    address: string;
    phone: string;
    customer: Customer;
    items: OrderItem[];
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
