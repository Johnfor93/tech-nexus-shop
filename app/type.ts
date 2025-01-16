export type ProductDetailInterface = {
    _id: string;
    category: {
        title: string;
        color: string;
    };
    description: string;
    image: {
        path: string;
    };
    name: string;
    price: number;
};

export type ProductCardInterface = {
    _id: string;
    category: {
        title: string;
        color: string;
    };
    image: {
        path: string;
    };
    description: string;
    name: string;
    price: number;
};