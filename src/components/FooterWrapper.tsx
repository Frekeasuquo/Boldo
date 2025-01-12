"use client";
import { usePathname } from "next/navigation";
import Footer from './Footer';


const FooterWrapper = () => {
    const pathname = usePathname();

    // Determine the custom class to apply based on the current route
    const customClassName = pathname === "/product" ? "bg-white " : "";

    return (
        <>
            <Footer className={customClassName} />  
        </>
    );;
};

export default FooterWrapper;