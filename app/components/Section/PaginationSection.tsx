"use client"
import {Pagination} from "@heroui/react";
import {useRouter, usePathname} from "next/navigation";

const PaginationSection= ({currentPage, totalPage}: {currentPage: number, totalPage:number}) => {
    const router = useRouter();
    const pathname = usePathname();

    console.log(pathname)
    console.log(router)

    const changePage = (page:number) => {
        router.push(`${pathname}?page=${page}`);
    }

    return (
        <>
            <Pagination showControls page={currentPage} total={totalPage} onChange={changePage}/>
        </>
    )
}

export default  PaginationSection