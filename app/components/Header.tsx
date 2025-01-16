import Link from "next/link";
import Image from "next/image";

/* Todo
    Make the component responsive
*/
function Header() {
    return <>
        <div className="p-6 bg-white">
            <div className="container mx-auto flex justify-between">
            <Link href="/">
                <div className="flex items-center gap-2">
                <Image
                    src="/logo/tech-nexus.png"
                    alt="Logo"
                    width="64"
                    height="64" />
                <div className="text-2xl font-bold text-midnight-950">Tech Nexus</div>
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <Link
                href="/"
                className="text-midnight-950 hover:underline text-lg font-semibold">
                Home
                </Link>
                <Link
                href="/products"
                className="text-midnight-950 hover:underline text-lg font-semibold">
                Products
                </Link>
                <Link
                href="/contact"
                className="text-midnight-950 hover:underline text-lg font-semibold">
                Contact Us
                </Link>
                <Link
                href="/customer-support"
                className="text-midnight-950 hover:underline text-lg font-semibold">
                Support
                </Link>
                <Link
                href="/faq"
                className="text-midnight-950 hover:underline text-lg font-semibold">
                FAQ
                </Link>
            </div>
            </div>
        </div>
    </>;
}

export default Header;