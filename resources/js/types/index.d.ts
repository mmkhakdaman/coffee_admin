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
    id: number;
    title: string;
    description: string;
    price: number;
    category_id: number;
    image: string;
    image_url: string;
    category: Category;
    stock: number;
}

export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    product: Product;
}

export interface Order {
    id: number;
    user_id: number;
    status: string;
    description: string;
    price: number;
    items: OrderItem[];
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
