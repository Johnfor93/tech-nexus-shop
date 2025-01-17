import ProductListSection from "@/app/components/Section/ProductListSection";

export default async function Products({searchParams}: {searchParams?: {page: string}}) {
    const page:number = searchParams?.page ? parseInt(searchParams.page) : 1;
    const perPage = 6;

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

            <ProductListSection page={page} perPage={perPage}/>

        </>
    )
}