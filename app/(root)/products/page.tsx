import { getProductList } from "@/app/lib/data";
import { ProductCardInterface } from "@/app/type";
import ProductCard from "@/app/components/Card/ProductCard";

export default async function Products() {
    const products : ProductCardInterface[] | undefined = await getProductList(10, 0);

    if(products === undefined){
        console.log("No products");
    }
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

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 p-8">
                    {products?.map((item: ProductCardInterface) => (
                        <ProductCard key={item._id} product={item} />
                    ))}
                </div>
            </div>
        </>
    )
}