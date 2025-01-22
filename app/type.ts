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
    colors: {
        name:string;
        hexcode: string;
    }[],
    sold:number,
    reviews :{
        items : {
            review: string,
            username: string
        }[]
    }
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
    colors: {
        name:string;
        hexcode: string;
    }[],
    description: string;
    name: string;
    price: number;
};

export type ProductOverviewInterface = {
    _id: string;
    category: {
        title: string;
        color: string;
    };
    description?: string;
    image: {
        path: string;
    };
    name: string;
    price: number;
    colors: {
        name:string;
        hexcode: string;
    }[],
    sold?:number,
    reviews?:{
        items : {
            review: string,
            username: string
        }[]
    }
};