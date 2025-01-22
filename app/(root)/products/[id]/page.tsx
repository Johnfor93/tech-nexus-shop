import ProductDescription from "@/app/components/Description/ProductDescription";

export default function Product({params}) {
    const idProduct : string = params.id;
    console.log(idProduct);

    return (
        <>
            <div className={"bg-midnight-100"}>
                <div className="container mx-auto flex flex-col gap-8">
                    <div className="background-homepage p-8" id="hero-section">
                        <div
                            className="min-h-[20vh] container mx-auto flex flex-col items-center justify-center">
                            <h1 className="text-midnight-950 md:text-5xl text-3xl  font-bold mb-2 text-center">
                                Our Products
                            </h1>
                            <p className="text-midnight-950 md:text-base text-base  mb-4 text-center">
                                Transforming your daily living with smart technology. You deserve a
                                better life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"container mx-auto min-h-[80vh] py-8"}>
                <div className={"flex gap-8"}>
                    <div className={"w-9/12 mx-auto"}>
                        <ProductDescription idProduct={idProduct} />
                    </div>
                </div>
            </div>
        </>
    )
}