import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Image from "next/image";
import SliderComp from "../components/Slider";
import Button from "../components/ui/Button";
import Service from "./service/page";



const Home = () => {

    return (
    <>
        <section className="flex bg-background justify-end items-start relative object-cover h-[900px]">
            <MaxWidthWrapper>
                <header className="relative py-4">
                    <div className="border-none">
                        <div className="flex items-center justify-between ">
                            <div className="">
                                <Link href='/' className="flex items-center gap-0.5 ">
                                    <span><Image src="/images/LogoShape.png" alt="Logo" width="24" height='24' /></span>
                                    <span className="text-xxl text-white font-bold ">Boldo</span>
                                </Link>

                                {/* TODO: Mobile nav*/}
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
                </header>
                <section className="flex py-6 text-white gap-28">
                    <div className="z-40 flex-1 py-16">
                        <div className="w-[87%]">
                            <span className="text-xxl font-sans flex-wrap ">Save time by building fast with Boldo Template</span>
                            <p className="leading-relaxed py-3">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                        </div>
                        <div className="flex gap-6 py-4">
                            <Button label="Buy template" variant="primary" className="w-52 h-12"/>
                            <Button label="Explore"  variant="secondary" className="w-40 h-12 border-2 border-solid border-white-100"/>
                        </div>
                        
                    </div>
                    <div className="z-40 flex-0">
                        <div className="">
                            <Image src='/images/frame1.png' alt="" width='493' height='232' />
                        </div>
                        <div className="flex pt-6 gap-8 justify-between">
                            <Image src='/images/frame2.png' alt="" width='190' height='165' />
                            <Image src='/images/frame3.png' alt="" width='266' height='165' />
                        </div>
                    </div>
                </section>
                <section className="py-24">
                    <SliderComp></SliderComp>
                </section>
            </MaxWidthWrapper>
            <Image src="/images/Ellipse.png" alt="" width="700" height="600" className=" absolute object-contain"/>
        </section>
        <Service />
      </>
    )
};


export default Home;
