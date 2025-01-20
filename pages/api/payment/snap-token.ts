import type { NextApiRequest, NextApiResponse } from 'next';
import Midtrans from "midtrans-client";
import { v4 as uuidv4 } from 'uuid';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const body = await JSON.parse(req.body);
    const uuid = uuidv4();
    console.log(body, uuid);

    return res.status(200).json({message: "It's work until here!"})

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