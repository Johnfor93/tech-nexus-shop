"use client"
import React, {useState} from "react";

interface ReviewFromProps {
    idProduct: string;
    onRefreshReviews: ({username, review} : {username: string, review: string}) => void;
}

const ReviewForm: React.FC<ReviewFromProps> = ( {idProduct, onRefreshReviews}) => {
    const [username, setUsername] = useState("")
    const [review, setReview] = useState("")

    const handleSubmit = async () => {
        const response = await fetch("/api/review/add", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                review: review,
                id: idProduct,
            })
        })

        if(!response.ok){
            return;
        }

        onRefreshReviews({
            username: username,
            review: review,
        });
        setReview("");
        setUsername("");
    }

    return (
        <>
            <div className={"w-full rounded-lg bg-gray-50 p-4"}>
                <div className={"font-bold text-sm mb-4"}>Write your review about this product</div>
                <div className={"flex sm:flex-row flex-col justify-start items-center gap-2 mb-4"}>
                    <div className={"font-bold text-sm w-full sm:w-3/12"}>Username</div>
                    <div className="text-bold text-base w-full">
                        <input className={"w-full appearance-none border border-gray-200 rounded-md px-2"} key={"username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-start items-start gap-2 mb-4">
                    <div className={"font-bold text-sm w-full sm:w-3/12"}>Review</div>
                    <textarea className={"w-full p-2"} key={"reviewMessage"} value={review}
                              onChange={(e) => setReview(e.target.value)}></textarea>
                </div>
                <div
                    className={"bg-midnight-500 text-midnight-50 cursor-pointer w-fit px-2 md:px-4 py-1 md:py-2  rounded-sm md:rounded"} onClick={handleSubmit}>Submit</div>
            </div>
        </>
    )
}

export default ReviewForm;