import {ProductCardInterface, ProductDetailInterface} from "../type";

const graphqlUrl : string | undefined = process.env.GRAPHQL_URL;
const graphQlToken : string | undefined = process.env.GRAPHQL_TOKEN;

if(graphqlUrl === undefined) throw new Error("GRAPHQL_URL is not defined on environment variables");
if(graphQlToken === undefined) throw new Error("GRAPHQL_TOKEN is not defined on environment variables");

export async function getProductList(size: number, from: number): Promise<{ products: ProductCardInterface[], total: number } | undefined>  {
    const response : Response = await fetch(graphqlUrl as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${graphQlToken as string}`,
        },
        body: JSON.stringify({
            query: `{ 
                getProductList(size: ${size}, from: ${from}) { 
                    items {
                        _id, 
                        category {
                            title,
                            color
                        }, 
                        description, 
                        image{
                            path
                        }, 
                        name, 
                        price,
                        colors{
                            name,
                            hexcode
                        },
                    }, 
                    total 
                } 
            }`,
        }),
    })

    const result = await response.json();

    if(result === undefined) return undefined;

    return {
        products: result.data.getProductList.items,
        total: result.data.getProductList.total
    };
}

export async function getProductById(id: string):Promise<ProductDetailInterface | undefined> {
    const response : Response = await fetch(graphqlUrl as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${graphQlToken as string}`,
        },
        body: JSON.stringify({
            query: `{ 
                getProduct(_id: "${id}"){
                    _id, 
                    category {
                        title,
                        color
                    }, 
                    description, 
                    image{
                        path
                    }, 
                    colors{
                        name,
                        hexcode
                    },
                    name, 
                    price,
                    sold,
                    reviews{
                        items{
                            username,
                            review
                        }
                    }
                }
            }`,
        })
    })

    if( !response.ok ){
        return undefined;
    }

    const result = await response.json();

    if(result === undefined) return undefined;

    return result.data.getProduct;
}