import {LucideUserCircle} from "lucide-react";


export default function ReviewCard({ review } : {review :{username: string, review:string}}){
    return (
        <>
            <div className={"w-full rounded-lg bg-gray-50 p-4"}>
                <div className={"flex justify-start items-center gap-2 mb-1"}>
                    <LucideUserCircle className={"w-6 h-6"}/>
                    <div className="text-bold text-base font-bold ">{review.username}</div>
                </div>
                <div className="text-bold text-sm mb-1 ml-8">{review.review}</div>
            </div>
        </>
    )
}