import type { NextApiRequest, NextApiResponse } from 'next';
import midtransClient from "midtrans-client";
import { v4 as uuidv4 } from 'uuid';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const body = await JSON.parse(req.body);
    const uuid = uuidv4();

    const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
        clientKey: process.env.MIDTRANS_CLIENT_KEY,
    })

    const parameter = {
        "transaction_details": {
            "order_id": uuid,
            "gross_amount": body.price * body.amount
        }, "credit_card":{
            "secure" : true
        }
    };

    const tokenSnap = await snap.createTransaction(parameter)
        .then((transaction: {
            token : string
        })=>{
            // transaction token
            const transactionToken:string = transaction.token;
            return transactionToken;
        })

    return res.status(200).json({message: "It's work until here!", token: tokenSnap})
}