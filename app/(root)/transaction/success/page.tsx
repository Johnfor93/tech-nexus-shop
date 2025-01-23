import Link from "next/link";
import React from 'react';
import Image from "next/image";

const TransactionSucces = () => {
    return (
        <>
            <div className="bg-white p-6  md:mx-auto">
                <Image src={"/images/transaction-success.gif"} alt={"Your Transaction has been successfully"} width={200} height={200} className={"mx-auto"}/>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                    <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                    <p> Have a great day! </p>
                    <div className="py-10 text-center">
                        <Link href="/" className="px-12 bg-midnight-950 hover:bg-midnight-700 text-white font-semibold py-3 rounded-lg">
                            Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransactionSucces;