'use client'
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import Button from "@/src/components/ui/Button";
import Number from "@/src/components/ui/countNumber";
import Image from "next/image";
import Link from "next/link";



const About = () => {

    return (
        <section className="bg-page">
            <div className="bg-background h-[550px]">
                <MaxWidthWrapper>
                    <div className="flex flex-col items-center text-white gap-4 p-5">
                        <h4 className="text-lg">About</h4>
                        <h2 className="text-5xl font-sans font-normal size-1/2 text-center leading-normal">We love to make great things, things that matter.</h2>
                        <p className="text-xs font-sans font-normal size-2/4 text-center pt-9">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                    </div>
                </MaxWidthWrapper>
            </div> 
            <main className="pic">
                <div className="py-6">
                    <MaxWidthWrapper className="max-w-screen-lg px-2 ">
                        <section className="flex justify-evenly pb-16">
                            <div className="flex flex-col gap-6">
                                <Image src="/images/Rectangle1111.png" className="object-contain" alt="Logo" width="220" height='140' />
                                <Image src="/images/Rectangle112.png" className="object-contain" alt="Logo" width="220" height='140' />
                            </div>
                            <div className="">
                                <Image src="/images/Rectangle113.png" className="object-contain" alt="Logo" width="290" height='240' />
                            </div>
                            <div className=" flex flex-col gap-6">
                                <Image src="/images/Rectangle114.png" className="object-contain" alt="Logo" width="220" height='140' />
                                <Image src="/images/Rectangle115.png" className="object-contain" alt="Logo" width="220" height='140' />
                            </div>
                        </section>
                        <section className="px-16 py-10">
                            <div className="flex flex-col gap-6 px-32">
                                <p className="text-s text-gray-600">Our story</p>
                                <h1 className="text-3xl font-sans leading-10">Handshake infographic mass market crowdfunding iteration.</h1>
                                <p className="text-s text-gray-600 leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer.</p>
                            </div>
                        </section>
                    </MaxWidthWrapper>
                    <section className="px-16 py-10 bg-background">
                        <MaxWidthWrapper>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3 className="text-white text-s py-10">Our numbers</h3>
                                <h1 className="text-xl font-sans leading-10 text-white w-1/2">Handshake infographic mass market crowdfunding iteration.</h1>
                            </div>
                            <div className="flex justify-around p-6">
                                <div className="text-white items-center">
                                    <div className="text-buttonColor text-xxl">
                                        <Number n={120} format={(value) => `${value.toFixed(0)}m`} />
                                    </div>
                                    <h2>Cool feature title</h2>
                                </div>
                                <div className="text-white ">
                                    <div className="text-buttonColor text-xxl">
                                        <Number n={10000} />
                                    </div>
                                    <h2>Cool feature title</h2>
                                </div>
                                <div className="text-white ">
                                    <div className="text-buttonColor text-xxl">
                                        <Number n={240} />
                                    </div>
                                    <h2>Cool feature title</h2>
                                </div>
                            </div>
                        </MaxWidthWrapper>
                    </section>
                    <MaxWidthWrapper className="max-w-screen-lg px-2 ">
                        <section className="px-16 py-10">
                            <div className="flex flex-col gap-6 px-32">
                                <p className="text-s text-gray-600">Our team</p>
                                <h1 className="text-3xl font-sans leading-10">The leadership team</h1>
                                <p className="text-s text-gray-600 leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
                            </div>
                        </section>
                        <div className="block sm:flex justify-evenly pb-16">
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
                        <MaxWidthWrapper className="max-w-screen-lg px-16 pt-16">
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


export default About;










{/* <header className="py-8">
<div className="border-none">
    <div className="flex items-center justify-between ">
        <div className="">
            <Link href='/' className="flex items-center gap-0.5 ">
                <span><Image src="/images/LogoShape.png" alt="Logo" width="24" height='24' /></span>
                <span className="text-xxl text-white font-bold ">Boldo</span>
            </Link>

            TODO: Mobile nav*
        </div>

        <div className="flex gap-6 z-30 items-center">
            <div className=" flex gap-6 text-s text-white font-semibold">
                <Link href="/product">Product</Link>
                <Link href="/service">Services</Link>
                <Link href="/about">About</Link>
            </div>
            <div className="text-white font-semibold">
                <Button label="Log In" variant="danger" className="w-32 h-10" />
            </div>
        </div>
    </div>
</div>
</header> */}