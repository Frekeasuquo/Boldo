import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import Arrow from "@/src/components/ui/arrow";
import Button from "@/src/components/ui/Button";
import CarouselComment from "@/src/components/Carousel";


const Service = () => {
    return (
        <section className="bg-page relative h-full items-center py-6">
            <MaxWidthWrapper className="max-w-screen-lg px-2 md:20px p-6 w-full">
                <section className="py-11 text-center">
                    <h6 className="text-s text-gray-500 font-semibold font-alt py-4">Our Services</h6>
                    <p className="text-xxl text-center">Handshake infographic mass market crowdfunding iteration.</p>
                </section>
                <section className="flex flex-row py-10 justify-between items-center w-full gap-36">
                    <div className="basis-1/3">
                        <Image src='/images/rectangle1.png' alt="" width='250' height='310' className="pb-6"/>
                        <h3 className="text-s font-semibold">Cool feature title</h3>
                        <p className="text-xs font-semibold text-gray-500 py-2 flex-grow w-[200px] break-words text-wrap truncate">Learing curve network effects return on investment.</p>
                        <span className="flex gap-4">
                            <Link href='/' className="font-bold">Explore page </Link>
                            <Arrow />
                        </span>
                        <div className=" py-5 ">
                            <div className="flex-grow border-t border-black w-36"/>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <Image src='/images/rectangle2.png' alt="" width='250' height='310' className="pb-6"/>
                        <h3 className="text-s font-semibold">Even cooler feature</h3>
                        <p className="text-xs font-semibold text-gray-500 py-2 flex-grow w-[200px]  break-words text-wrap truncate">Learing curve network effects return on investment</p>
                        <span className="flex gap-4">
                            <Link href='/' className="font-bold">Explore page </Link>
                            <Arrow />
                        </span>
                        <div className=" py-5 ">
                            <div className="flex-grow border-t border-black w-36"/>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <Image src='/images/rectangle3.png' alt="" width='250' height='310' className="pb-6"/>
                        <h3 className="text-s font-semibold">Cool feature title</h3>
                        <p className="text-xs font-semibold text-gray-500 py-2 flex-grow w-[200px]  break-words text-wrap truncate">Learing curve network effects return on investment</p>
                        <span className="flex gap-4">
                            <Link href='/' className="font-bold">Explore page </Link>
                            <Arrow />
                        </span>
                        <div className=" py-5 ">
                            <div className="flex-grow border-t border-black w-36"/>
                        </div>
                    </div>
                </section>
                <section className="flex flex-row justify-between items-center pt-14 gap-28">
                    <div className="relative basis-1/2">
                        <Image src="/images/rectangle4.png" alt="" width='370' height='500' className="relative"/>
                        <Image src="/images/rect5.png" alt="" width='210' height='230'className="absolute top-[160px] left-32"/>
                    </div>
                    <div className="basis-2/3 pt-24">
                        <h1 className="text-xl">We connect our customers with the best, and help them keep up-and stay open.</h1>
                        <div className="flex flex-col gap-4 pt-6 pb-10">
                            <div className="flex gap-3">
                                <Image src="/images/Group.png" alt="" width='25' height='10'/>
                                <p className="text-s">We connect our customers with the best.</p>
                            </div>
                            <div className="flex gap-3">
                                <Image src="/images/Group.png" alt="" width='25' height='10'/>
                                <p className="text-s">Advisor success customer launch party.</p>
                            </div>
                            <div className="flex gap-3">
                                <Image src="/images/Group.png" alt="" width='25' height='10'/>
                                <p className="text-s">Business-to-consumer long tail.</p>
                            </div>
                        </div>
                        
                        <Button label="Start now" variant="success" className="w-36 h-10" />
                    </div>
                </section>
                <section className="flex flex-row justify-between items-center pt-14 gap-28">
                    <div className="basis-2/3 pt-24">
                        <h1 className="text-xl">We connect our customers with the best, and help them keep up-and stay open.</h1>
                        <div className="flex flex-col gap-4 pt-6 pb-10">
                            <div className="flex gap-3 bg-background text-white p-3 rounded-md">
                                <Image src="/images/star.png" alt="" width='25' height='10'/>
                                <p className="text-s">We connect our customers with the best.</p>
                            </div>
                            <div className="flex gap-3 bg-white text-black p-3 rounded-md">
                                <Image src="/images/star1.png" alt="" width='25' height='10'/>
                                <p className="text-s">Advisor success customer launch party.</p>
                            </div>
                            <div className="flex gap-3  bg-white text-black p-3 rounded-md">
                                <Image src="/images/sun.png" alt="" width='25' height='10'/>
                                <p className="text-s">Business-to-consumer long tail.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative basis-1/2">
                        <Image src="/images/rectangle111.png" alt="" width='260' height='320' className="relative"/>
                        <Image src="/images/group1.png" alt="" width='190' height='230'className="absolute top-[155px] left-5"/>
                    </div>
                </section>
                
            </MaxWidthWrapper>
            <section className="flex bg-background justify-end items-start relative object-cover h-[700px]">
                <MaxWidthWrapper className="max-w-screen-lg px-2 md:20px p-6 w-full">
                    <section className="">
                        <CarouselComment />
                    </section>
                </MaxWidthWrapper>
            </section>
            <section className="bg-page relative h-fit items-center py-6">
                <MaxWidthWrapper className="max-w-screen-lg px-2 md:20px p-6 w-full">
                    <div className="pt-8">
                        <Image src="/images/rec8.png" alt="" width='1024' height='520' className="object-contain"/>
                    </div>
                    <div className="flex pt-10 pb-10 justify-between">
                        <div className="basis-1/2">
                            <h1 className="text-xl font-sans">We connect our customers with the best, and help them keep up-and stay open. </h1>
                        </div>
                        <div className="flex flex-col gap-3 basis-2/5">
                            <div className="flex justify-between">
                                <p className="text-s">We connect our customers with the best?.</p>
                                <Image src="/images/Grou12.png" alt="" width='25' height='10'/>
                            </div>
                            <div className=" py-1 ">
                                <div className="flex-grow border-t border-line w-full"/>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-s">Android research & development rockstar?.</p>
                                <Image src="/images/Grou12.png" alt="" width='25' height='10'/>
                            </div>
                            <div className=" py-1 ">
                                <div className="flex-grow border-t border-line w-full"/>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <MaxWidthWrapper className="max-w-screen-lg px-2 md:20px p-6 w-full">
                <section className="py-6">
                    <div className="text-center">
                        <p className="text-s text-gray">Our Blog</p>
                        <h1 className="text-xxl text-black">Value proposition accelerator product management venture</h1>
                    </div>
                    
                    <div className="flex py-10 gap-6 justify-between">
                        <div className="w-[250px]">
                            <Image src='/images/rectangle9.png' alt="" width='250' height='310' className="pb-6"/>
                            <span className="flex gap-4 ">
                                <p className="font-semibold text-s">Category</p>
                                <p className="text-gray text-xs">November 22 2021</p>
                            </span>
                            <p className="py-3 text-s leading-7 text-black flex-grow flex-wrap  break-words text-wrap truncate">Pitch termsheet backing validation focus release. </p>
                            <div className="flex gap-4 items-center">
                                <Image src='/images/Ellipse103.png' alt="" width='20' height='30' className=""/>
                                <p className="text-black text-xs">Chandler Bing</p>
                            </div>
                        </div>
                        <div className="w-[250px]">
                            <Image src='/images/rectangle10.png' alt="" width='250' height='310' className="pb-6"/>
                            <span className="flex gap-4 ">
                                <p className="font-semibold text-s">Category</p>
                                <p className="text-gray text-xs">November 22 2021</p>
                            </span>
                            <p className="py-3 text-s leading-7 text-black flex-grow  flex-wrap  break-words text-wrap truncate">Seed round direct mailing non-disclosure agreemnet graphical user interface rockstar. </p>
                            <div className="flex gap-4 items-center">
                                <Image src='/images/Ellipse102.png' alt="" width='20' height='30' className=""/>
                                <p className="text-black text-xs">Rachel Green</p>
                            </div>
                        </div>
                        <div className="w-[250px]">
                            <Image src='/images/rectangle11.png' alt="" width='250' height='310' className="pb-6"/>
                            <span className="flex gap-4 ">
                                <p className="font-semibold text-s">Category</p>
                                <p className="text-gray text-xs">November 22 2021</p>
                            </span>
                            <p className="py-3 text-s leading-7 text-black flex-grow flex-wrap  break-words text-wrap truncate">Beta prototype sales ipad gen-z marketing network effects value proposition. </p>
                            <div className="flex gap-4 items-center">
                                <Image src='/images/Ellipse101.png' alt="" width='20' height='30' className=""/>
                                <p className="text-black text-xs">Monica Geller</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-6">
                        <Button label="Load more" variant="page" className="w-36 h-10 border-spacing-1 border-2 border-black" />   
                    </div>
                    
                </section>
            </MaxWidthWrapper>
        </section>

    )
}


export default Service;