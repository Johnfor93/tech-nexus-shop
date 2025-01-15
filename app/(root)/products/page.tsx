import Image from "next/image";

export default function Products() {
    
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="background-homepage" id="hero-section">
                    <div
                    className="min-h-[40vh] container mx-auto flex flex-col items-center justify-center">
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
                    </div>
                </div>
            </div>


        </>
    )
}