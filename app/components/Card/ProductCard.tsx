import Image from "next/image";
import Link from "next/link";
import {ProductCardInterface} from '@/app/type';
import React from "react";
import {LucideShoppingCart} from "lucide-react";

export default function ProductCard({product}: {product: ProductCardInterface}):React.ReactElement {
    return (
        <div className="flex flex-col w-full border border-gray-200 rounded-lg shadow overflow-hidden bg-white">
            <Image
                src={`https://images.takeshape.io/${product.image.path}`}
                alt={`${product.name} - Tech Nexus for your better life`}
                className="w-full aspect-video object-cover"
                width={256}
                height={256}/>
            <div className="w-full gap-4 px-4 py-4">
                <div className="text-lg sm:text-xl font-bold">{product.name}</div>
                <div className="text-base sm:text-lg">${product.price}</div>
                <div className="w-full gap-2 py-4 flex flex-col lg:flex-row justify-between">
                    <Link href={`/products/${product._id}`} className="text-midnight-950 bg rounded-lg w-full py-2 inline-flex gap-2 justify-center items-center border-midnight-950 border text-sm">
                        Product Details
                    </Link>
                    <Link href="/" className="bg-midnight-950 text-midnight-50 rounded-lg w-full py-2 inline-flex gap-2 justify-center items-center text-sm">
                        <LucideShoppingCart /> Add to Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}