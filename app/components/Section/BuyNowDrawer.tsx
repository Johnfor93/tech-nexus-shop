"use client"

import {LucideShoppingBag} from "lucide-react";
import React, {useEffect, useState} from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
} from "@heroui/react";
import { ProductOverviewInterface} from "@/app/type";
import Image from "next/image";

const BuyNowDrawer = ({product}:{product: ProductOverviewInterface}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [count, setCount] = useState(1);
    const [selectedColor, setSelectedColor] = useState("")

    useEffect(() => {
        const snapScript: string = "https://app.sandbox.midtrans.com/snap/snap.js";
        const clientKey: string = String(process.env.MIDTRANS_CLIENT_KEY);

        const script:HTMLScriptElement = document.createElement("script");
        script.src = snapScript;
        script.setAttribute( 'data-client-key',clientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])

    const handleCountChange = (change:number) => {
        if(count + change < 1){
            return;
        }
        setCount(count => count + change);
    }

    const handleSelectedColorChange = (selectedColor:{ name: string, hexcode: string }) => {
        setSelectedColor(selectedColor.name);
    }

    const changeHandler = (value:string) => {
        const newValue = value ? parseInt(value) : 0;
        console.log(newValue);

        if(newValue < 1){
            return;
        }
        setCount(newValue);
    }

    const handleClose = () => {
        setCount(1);
    }

    const handlePayment = async () => {
        const body = {
            id: product._id,
            name: product.name,
            price: product.price,
            amount: count,
            color: selectedColor,
        }

        const response:Response = await fetch('/api/payment/snap-token', {
            method: 'POST',
            body: JSON.stringify(body),
        })

        if(!response.ok){
            alert("Something went wrong");
            return;
        }

        const result = await response.json();

        console.log(result);

        window['snap'].pay(result.token);
    }

    return (
        <>

            <div onClick={onOpen}
                  className="bg-midnight-950 text-midnight-50 rounded-lg w-full py-2 inline-flex gap-2 justify-center items-center text-sm cursor-pointer">
                <LucideShoppingBag/>Buy Now
            </div>

            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Buy Now</DrawerHeader>
                            <DrawerBody>
                                <Image
                                    src={`https://images.takeshape.io/${product.image.path}`}
                                    alt={`${product.name} - Tech Nexus for your better life`}
                                    width={256}
                                    height={256}
                                    className="w-1/2 mx-auto aspect-video md:aspect-square object-cover object-center"
                                />
                                <h4 className={"text-xl lg:text-xl font-bold"}>{product.name}</h4>
                                <div className={`bg-[#b3d1f5] px-2 py-1 rounded w-fit block text-xs`}>
                                    {product.category.title}
                                </div>
                                <div className={`flex flex-wrap gap-2`}>
                                    {product.colors?.map((color: { name: string, hexcode: string }) => (
                                        <div onClick={() => handleSelectedColorChange(color)}
                                            className={`px-2 py-1 md:px-4 md:py-2 rounded-full bg-midnight-50 p-2 text-sm flex gap-2 ${selectedColor == color.name ? "border border-midnight-950 bg-midnight-950 text-midnight-50" : "bg-midnight-50"}`}
                                            key={color.name}>
                                            <div className={`w-8 aspect-square rounded-full`}
                                                 style={{backgroundColor: color.hexcode}}></div>
                                            <div className={`w-full text-center`}>
                                                {color.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className={"text-base font-bold mb-2"}>Amount</div>
                                    <div className={"grid grid-cols-3 gap-1 w-full"}>
                                        <div className={"w-full bg-midnight-200 text-center rounded-sm py-2 cursor-pointer"} onClick={() =>handleCountChange(-1)}>-</div>
                                        <input className={"w-full bg-gray-50 text-center"} type={"number"} value={count} onChange={(event) => changeHandler(event.target.value)} min={1}/>
                                        <div className={"w-full bg-midnight-200 text-center rounded-sm py-2 cursor-pointer"} onClick={()=>handleCountChange(1)}>+</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={"text-base font-bold mb-2"}>Total</div>
                                    <h2 className={"text-2xl md:text-3xl font-bold text-right"}>$ {product.price * count}</h2>
                                </div>
                            </DrawerBody>
                            <DrawerFooter>
                                <div className={"grid grid-cols-2 gap-1 w-full"}>
                                    <div className={"border border-midnight-900 text-midnight-900 text-center py-2 rounded-lg cursor-pointer"}
                                         onClick={() => {onClose(); handleClose();}}>
                                        Cancel
                                    </div>
                                    <div className={"bg-midnight-900 text-midnight-50 text-center py-2 rounded-lg cursor-pointer"}
                                         onClick={() => {handlePayment()}}>
                                        Buy Now $ {product.price * count}
                                    </div>
                                </div>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default BuyNowDrawer;