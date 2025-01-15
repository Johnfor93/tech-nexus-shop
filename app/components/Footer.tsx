import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

function Footer() {
    return <>
        <footer
    className="mt-16 bg-[linear-gradient(0deg,rgba(27,27,27,1)0%,rgba(27,27,27,1)80%,rgba(27,27,27,0)100%)] pt-32 pb-12">
    <div className="container mx-auto text-white">
      <div className="grid md:grid-cols-3 gol-cols-1 gap-4 p-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/tech-nexus-light.png"
              alt="Logo"
              width="64"
              height="64" />
            <div className="text-2xl font-bold">Tech Nexus</div>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-white hover:underline text-lg font-semibold">
              <Instagram />
            </Link>

            <Link
              href="/"
              className="text-white hover:underline text-lg font-semibold">
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-white hover:underline text-lg font-semibold">
            Home
          </Link>

          <Link
            href="/products"
            className="text-white hover:underline text-lg font-semibold">
            Products
          </Link>
          <Link
            href="/products"
            className="text-white hover:underline text-lg font-semibold">
            Contact Us
          </Link>
          <Link
            href="/customer-support"
            className="text-white hover:underline text-lg font-semibold">
            Support
          </Link>
          <Link
            href="/faq"
            className="text-white hover:underline text-lg font-semibold">
            FAQ
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-white text-lg font-semibold">Alamat</div>
          <div className="text-white text-base font-regular">
            Jl Raya Boulevard Tmr Kelapa Gading<br />
            DKI Jakarta, Indonesia<br />
            (+62) 21 452-8547
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
}

export default Footer;