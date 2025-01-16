import {getProductById} from "@/app/lib/data";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import Link from "next/link";
import {LucideShoppingCart} from "lucide-react";
import React from "react";

export default async function ProductDescription ({idProduct} : {idProduct:string}) {
    const product = await getProductById(idProduct);

    return (
        <>
            <div className={"flex md:flex-row flex-col gap-x-8 gap-y-4 mb-4"}>
                <div className={"w-full md:w-5/12"}>
                    <Image
                        src={`https://images.takeshape.io/${product.image.path}`}
                        alt={`${product.name} - Tech Nexus for your better life`}
                        width={256}
                        height={256}
                        className="w-full aspect-video md:aspect-square object-cover object-center"
                    />
                </div>
                <div className={"w-full md:w-7/12"}>
                    <h1 className={"text-3xl md:text-5xl font-bold mb-2"}>{product.name}</h1>
                    <div
                        className={`bg-[#b3d1f5] px-2 py-1 rounded mb-1 w-fit block text-xs`}>{product.category.title}</div>
                    <h2 className={"text-2xl md:text-3xl font-bold"}>$ {product.price}</h2>
                    <div className="w-full gap-2 py-4 flex flex-row justify-between">
                        <Link
                            href={`/products/${product._id}`}
                            className="text-midnight-950 bg rounded-lg w-full py-2 inline-flex gap-2 justify-center items-center border-midnight-950 border text-sm">
                            <LucideShoppingCart/> Add to Cart
                        </Link>
                        <Link href="/"
                            className="bg-midnight-950 text-midnight-50 rounded-lg w-full py-2 inline-flex gap-2 justify-center items-center text-sm">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>

            <div className={"text-base text-justify productDescriptionSection"}>
                <ReactMarkdown remarkPlugins={[gfm]}>{product.description}</ReactMarkdown>
            </div>
        </>
    )
};