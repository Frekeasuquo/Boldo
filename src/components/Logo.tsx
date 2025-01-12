"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const Logo = () => {
    const currentPath = usePathname();

    return (
        <>
            {/* Logo Section */}
            <div>
                <Link href="/" className="flex items-center gap-0.5">
                    <span>
                        <Image
                            src="/images/LogoShape.png"
                            alt="Logo"
                            width="24"
                            height="24"
                        />
                    </span>
                    <span
                        className={`text-xxl font-bold ${
                            currentPath === "/product" ? "text-black" : "text-white"
                        }`}
                    >
                        Boldo
                    </span>
                </Link>
            </div>

            {/* Links and Button Section */}
            <div className="flex gap-6 z-30 items-center">
                {/* Individual Links */}
                <div className="flex gap-6 text-s font-semibold">
                    <Link
                        href="/product"
                        className={`${
                            currentPath === "/product" ? "text-black" : "text-white"
                        }`}
                    >
                        Product
                    </Link>
                    <Link
                        href="/service"
                        className={`${
                            currentPath === "/product" ? "text-black" : "text-white"
                        }`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        className={`${
                            currentPath === "/product" ? "text-black" : "text-white"
                        }`}
                    >
                        About
                    </Link>
                </div>

                {/* Button */}
                <Button
                    label="Log In"
                    variant="danger"
                    className={`w-32 h-12 ${
                        currentPath === "/product" ? "border-2 bg-inherit border-black text-s font-bold font-sans" : ""
                    }`}
                    
                />
            </div>
        </>
    );
};

export default Logo;


