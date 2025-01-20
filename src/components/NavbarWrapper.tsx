"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


const NavbarWrapper = () => {
    const pathname = usePathname();

    // Determine if the current page is the product page
    const isProductPage = pathname === "/product";

    // Hide Navbar for the homepage
    // if (pathname === "/ll") {
    //     return null;
    // }

    return (
        <Navbar
            className={`${isProductPage ? "bg-white text-black" : ""}`}
        />
    );
};

export default NavbarWrapper;




