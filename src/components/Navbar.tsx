"use client"
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image";
import Button from "./ui/Button";
import { usePathname, useRouter } from 'next/navigation';

import clsx from "clsx";
import Logo from "./Logo";

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    
    const currentPath = usePathname();

    return (
        <section className={clsx("flex bg-background justify-end items-start relative object-cover", className)}>
            <MaxWidthWrapper>
                <header className="relative py-4">
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

export default Navbar;


// import clsx from "clsx";

// interface NavbarProps {
//   className?: string;
// }

// const Navbar: React.FC<NavbarProps> = ({ className }) => {
//   return (
//     <section className={clsx("flex bg-background justify-end items-start relative object-cover", className)}>
//       <MaxWidthWrapper>
//         <header className="relative py-4">
//           <div className="border-none">
//             <div className="flex items-center justify-between">
//               <div>
//                 <Link href="/" className="flex items-center gap-0.5">
//                   <span>
//                     <Image src="/images/LogoShape.png" alt="Logo" width="24" height="24" />
//                   </span>
//                   <span className="text-xxl text-white font-bold">Boldo</span>
//                 </Link>
//               </div>
//               <div className="flex gap-6 z-30 items-center">
//                 <div className="flex gap-6 text-s text-white font-semibold">
//                   <Link href="/product">Product</Link>
//                   <Link href="/service">Services</Link>
//                   <Link href="/about">About</Link>
//                 </div>
//                 <div className="text-white font-semibold">
//                   <Button label="Log In" variant="danger" className="w-32 h-10" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default Navbar;


// const Navbar = () => {

//     return (
//         <section className="flex bg-background justify-end items-start relative object-cover">
//             <MaxWidthWrapper>
//                 <header className="relative py-4">
//                     <div className="border-none">
//                         <div className="flex items-center justify-between ">
//                             <div className="">
//                                 <Link href='/' className="flex items-center gap-0.5 ">
//                                     <span><Image src="/images/LogoShape.png" alt="Logo" width="24" height='24' /></span>
//                                     <span className="text-xxl text-white font-bold ">Boldo</span>
//                                 </Link>

//                                 {/* TODO: Mobile nav*/}
//                             </div>

//                             <div className="flex gap-6 z-30 items-center">
//                                 <div className=" flex gap-6 text-s text-white font-semibold">
//                                     <Link href="/product">Product</Link>
//                                     <Link href="/service">Services</Link>
//                                     <Link href="/about">About</Link>
//                                 </div>
//                                 <div className="text-white font-semibold">
//                                     <Button label="Log In" variant="danger" className="w-32 h-10" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//             </MaxWidthWrapper>
//         </section>
//     )
// };


// export default Navbar;