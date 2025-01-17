import type { NextApiRequest, NextApiResponse } from 'next';

const graphqlUrl : string | undefined = process.env.GRAPHQL_URL;
const graphQlToken : string | undefined = process.env.GRAPHQL_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return res.status(405).send({
            error: 'Method Not Allowed'
        })
    }

    const body = JSON.parse(req.body);
    console.log(body);

    if(!body) {
        return res.status(400).send({
            error: 'Missing required fields'
        })
    }

    if(!body.username || typeof body.username !== 'string' || body.username.length < 1) {
        return res.status(400).send({
            error: 'Missing required fields username'
        })
    }

    if(!body.review || typeof body.review !== 'string' || body.review.length < 1) {
        return res.status(400).send({
            error: 'Missing required fields review'
        })
    }

    if(!body.id){
        return res.status(400).send({
            error: 'Missing required fields'
        })
    }

    const response : Response = await fetch(graphqlUrl as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${graphQlToken as string}`,
        },
        body: JSON.stringify({
            query: `  
              mutation createReview($username: String!, $review: String!, $productId: String!) {  
                createReview(input: {  
                  username: $username,  
                  review: $review,  
                  product: {  
                    id: $productId  
                  }  
                }) {  
                  clientMutationId  
                  result {  
                    _id  
                    review  
                    username  
                  }  
                }  
              }  
            `,
            variables: {
                username: body.username,
                review: body.review,
                productId: body.id,
            },
        }),
    })


    const result = await response.json();

    if(!response.ok){
        return res.status(500).send({
            result
        })
    }

    return res.status(201).json({result});
}