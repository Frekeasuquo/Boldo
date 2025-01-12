import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./ui/Button";
import Image from "next/image";
import clsx from "clsx";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <section className={clsx("bg-page relative py-6", className)}>
      <MaxWidthWrapper className="max-w-screen-xl px-2 md:20px p-6 w-full">
        <div className="flex flex-col bg-background h-[400px] rounded-lg items-center justify-center p-7">
          <h1 className="text-white text-xxl text-center p-10 w-[70%]">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              className="rounded-full bg-page w-80 md:w-50 h-11 px-4 py-2"
              placeholder="Your email address"
              aria-label="Enter your email address"
            />
            <Button label="Start now" variant="primary" className="border-spacing-1 border-2 border-black px-6" />
          </div>
        </div>
        <div className="flex py-12">
          <div className="basis-1/3 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-0.5">
              <span>
                <Image src="/images/LogoShape2.png" alt="Logo" width="24" height="24" />
              </span>
              <span className="text-xxl text-background font-bold">Boldo</span>
            </Link>
            <p className="break-words text-wrap truncate w-[300px] text-gray-600">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad
              twitter.
            </p>
            <p className="py-6 text-gray-600">All rights reserved.</p>
          </div>
          <div className="flex justify-around basis-2/3">
            <div className="flex flex-col justify-evenly basis-1/3">
                <Link href='#' className="flex items-center gap-0.5 text-black font-bold text-lg">Landings</Link>
                <Link href='#' className="flex items-center gap-0.5 text-gray-600 text-s">Home</Link>
                <Link href='/product' className="flex items-center gap-0.5 text-gray-600 text-s">Products</Link>
                <Link href='/service' className="flex items-center gap-0.5 text-gray-600 text-s">Services</Link>
            </div>
            <div className="flex flex-col justify-evenly basis-1/3">
                <Link href='#' className="flex items-center gap-0.5 text-black font-bold text-lg">Company</Link>
                <Link href='/' className="flex items-center gap-0.5 text-gray-600 text-s">Home</Link>
                <Link href='#' className="flex items-center gap-4 text-gray-600 text-s">
                    Careers
                    <Button label="Hiring!" variant="primary" className="w-18 h-10 justify-center" /> 
                </Link>
                <Link href='/service' className="flex items-center gap-0.5 text-gray-600 text-s">Services</Link>
            </div>
            <div className="flex flex-col justify-evenly basis-1/3">
                <Link href="#"  className="flex items-center gap-0.5 text-black font-bold text-lg">Resources</Link>
                <Link href="#" className="flex items-center gap-0.5 text-gray-600 text-s">Blog</Link>
                <Link href='/project' className="flex items-center gap-0.5 text-gray-600 text-s">Products</Link>
                <Link href='/service' className="flex items-center gap-0.5 text-gray-600 text-s">Services</Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;


// const Footer = () => {
//     return (
//         <section className="bg-page relative py-6">
//             <MaxWidthWrapper className="max-w-screen-xl px-2 md:20px p-6 w-full">
//                 <div className="flex flex-col bg-background  h-[400px] rounded-lg items-center justify-center p-7">
//                     <h1 className="text-white text-xxl text-center p-10 w-[70%]">An enterprise template to ramp up your company website</h1>
//                     <div className="flex gap-2 items-center">
//                         <input type="email" className="rounded-full bg-page w-80 md:w-50 h-11  px-4 py-2" placeholder="Your email address" aria-label="Enter your email address" />
//                         <Button label="Start now" variant="primary" className=" border-spacing-1 border-2 border-black px-6" />  
//                     </div>
//                 </div>

//                 <div className="flex py-12">
//                     <div className="basis-1/3 flex flex-col gap-6">
//                         <Link href='/' className="flex items-center gap-0.5 ">
//                             <span><Image src="/images/LogoShape2.png" alt="Logo" width="24" height='24' /></span>
//                             <span className="text-xxl text-background font-bold ">Boldo</span>
//                         </Link>
//                         <p className="break-words text-wrap truncate w-[300px] text-gray-600">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
//                         <p className="py-6 text-gray-600">All rights reserved.</p>
//                     </div>
//                     <div className="flex justify-around basis-2/3">
//                         <div className="flex flex-col justify-evenly basis-1/3">
//                             <Link href='#' className="flex items-center gap-0.5 text-black font-bold text-lg">Landings</Link>
//                             <Link href='#' className="flex items-center gap-0.5 text-gray-600 text-s">Home</Link>
//                             <Link href='/product' className="flex items-center gap-0.5 text-gray-600 text-s">Products</Link>
//                             <Link href='/service' className="flex items-center gap-0.5 text-gray-600 text-s">Services</Link>
//                         </div>
//                         <div className="flex flex-col justify-evenly basis-1/3">
//                             <Link href='#' className="flex items-center gap-0.5 text-black font-bold text-lg">Company</Link>
//                             <Link href='/' className="flex items-center gap-0.5 text-gray-600 text-s">Home</Link>
//                             <Link href='#' className="flex items-center gap-4 text-gray-600 text-s">
//                                 Careers
//                                 <Button label="Hiring!" variant="primary" className="w-18 h-10 justify-center" /> 
//                             </Link>
//                             <Link href='/service' className="flex items-center gap-0.5 text-gray-600 text-s">Services</Link>
//                         </div>
//                         <div className="flex flex-col justify-evenly basis-1/3">
//                             <Link href="#"  className="flex items-center gap-0.5 text-black font-bold text-lg">Resources</Link>
//                             <Link href="#" className="flex items-center gap-0.5 text-gray-600 text-s">Blog</Link>
//                             <Link href='/project' className="flex items-center gap-0.5 text-gray-600 text-s">Products</Link>
//                             <Link href='/service' className="flex items-center gap-0.5 text-gray-600 text-s">Services</Link>
//                         </div>
//                     </div>
//                 </div>
//             </MaxWidthWrapper>
//         </section>
        
//     )
// };


// export default Footer;