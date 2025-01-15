import Image from "next/image";
import Link from "next/link";
import "./homepage.css";

export default function Home() {
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
          <Link
            href="/products"
            className="text-midnight-50 bg-midnight-950 px-6 py-2 rounded-md md:text-base text-base font-semibold mb-8"
            >See Product</Link>
          <Image
            src="/tech-nexus-homepage.webp"
            alt="Best Seller Product Tech Nexus - Tech Nexus Invision Pro 1 | Best for your productivity"
            className="w-1/2 md:w-1/3"
            width={256}
            height={256}/>
        </div>
      </div>

      <div className="container mx-auto p-8" id="features-section">
        <h1 className="text-midnight-950 md:text-5xl text-3xl font-bold mb-2 text-left">
          Featured Products
        </h1>
        <div className="mb-8 flex flex-col gap-4">
            <div className="w-full grid grid-cols-3 gap-4">
          <div className="w-full">
            <Image
              src="/images/feature-product-1.webp"
              alt="Tech Nexus Invision Pro 1 - Elevate Your Work and Play"
              className="w-full"width={256}
            height={256}
              />
          </div>
            <Image
              src="/images/feature-product-3.webp"
              alt="TechNexus A1 Pro - All in one handheld device"
              className="w-full"width={256}
            height={256}
              />
            <Image
              src="/images/feature-product-2.webp"
              alt="TechNexus Smart Watch - Smart Watch with Heart Rate Monitor"
              className="w-full"width={256}
            height={256}
              />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="/products"
            className="text-midnight-950 hover:underline md:text-base text-base font-semibold border border-midnight-950 px-6 py-2 rounded-md">
            See More Product
          </Link>
        </div>
      </div>

      <div className="container mx-auto p-8" id="benefits-section">
      <h1 className="text-midnight-950 md:text-5xl text-3xl font-bold mb-8 text-left">
        TechNexus is Not About Brand, It's About Quality
      </h1>
      <div className="flex lg:flex-col gap-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col w-full h-fit relative">
            <div
              className="w-full flex lg:justify-end items-center flex-col lg:flex-row">
              <Image
                src="/images/best-quality-offer.webp"
                alt="Tech Nexus - We give you the best quality"
                className="lg:w-6/12 w-full" width={500} height={500}
                 />
              <div
                className="lg:w-5/12 lg:absolute lg:top-0 lg:left-[5%] flex justify-center items-center lg:h-full">
                <div
                  className="py-6 px-4 lg:py-24 lg:px-8 lg:bg-gradient-to-tr lg:to-[#30303036] lg:from-[#3030300c] backdrop-blur-2xl bg-white w-full rounded-lg border-[1px] border-[#00000021]">
                  <h2 className="text-midnight-950 text-2xl font-bold mb-4">
                    Best Quality Offer
                  </h2>
                  <p className="text-midnight-950 md:text-base text-base">
                    Our products are meticulously crafted using the finest
                    materials and cutting-edge technology. Each device undergoes
                    rigorous testing by industry professionals to ensure it
                    meets the highest standards of performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-fit relative">
            <div
              className="w-full relative z-10 flex lg:justify-start items-center flex-col lg:flex-row">
              <Image
                src="/images/fresh-new-design.webp"
                alt="Tech Nexus - We give you the best quality"
                className="lg:w-7/12 w-full" width={500} height={500}
                 />
              <div
                className="lg:w-5/12 lg:absolute lg:top-0 lg:right-[5%] flex justify-center items-center lg:h-full">
                <div
                  className="py-6 px-4 lg:py-24 lg:px-8 lg:bg-gradient-to-tr lg:to-[#30303036] lg:from-[#3030300c] backdrop-blur-2xl bg-white w-full rounded-lg border-[1px] border-[#00000021]">
                  <h2 className="text-midnight-950 text-2xl font-bold mb-4">
                    Fresh New Design
                  </h2>
                  <p className="text-midnight-950 md:text-base text-base">
                    We believe that technology should not only perform
                    exceptionally but also look stunning. Our sleek, modern
                    designs are tailored to fit seamlessly into your lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col w-full h-fit relative">
            <div
              className="w-full relative z-10 flex lg:justify-end items-center flex-col lg:flex-row">
              <Image
                src="/images/user-is-first-priority.webp"
                alt="Tech Nexus - We give you the best quality"
                className="lg:w-7/12 w-full" width={500} height={500}
                 />
              <div
                className="lg:w-5/12 lg:absolute lg:top-0 lg:left-[5%] flex justify-center items-center lg:h-full">
                <div
                  className="py-6 px-4 lg:py-24 lg:px-8 lg:bg-gradient-to-tr lg:to-[#30303036] lg:from-[#3030300c] backdrop-blur-2xl bg-white w-full rounded-lg border-[1px] border-[#00000021]">
                  <h2 className="text-midnight-950 text-2xl font-bold mb-4">
                    User is First Priority
                  </h2>
                  <p className="text-midnight-950 md:text-base text-base">
                    At TechNexus, we prioritize the needs of our users. Our
                    products are designed with intuitive features that enhance
                    usability and provide an exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-fit relative">
            <div
              className="w-full relative z-10 flex lg:justify-start items-center flex-col lg:flex-row">
              <Image
                src="/images/performance-booster.webp"
                alt="Tech Nexus - We give you the best quality"
                className="lg:w-7/12 w-full" width={500} height={500}
                 />
              <div
                className="lg:w-5/12 lg:absolute lg:top-0 lg:right-[5%] flex justify-center items-center lg:h-full">
                <div
                  className="py-6 px-4 lg:py-24 lg:px-8 lg:bg-gradient-to-tr lg:to-[#30303036] lg:from-[#3030300c] backdrop-blur-2xl bg-white w-full rounded-lg border-[1px] border-[#00000021]">
                  <h2 className="text-midnight-950 text-2xl font-bold mb-4">
                    Performance Booster
                  </h2>
                  <p className="text-midnight-950 md:text-base text-base">
                    From powerful laptops that boost productivity to smartphones
                    that keep you connected, and peripherals that enhance your
                    setup, TechNexus offers a complete ecosystem of electronics
                    tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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