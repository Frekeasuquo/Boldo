import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import Arrow from "@/src/components/ui/arrow";
import Button from "@/src/components/ui/Button";
import CarouselComment from "@/src/components/Carousel";


const Service = () => {
    return (
        <section className="bg-page relative h-full items-center py-6 ">
            <MaxWidthWrapper className="max-w-screen-lg px-4 md:px-6 p-6 w-full">
                {/* Header Section */}
                <section className="py-8 text-center">
                    <h6 className="text-s text-gray-500 font-semibold font-alt py-2 lg:py-4">Our Services</h6>
                    <p className="text-lg md:text-xl lg:text-xxl text-center">Handshake infographic mass market crowdfunding iteration.</p>
                </section>
                {/* Services Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 py-10 w-full">
                    {[
                        { src: '/images/rectangle1.png', title: 'Cool feature title', description: 'Learning curve network effects return on investment.' },
                        { src: '/images/rectangle2.png', title: 'Even cooler feature', description: 'Learning curve network effects return on investment.' },
                        { src: '/images/rectangle3.png', title: 'Cool feature title', description: 'Learning curve network effects return on investment.' },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={250}
                                height={310}
                                className="pb-6 w-full object-contain" // Make the image responsive
                            />
                            <h3 className="text-base font-semibold">{item.title}</h3>
                            <p className="text-xs font-semibold text-gray-500 py-2 flex-grow w-[200px] break-words text-wrap truncate">
                                {item.description}
                            </p>
                            <span className="flex gap-4">
                                <Link href="/" className="font-bold text-black">
                                    Explore page
                                </Link>
                                <Arrow />
                            </span>
                            <div className="py-5">
                                <div className="border-t border-black w-36" />
                            </div>
                        </div>
                    ))}
                </section>
                {/* Pic section*/}    
                <section className="flex flex-col lg:flex-row justify-between items-center pt-14 gap-10 lg:gap-28">
                    <div className="relative w-full lg:basis-1/2">
                        <Image src="/images/Group034.png" alt="" width='370' height='500' className="relative w-full max-w-full h-auto object-contain"/>
                    </div>
                    <div className="lg:basis-2/3 pt-2 lg:pt-0 lg:text-left">
                        <h1 className="text-lg lg:text-xl ">We connect our customers with the best, and help them keep up-and stay open.</h1>
                        <div className="flex flex-col gap-4 pt-6 pb-10">
                            {[
                                "We connect our customers with the best.",
                                "Advisor success customer launch party.",
                                "Business-to-consumer long tail.",
                            ].map((text, index) => (
                                <div key={index} className="flex gap-2 md:gap-3 items-start  md:items-center ">
                                    <Image src="/images/Group.png" alt="" width="16" height="10" className="md:w-25" />
                                    <p className="text-xs md:text-s">{text}</p>
                                </div>
                            ))}
                        </div>
                        <Button label="Start now" variant="success" className="w-full lg:w-36 h-10 mx-auto lg:mx-0" />
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row-reverse justify-between items-center pt-28 gap-10 lg:gap-28">
                    <div className="relative lg:basis-1/2 w-full">
                        <Image src="/images/Group012.png" alt="" width='240' height='320' className="relative w-full mx-auto object-contain "/>
                    </div>
                    <div className="lg:basis-2/3 pt-8 lg:pt-4">
                        <h1 className="text-lg sm:text-xl">We connect our customers with the best, and help them keep up-and stay open.</h1>
                        <div className="flex flex-col gap-4 pt-6 pb-10">
                            {[
                                { icon: "star.png", text: "We connect our customers with the best." },
                                { icon: "star1.png", text: "Advisor success customer launch party." },
                                { icon: "sun.png", text: "Business-to-consumer long tail." },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-3 items-center p-3 rounded-md ${
                                        index === 0 ? "bg-background text-white" : "bg-white text-black"
                                    }`}
                                >
                                <Image src={`/images/${item.icon}`} alt="" width="25" height="10" />
                                    <p className="text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </MaxWidthWrapper>
            {/* Carousel */} 
            <section className="flex bg-background justify-end items-start relative object-cover ">
                <MaxWidthWrapper className="max-w-screen-lg px-6 p-6 w-full h-full">
                    <CarouselComment />
                </MaxWidthWrapper>
            </section>
            {/* Workspace */} 
            <section className="bg-page py-6">
                <MaxWidthWrapper className="max-w-screen-lg px-6 w-full">
                    <div className="pt-8">
                        <Image
                            src="/images/rec8.png"
                            alt=""
                            width="1024"
                            height="520"
                            className="object-contain w-full max-w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-10 pt-8 lg:pt-10 lg:pb-10">
                        <div className="lg:basis-1/2">
                            <h1 className="text-lg lg:text-xl font-sans">
                            We connect our customers with the best, and help them keep up—and stay open.
                            </h1>
                        </div>
                        <div className="flex flex-col gap-3 pt-10 ">
                            {[
                                "We connect our customers with the best?",
                                "Android research & development rockstar?",
                            ].map((text, index) => (
                                <>
                                    <div key={index} className="flex justify-between gap-2 sm:gap-4 items-center">
                                        <p className="text-sm sm:text-lg">{text}</p>
                                        <Image src="/images/Grou12.png" alt="" width="25" height="10" />
                                    </div>
                                    <div className="flex-grow border-t border-line w-full py-2"/>
                                </>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            {/*Our blog*/}
            <section className="py-6">
                <MaxWidthWrapper className="max-w-screen-lg p-6">
                    <div className="text-center">
                        <p className="text-s text-gray">Our Blog</p>
                        <h1 className="text-lg md:text-xl lg:text-xxl text-black">Value proposition accelerator product management venture</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 py-12 lg:py-10 w-full">
                        {[
                            {
                                image: "rectangle9.png",
                                category: "Category",
                                date: "November 22 2021",
                                title: "Pitch termsheet backing validation focus release.",
                                author: "Chandler Bing",
                                authorImage: "Ellipse103.png",
                            },
                            {
                                image: "rectangle10.png",
                                category: "Category",
                                date: "November 22 2021",
                                title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
                                author: "Rachel Green",
                                authorImage: "Ellipse102.png",
                            },
                            {
                                image: "rectangle11.png",
                                category: "Category",
                                date: "November 22 2021",
                                title: "Beta prototype sales ipad gen-z marketing network effects value proposition.",
                                author: "Monica Geller",
                                authorImage: "Ellipse101.png",
                            },
                        ].map((blog, index) => (
                            <div key={index} className="w-full pb-4">
                                <Image
                                    src={`/images/${blog.image}`}
                                    alt=""
                                    width="250"
                                    height="310"
                                    className="pb-6 w-full object-contain"
                                />
                                <span className="flex gap-4 items-center ">
                                    <p className="font-semibold text-s">{blog.category}</p>
                                    <p className="text-gray text-xs">{blog.date}</p>
                                </span>
                                <p className="py-3 text-s leading-7 text-black truncate flex-wrap  break-words text-wrap">{blog.title}</p>
                                <div className="flex py-4 gap-4 items-end">
                                    <Image
                                        src={`/images/${blog.authorImage}`}
                                        alt=""
                                        width="20"
                                        height="30"
                                    />
                                    <p className="text-black text-xs">{blog.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center pb-3">
                        <Button label="Load more" variant="page" className="w-36 h-10 border-spacing-1 border-2 border-black" />   
                    </div>
            </MaxWidthWrapper>
            </section>
        </section>

    )
}


export default Service;