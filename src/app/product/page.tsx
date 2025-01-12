'use client'
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import Button from "@/src/components/ui/Button";
import Number from "@/src/components/ui/countNumber";
import Image from "next/image";


const Product = () => {

    
    return (
        <section className="bg-white">
            <div className=" text-black ">
                <MaxWidthWrapper>
                    <div className="flex flex-col items-center text-black gap-4 p-5">
                        <h4 className="text-lg">Blog</h4>
                        <h2 className="text-yl font-sans font-normal size-1/2 text-center leading-normal">Thought and words</h2>
                    </div>
                    <div className="flex justify-between pt-16 gap-10">
                        <Image src="/images/Rectangle16.png" className="object-contain w-1/2" alt="Logo" width="500" height='140' />
                        <div className="flex flex-col justify-center p-4 w-1/2">
                            <div className="flex gap-4 py-2">
                                <h3 className="text-s font-bold font-alt">Category</h3>
                                <p className="text-s font-alt text-#777777">November 22, 2021</p>
                            </div>
                            <h2 className="text-xxl font-sans">
                                Pitch termsheet backing validation focus release.
                            </h2>
                            <div className=" flex gap-4 py-2">
                                <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                <p className="text-s font-alt text-black">Chandler Bling</p>
                            </div>
                        </div>
                    </div>
                    <div className=" py-20 ">
                        <div className="flex-grow border-t border-black w-full"/>
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