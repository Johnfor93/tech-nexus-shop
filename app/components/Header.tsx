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
            </div>
        </div>
    </>;
}

export default Header;