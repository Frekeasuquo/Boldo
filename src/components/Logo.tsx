"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const Logo = () => {
    const currentPath = usePathname();

    return (
        <div className="hidden md:flex gap-6 items-center justify-between">
            {/* Logo Section */}
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

            {/* Links and Button Section */}
            <div className="flex gap-6 z-30 items-center">
                {/* Individual Links */}
                <nav className="flex gap-6 text-s font-semibold">
                    {[
                        { href: "/product", label: "Product" },
                        { href: "/service", label: "Services" },
                        { href: "/about", label: "About" },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-s ${
                                currentPath === "/product"
                                ? "text-black hover:text-gray-400"
                                : "text-white hover:text-gray-200"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                {/* Button */}
                <Button
                    label="Log In"
                    variant="danger"
                    className={`w-32 h-12 pt-3 text-center ${
                        currentPath === "/product" ? "border-2 bg-inherit border-black text-s font-bold font-sans" : ""
                    }`}
                    to={'/login'}
                />
            </div>
        </div>
    );
};

export default Logo;


