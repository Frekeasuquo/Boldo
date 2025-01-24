'use client'
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import Button from "@/src/components/ui/Button";
import Number from "@/src/components/ui/countNumber";
import Image from "next/image";
import Link from "next/link";



const About = () => {

    const data = [
        {
            id: 1,
            image: "/images/Imag1.png",
            title: "We are committed.",
            description:
                "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
            },
            {
            id: 2,
            image: "/images/Imag2.png",
            title: "We are committed.",
            description:
                "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
            },
            {
            id: 3,
            image: "/images/Imag3.png",
            title: "We are committed.",
            description:
                "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
            },
        ];

    return (
        <section className="bg-page">
            <div className="bg-background h-full w-full">
                <MaxWidthWrapper>
                    <div className="flex flex-col items-center text-white gap-4 p-5">
                        <h4 className="text-lg">About</h4>
                        <h2 className="text-xl lg:text-xxl font-sans font-normal size-full lg:size-1/2 text-center leading-normal">We love to make great things, things that matter.</h2>
                        <p className="text-xs font-sans font-normal size-full lg:size-2/4 text-center pt-8 pb-12">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                    </div>
                </MaxWidthWrapper>
            </div> 
            <main className="mt-[-8rem]">
                <div className="pt-12">
                    {/*continue*/}
                    <MaxWidthWrapper className="max-w-screen-lg px-4 lg:px-2 ">
                        <ul className="grid-image px-4 pb-12">
                            {/* Left Image */}
                            <li style={{ gridArea: "img1" }}>
                                <Image
                                    src="/images/Rectangle1111.png"
                                    className="object-contain "
                                    alt="Logo"
                                    width={300}
                                    height={285}
                                />
                            </li>

                            {/* Right Image */}
                            <li style={{ gridArea: "img2" }}>
                                <Image
                                    src="/images/Rectangle114.png"
                                    className="object-contain"
                                    alt="Logo"
                                    width={302}
                                    height={305}
                                />
                            </li>

                            {/* Bottom Left Image */}
                            <li style={{ gridArea: "img3" }}>
                                <Image
                                    src="/images/Rectangle112.png"
                                    className="object-contain"
                                    alt="Logo"
                                    width={300}
                                    height={302}
                                />
                            </li>

                            {/* Bottom Right Image */}
                            <li style={{ gridArea: "img4" }}>
                                <Image
                                    src="/images/Rectangle115.png"
                                    className="object-contain 	transition-timing-function: linear"
                                    alt="Logo"
                                    width={302}
                                    height={287}
                                />
                            </li>

                            {/* Center Large Image */}
                            <li style={{ gridArea: "imgM" }}>
                                <Image
                                    src="/images/Rectangle113.png"
                                    className="object-contain"
                                    alt="Logo"
                                    width={400}
                                    height={632}
                                />
                            </li>
                        </ul>
                        <section className=" px-2 md:px-8 py-6 lg:py-10 ">
                            <div className="flex flex-col gap-6 px-2 lg:px-32">
                                <p className="text-s text-gray-600">Our story</p>
                                <h1 className="text-3xl font-sans leading-10">Handshake infographic mass market crowdfunding iteration.</h1>
                                <p className="text-s text-gray-600 leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer.</p>
                            </div>
                        </section>
                    </MaxWidthWrapper>
                    <section className="px-8 md:px-16 py-10 bg-background">
                        <MaxWidthWrapper>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3 className="text-white text-s sm:text-lg py-10">Our numbers</h3>
                                <h1 className="text-lg md:text-xl font-sans leading-10 text-white w-full md:w-1/2 pb-8">Handshake infographic mass market crowdfunding iteration.</h1>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                                <div className="flex flex-col items-center">
                                    <span className="text-buttonColor text-xxl">
                                        <Number n={120} format={(value) => `${value.toFixed(0)}m`} />
                                    </span>
                                    <h2 className="text-white text-xs sm:text-s">Cool feature title</h2>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-buttonColor text-xxl">
                                        <Number n={10000} />
                                    </span>
                                    <h2 className="text-white text-xs sm:text-s">Cool feature title</h2>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-buttonColor text-xxl">
                                        <Number n={240} />
                                    </span>
                                    <h2 className="text-white text-xs sm:text-s">Cool feature title</h2>
                                </div>
                            </div>
                        </MaxWidthWrapper>
                    </section>
                    <MaxWidthWrapper className="max-w-screen-lg px-2 ">
                        <section className="px-3 md:px-12 lg:px-16 py-10">
                            <div className="flex flex-col gap-6 px-3 md:px-16 lg:px-20">
                                <p className="text-s text-gray-600">Our team</p>
                                <h1 className="text-3xl font-sans leading-10">The leadership team</h1>
                                <p className="text-xs sm:text-s text-gray-600 leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
                            </div>
                        </section>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-16 px-10 sm:px-6 md:px-14 gap-6 sm:gap-8">
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
                    <section className="bg-background ">
                        <MaxWidthWrapper className="max-w-screen-lg px-auto md:px-32 pt-16">
                            <div className="flex flex-col gap-6 ">
                                <p className="text-s text-white">Our values</p>
                                <h1 className="text-white text-3xl font-sans leading-10">Things in we believe</h1>
                                <p className=" text-white text-s leading-7">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-10 py-12">
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-10 sm:flex-row sm:items-center"
                                    >
                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="object-contain"
                                        width={200}
                                        height={150}
                                    />
                                    {/* Text Content */}
                                    <div className="flex flex-col gap-2  sm:items-start">
                                        <h3 className="text-white text-s sm:text-lg">{item.title}</h3>
                                        <p className="text-white text-xs sm:text-s leading-7">{item.description}</p>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </MaxWidthWrapper>
                    </section>
                </div>
            </main>
        </section>
    )
}


export default About;

