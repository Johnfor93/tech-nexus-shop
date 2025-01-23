import { getProductById } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
import { ProductDetailInterface } from "@/app/type";
import ProductContent from "@/app/components/Description/ProductContent";
import BuyNowDrawer from "@/app/components/Section/BuyNowDrawer";

export default async function ProductDescription({ idProduct }: { idProduct: string }) {
    const product: ProductDetailInterface | undefined = await getProductById(idProduct);

    if (!product) {
        throw new Error("Product not found");
    }

    return (
        <>
            <div className={"flex md:flex-row flex-col gap-x-8 gap-y-2 md:mb-8 mb-4"}>
                <div className={"w-full md:w-5/12"}>
                    <Image
                        src={`https://images.takeshape.io/${product.image.path}`}
                        alt={`${product.name} - Tech Nexus for your better life`}
                        width={256}
                        height={256}
                        className="w-full aspect-video md:aspect-square object-cover object-center"
                    />
                </div>
                <div className={"w-full md:w-7/12 p-1"}>
                    <h1 className={"text-3xl lg:text-5xl font-bold mb-2"}>{product.name}</h1>
                    <div className={`bg-[#b3d1f5] px-2 py-1 rounded mb-4 w-fit block text-xs`}>
                        {product.category.title}
                    </div>
                    <div className={`flex flex-wrap gap-2 mb-4`}>
                        {product.colors?.map((color: { name: string, hexcode: string }) => (
                            <div className={"px-2 py-1 md:px-4 md:py-2 rounded-full bg-midnight-50 p-2 text-sm flex gap-2"} key={color.name}>
                                <div className={`w-8 aspect-square rounded-full`} style={{ backgroundColor: color.hexcode }}></div>
                                <div className={`w-full text-center`}>
                                    {color.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={"text-base mb-2"}>
                        <span className={"font-bold"}>Sold :</span>{product.sold}
                    </div>
                    <h2 className={"text-2xl md:text-3xl font-bold"}>$ {product.price}</h2>
                    <div className="w-full gap-2 py-4 flex flex-row justify-between">
                        <BuyNowDrawer product={product} />
                    </div>
                </div>
            </div>

            <hr />

            <ProductContent product={product} />
        </>
    );
};
