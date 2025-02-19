"use client"
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image";
import Button from "./ui/Button";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
import clsx from "clsx";
import Logo from "./Logo";


interface NavbarProps {
    className?: string;
}


const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const currentPath = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <section className={clsx("flex bg-background justify-end items-start relative", className)}>
        <MaxWidthWrapper>
            <header className="relative py-3">
                <div className="border-none">
                    <div className="">
                        {/* Logo */}
                        <Logo />
                        
                        {/* Hamburger Menu */}
                        {/* Logo Section */}
                        <div className="md:hidden flex justify-between ">
                            <div className="z-30">
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
                            <button
                                className={`block focus:outline-none z-50 ${
                                    currentPath === "/product" ? "text-black" : "text-white"
                                }`}
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={
                                        isMenuOpen
                                            ? "M6 18L18 6M6 6l12 12" // Close icon (X)
                                            : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </MaxWidthWrapper>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
            <div className="absolute top-28 left-0 w-full bg-inherit rounded-3xl text-white z-50 shadow-lg md:hidden">
                <nav className="flex flex-col gap-4 p-4 text-center">
                    {[
                        { href: "/product", label: "Product" },
                        { href: "/service", label: "Services" },
                        { href: "/about", label: "About" },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-lg ${
                                currentPath === "/product"
                                ? "text-black text-lg hover:text-gray-400"
                                : "text-white hover:text-gray-200"
                            }`}
                            onClick={toggleMenu} // Close menu on link click
                        >
                            {label}
                        </Link>
                    ))}
                    <Button
                        label="Log In"
                        variant="danger"
                        className={`w-32 h-12 pt-3 mx-auto ${
                        currentPath === "/product"
                            ? "border-2 bg-inherit border-black text-s font-bold font-sans"
                            : ""
                        }`}
                        to={'/login'}
                    />
                </nav>
            </div>
        )}
        </section>
    );
};

export default Navbar;


{/*interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    
    const currentPath = usePathname();

    return (
        <section className={clsx("flex bg-background justify-end items-start relative", className)}>
            <MaxWidthWrapper>
                <header className="relative py-3">
                    <div className="border-none">
                        <div className="flex items-center justify-between">
                            <Logo />
                        </div>
                    </div>
                </header>
            </MaxWidthWrapper>
        </section>
    );
};

export default Navbar;*/}
