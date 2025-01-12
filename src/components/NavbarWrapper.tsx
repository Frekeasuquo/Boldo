"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


const NavbarWrapper = () => {
    const pathname = usePathname();

    // Determine if the current page is the product page
    const isProductPage = pathname === "/product";

    // Hide Navbar for the homepage
    if (pathname === "/") {
        return null;
    }

    return (
        <Navbar
            className={`${isProductPage ? "bg-white text-black" : ""}`}
        />
    );
};

export default NavbarWrapper;






// const NavbarWrapper = () => {
//     const pathname = usePathname();

//     // Determine the custom class to apply based on the current route
//     const customClassName = pathname === "/product" ? "bg-page " : "";
    


//     // Hide Navbar for specific route (like homepage)
//     if (pathname === "/") {
//         return null;
//     }

//     return (
//         <>
//             <Navbar className={customClassName} />  
//         </>
//     );;
// };

// export default NavbarWrapper;


