'use client'
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import Button from "@/src/components/ui/Button";
import Number from "@/src/components/ui/countNumber";
import Image from "next/image";


const Product = () => {

    
    return (
        <section className="bg-white">
            <div className=" text-black">
                <MaxWidthWrapper>
                    {/* Blog Title Section */}
                    <div className="flex flex-col items-center text-center gap-4 p-5">
                        <h4 className="text-s sm:text-lg">Blog</h4>
                        <h2 className="text-xl sm:text-xxl lg:text-yl font-sans font-normal leading-snug">Thought and words</h2>
                    </div>
                    {/* Featured Blog Section */}
                    <div className="flex flex-wrap lg:flex-nowrap items-center justify-between pt-16 gap-10">
                        <Image src="/images/Rectangle16.png" className="object-contain w-full lg:w-1/2" alt="Logo" width="500" height='140' />
                        <div className="flex flex-col justify-center p-4 w-full lg:w-1/2">
                            <div className="flex gap-4 py-2 text-s">
                                <h3 className="font-bold font-alt">Category</h3>
                                <p className="font-alt text-#777777">November 22, 2021</p>
                            </div>
                            <h2 className="text-lg sm:text-xl lg:text-xxl font-sans mb-4">
                                Pitch termsheet backing validation focus release.
                            </h2>
                            <div className=" flex items-center gap-4 py-2">
                                <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                <p className="text-s font-alt text-black">Chandler Bling</p>
                            </div>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className=" py-12 ">
                        <div className="border-t border-black w-full"/>
                    </div>
                </MaxWidthWrapper>
            </div> 
            <main className="">
                <div className="">
                    <MaxWidthWrapper className="max-w-screen-lg px-2 ">
                        <h2 className="text-xxl font-normal pb-10">Latest news</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                            <div className="w-full max-w-[270px] md:max-w-[350px] lg:max-w-[400px] h-auto">
                                <Image src="/images/Rectangle123.png" className="object-contain" alt="Logo" width="270" height='140' />
                                <div className="flex flex-wrap gap-4 py-2">
                                    <h3 className="text-s font-bold font-alt">Category</h3>
                                    <p className="text-s font-alt text-#777777">November 22, 2021</p>
                                </div>
                                <h2 className="text-xs font-sans w-full sm:w-60  flex-grow  flex-wrap  break-words text-wrap md:text-s">
                                    Pitch termsheet backing validation focus release.
                                </h2>
                                <div className=" flex gap-4 py-2">
                                    <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                    <p className="text-s font-alt text-black">Chandler Bling</p>
                                </div>
                            </div>
                            <div className="w-full max-w-[270px] md:max-w-[350px] lg:max-w-[400px] h-auto">
                                <Image src="/images/Rectangln222.png" className="object-contain" alt="Logo" width="270" height='140' />
                                <div className="flex gap-4 py-2">
                                    <h3 className="text-s font-bold font-alt">Category</h3>
                                    <p className="text-s font-alt text-#777777">November 22, 2021</p>
                                </div>
                                <h2 className="text-xs font-sans w-full sm:w-60  flex-grow  flex-wrap break-words text-wrap md:text-s">
                                    Pitch termsheet backing validation focus release.
                                </h2>
                                <div className=" flex gap-4 py-2">
                                    <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                    <p className="text-s font-alt text-black">Chandler Bling</p>
                                </div>
                            </div>
                            <div className="w-full max-w-[270px] md:max-w-[350px] lg:max-w-[400px] h-auto">
                                <Image src="/images/Rectangln333png.png" className="object-contain" alt="Logo" width="270" height='140' />
                                <div className="flex gap-4 py-2">
                                    <h3 className="text-s font-bold font-alt">Category</h3>
                                    <p className="text-s font-alt text-#777777">November 22, 2021</p>
                                </div>
                                <h2 className="text-xs md:text-s font-sans w-full sm:w-60  flex-grow  flex-wrap  break-words text-wrap">
                                    Pitch termsheet backing validation focus release.
                                </h2>
                                <div className=" flex gap-4 py-2">
                                    <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                    <p className="text-s font-alt text-black">Chandler Bling</p>
                                </div>
                            </div>
                            <div className="w-full max-w-[270px] md:max-w-[350px] lg:max-w-[400px] h-auto">
                                <Image src="/images/Rectangle444.png" className="object-contain" alt="Logo" width="270" height='140' />
                                <div className="flex gap-4 py-2">
                                    <h3 className="text-s font-bold font-alt">Category</h3>
                                    <p className="text-s font-alt text-#777777">November 22, 2021</p>
                                </div>
                                <h2 className="text-xs md:text-s font-sans w-full sm:w-60  flex-grow  flex-wrap  break-words text-wrap">
                                    Pitch termsheet backing validation focus release.
                                </h2>
                                <div className=" flex gap-4 py-2">
                                    <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                    <p className="text-s font-alt text-black">Chandler Bling</p>
                                </div>
                            </div>
                            <div className="w-full max-w-[270px] md:max-w-[350px] lg:max-w-[400px] h-auto">
                                <Image src="/images/Rectangle555.png" className="object-contain" alt="Logo" width="270" height='140' />
                                <div className="flex gap-4 py-2">
                                    <h3 className="text-s font-bold font-alt">Category</h3>
                                    <p className="text-s font-alt text-#777777">November 22, 2021</p>
                                </div>
                                <h2 className="text-xs md:text-s font-sans w-full sm:w-60  flex-grow  flex-wrap  break-words text-wrap">
                                    Pitch termsheet backing validation focus release.
                                </h2>
                                <div className=" flex gap-4 py-2">
                                    <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                    <p className="text-s font-alt text-black">Chandler Bling</p>
                                </div>
                            </div>
                            <div className="w-full max-w-[270px] md:max-w-[350px] lg:max-w-[400px] h-auto">
                                <Image src="/images/Rectangle666.png" className="object-contain" alt="Logo" width="270" height='140' />
                                <div className="flex gap-4 py-2">
                                    <h3 className="text-s font-bold font-alt">Category</h3>
                                    <p className="text-s font-alt text-#777777">November 22, 2021</p>
                                </div>
                                <h2 className="text-xs md:text-s font-sans w-full sm:w-60  flex-grow  flex-wrap  break-words text-wrap">
                                    Pitch termsheet backing validation focus release.
                                </h2>
                                <div className=" flex gap-4 py-2">
                                    <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                    <p className="text-s font-alt text-black">Chandler Bling</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center py-12">
                            <Button label="Load more" variant="danger" className="w-36 h-12 border-spacing-1 border-2 border-black" />   
                        </div>
                    </MaxWidthWrapper>
                </div>
            </main>
        </section>
    )
}


export default Product;