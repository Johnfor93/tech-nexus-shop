"use client"
import ReviewCard from "@/app/components/Card/ReviewCard";
import ReviewForm from "@/app/components/Form/ReviewForm";
import React, {useState} from "react";
import {ProductDetailInterface} from "@/app/type";

export default function ReviewSection({product}:{product:ProductDetailInterface}) {
    const [reviews, setReviews] = useState(product.reviews.items);

    function refreshReviews(newReview: {username: string, review: string}) {
        setReviews((prevreviews) => [newReview, ...prevreviews]);
    }
    return (
        <>
            <div className={"grid grid-cols-1 gap-2"}>
                {
                    reviews.map((review, index) => {
                        return <ReviewCard review={review} key={index}/>;
                    })
                }

                <ReviewForm idProduct={product._id} onRefreshReviews={refreshReviews}/>
            </div>
        </>
    )
}