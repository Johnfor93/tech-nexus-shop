import Image from "next/image";
import Link from "next/link";
import "./homepage.css";
import ProductListSection from "@/app/components/Section/ProductListSection";

export default function Home({searchParams}) {
  const page:number = searchParams?.page ? parseInt(searchParams.page) : 1;
  const perPage = 6;

  return (
    <>
    <div className="flex flex-col gap-8">

      <div className="background-homepage" id="hero-section">
        <div
            className="min-h-[80vh] container mx-auto flex flex-col items-center justify-center">
          <div className="text-midnight-950 md:text-base text-sm mb-3 text-center">
            Welcome to Tech Nexus
          </div>
          <h1 className="text-midnight-950 md:text-5xl text-3xl  font-bold mb-2 text-center">
            Technology for Quality of Life
          </h1>
          <p className="text-midnight-950 md:text-base text-base  mb-4 text-center">
            Transforming your daily living with smart technology. You deserve a
            better life.
          </p>
          <Image
              src="/tech-nexus-homepage.webp"
              alt="Best Seller Product Tech Nexus - Tech Nexus Invision Pro 1 | Best for your productivity"
              className="w-1/2 md:w-1/3"
              width={256}
              height={256}/>
        </div>
      </div>

      <div className="container mx-auto">
        <div className={"px-8 mb-4"}>
          <h3 className={"text-3xl font-bold mb-1"}>Our Product</h3>
          <p className={"text-base"}>This several product for your better quality</p>
        </div>
        <ProductListSection page={page} perPage={perPage}/>
      </div>

      <div className="container mx-auto" id="features-section">
        <div className="bg-midnight-950 py-16 px-8 w-10/12 mx-auto rounded-lg">
          <div className="md:w-8/12 w-full">
            <h3 className="text-white text-2xl font-bold text-left mb-4">
              Elevate your digital experience with TechNexus today!
            </h3>
            <p className="text-white md:text-base text-base mb-8">
              Experience the difference that quality and innovation can make.
              Contact our product support to know more about us.
            </p>
            <Link
                href="/contact"
                className="bg-midnight-50 text-midnight-950 px-6 py-2 rounded-md md:text-base text-base font-semibold mb-8"
            >Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}