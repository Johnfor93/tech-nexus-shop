import {ProductCardInterface} from "@/app/type";
import ProductCard from "@/app/components/Card/ProductCard";
import PaginationSection from "@/app/components/Section/PaginationSection";
import {getProductList} from "@/app/lib/data";

const ProductListSection = async (props: {perPage: number, page:number }) => {
    const result:{products: ProductCardInterface[], total: number} | undefined = await getProductList(props.perPage, (props.page-1)*props.perPage);

    if(result === undefined){
        return <>Not Found</>
    }

    const products = result.products;
    const total = result.total;

    if(products === undefined){
        console.log("No products");
        return (
            <>Not Found</>
        )
    }

    const totalPage:number = Math.ceil(total/props.perPage);

    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 p-8">
                {products?.map((item: ProductCardInterface) => (
                    <ProductCard key={item._id} product={item}/>
                ))}
            </div>

            <div className={"flex justify-center"}>
                <PaginationSection currentPage={props.page} totalPage={totalPage}/>
            </div>
        </>
    );
}

export default ProductListSection;