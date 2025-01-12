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
                        <h2 className="text-xxl font-normal">Latest news</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="">
                                <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                <div className="flex gap-4 py-2">
                                    <h3 className="text-s font-bold font-alt">Category</h3>
                                    <p className="text-s font-alt text-#777777">November 22, 2021</p>
                                </div>
                                <h2 className="text-s font-sans">
                                    Pitch termsheet backing validation focus release.
                                </h2>
                                <div className=" flex gap-4 py-2">
                                    <Image src="/images/Ellipse16.png" className="object-contain" alt="Logo" width="24" height='24' />
                                    <p className="text-s font-alt text-black">Chandler Bling</p>
                                </div>
                            </div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                        <div className="flex justify-center items-center py-6">
                            <Button label="Load more" variant="danger" className="w-36 h-12 border-spacing-1 border-2 border-black" />   
                        </div>
                    </MaxWidthWrapper>
                    <MaxWidthWrapper className="max-w-screen-lg px-2 ">
                        <section className="px-16 py-10">
                            <div className="flex flex-col gap-6 px-32">
                                <p className="text-s text-gray-600">Our team</p>
                                <h1 className="text-3xl font-sans leading-10">The leadership team</h1>
                                <p className="text-s text-gray-600 leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
                            </div>
                        </section>
                        <div className="block sm:flex justify-evenly pb-14">
                            <div className=" flex flex-col gap-4">
                                <Image src="/images/Image3.png" className="object-contain" alt="Logo" width="220" height='140' />
                                <h4 className="text-lg">Michael Scott</h4>
                                <p className="text-s text-gray-600">General Manager</p>
                            </div>
                            <div className=" flex flex-col gap-4">
                                <Image src="/images/Image2.png" className="object-contain" alt="Logo" width="220" height='140' />
                                <h4 className="text-lg">Dwight Schrute</h4>
                                <p className="text-s text-gray-600">General Manager</p>
                            </div>
                            <div className=" flex flex-col gap-4 ">
                                <Image src="/images/Image1.png" className="object-contain" alt="Logo" width="220" height='140' />
                                <h4 className="text-lg">Pam Beetsley</h4>
                                <p className="text-s text-gray-600">General Manager</p>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                    <section className="bg-background">
                        <MaxWidthWrapper className="max-w-screen-lg px-16 py-10">
                            <div className="flex flex-col gap-6 px-32">
                                <p className="text-s text-white">Our values</p>
                                <h1 className="text-white text-3xl font-sans leading-10">Things in we believe</h1>
                                <p className=" text-white text-s leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
                            </div>
                            <div className="flex gap-6 px-32 pt-16">
                                <Image src="/images/Imag1.png" className="object-contain" alt="Logo" width="200" height='150' />
                                <div className="flex flex-col gap-4">
                                    <h3 className=" text-white text-lg">We are commited.</h3>
                                    <p className=" text-white text-s leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 px-32 pt-16">
                                <Image src="/images/Imag2.png" className="object-contain" alt="Logo" width="200" height='150' />
                                <div className="flex flex-col gap-4">
                                    <h3 className=" text-white text-lg">We are commited</h3>
                                    <p className=" text-white text-s leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 px-32 py-16">
                                <Image src="/images/Imag3.png" className="object-contain" alt="Logo" width="200" height='150' />
                                <div className="flex flex-col gap-4">
                                    <h3 className=" text-white text-lg">We are commited</h3>
                                    <p className=" text-white text-s leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
                                </div>
                            </div>
                        </MaxWidthWrapper>
                    </section>
                </div>
            </main>
        </section>
    )
}


export default Product;