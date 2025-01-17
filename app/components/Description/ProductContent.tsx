"use client"
import { Tabs, Tab } from "@heroui/react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import React from "react";
import {ProductDetailInterface} from "@/app/type";
import ReviewSection from "@/app/components/Section/ReviewSection";

export default function ProductContent({product}: {product: ProductDetailInterface}) {
    return (
        <Tabs aria-label={"Product Content"} fullWidth={true} color={"primary"}>
            <Tab title="Description">
                <div>
                    <ReactMarkdown remarkPlugins={[gfm]}>{product.description}</ReactMarkdown>
                </div>
            </Tab>
            <Tab title="Review">
                <ReviewSection product={product} />
            </Tab>
        </Tabs>
    )
}