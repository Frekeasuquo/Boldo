import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Image from "next/image";
import SliderComp from "../components/Slider";
import Button from "../components/ui/Button";
import Service from "./service/page";
import { get } from "@/server/user";


const Home: React.FC = async ()=> {

    const data = await get();

    return (
        <>
            {/* <div className="">
                {data.map((user) => (
                    <h1 key={user.id}>{user.email}</h1>
                ))}
                </div> */}
            <section className="flex bg-background justify-end items-start object-cover h-full ">
                <MaxWidthWrapper>
                    {/* Main Content Section */}
                    <section className="flex flex-col md:flex-row py-6 text-white gap-6 lg:gap-28 justify-between items-center w-full">
                        {/* Left Text Section */}
                        <div className="z-40 flex-1 pt-16 text-center md:text-left">
                            <div className="w-full md:w-[87%] mx-auto md:mx-0">
                                <span className="text-xl font-sans flex-wrap md:text-xl lg:text-xxl ">Save time by building fast with Boldo Template</span>
                                <p className="leading-relaxed py-3 text-xs md:text-s">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                                
                            </div>
                            {/* Buttons */}
                            <div className="flex flex-col md:flex-row gap-4 py-4 justify-center md:justify-start ">
                                <Button label="Buy template" variant="primary" className="w-full md:w-52 h-12 "/>
                                <Button label="Explore"  variant="secondary" className="w-full md:w-40 h-12 border-2 border-solid border-white-100"/>
                            </div>
                            
                        </div>
                        {/* Right Image Section */}
                        <div className="z-40 ">
                            <Image src='/images/hero.png' alt="" width='400' height='232' className=" h-auto  md:w-[460px] lg:w-[494px] object-contain"/>
                        </div>
                    </section>
                    {/*Logo Slider*/}
                    <section className="py-12 md:py-12 lg:py-20">
                        <SliderComp></SliderComp>
                    </section>
                </MaxWidthWrapper>
                <Image src="/images/Ellipse.png" alt="" width="300" height="400" className="absolute top-0 object-contain w-[180px] sm:w-[400px] md:w-[550px] lg:w-[700px]"/>
            </section>
            <Service />
        </>
    )
};


export default Home;
