"use client"
import React, { useState } from 'react';
import ArrowLeft from './ui/ArrowLeft';
import Arrow from './ui/arrow';

interface Comment {
    id: number;
    text: string;
    name: string;
    image: string;
    email: string;
}


const comments: Comment[] = [
    {
        id: 1,
        text: "Buyer buzz partner network disruptive non-disclosure agreement business.",
        name: "Albus Dumbledore",
        image: "images/Ellipse1.png",
        email: "Manager @ Howarts"
    },
    {
        id: 2,
        text: "Learning curve infrastructure value proposition advisor strategy user experience hypothesis investor.",
        name: "Severus Snape",
        image: "images/Ellipse2.png",
        email: "Manager @ Howarts"
    },
    {
        id: 3,
        text: "Release facebook responsive web design business model canvas seed money monetization.",
        name: "Harry Potter",
        image: "images/Ellipse3.png",
        email: "Team leader @ Arsenal"
    },
    {
        id: 4,
        text: "Fantastic quality and speedy delivery. Couldn't ask for more!",
        name: "Bob Brown",
        image: "images/Ellipse1.png",
        email: "Product manager @ Arsenal"
    },
    {
        id: 5,
        text: "The product exceeded my expectations in every way.",
        name: "Emily Davis",
        image: "images/Ellipse2.png",
        email: "Marketing @ Arsenal"
    },
    {
        id: 6,
        text: "Absolutely love it! Will be back for more.",
        name: "Chris Wilson",
        image: "images/Ellipse3.png",
        email: "Product manager @ Arsenal"
    },
];


const CommentCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedComment, setExpandedComment] = useState<number | null>(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
        setExpandedComment(null);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + comments.length) % comments.length
        );
        setExpandedComment(null);
    };

    const toggleExpandComment = (id: number) => {
        setExpandedComment((prevId) => (prevId === id ? null : id));
    };

    const visibleComments = [
        comments[currentIndex],
        comments[(currentIndex + 1) % comments.length],
        comments[(currentIndex + 2) % comments.length],
    ];

    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
                <h1 className="text-white py-8 font-normal lg:text-xxl sm:text-xl text-lg col-span-3">
                    An enterprise template to ramp up your company website
                </h1>
                <div className="flex space-x-4 justify-end">
                    <button
                        onClick={handlePrev}
                        className="bg-page hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow-md"
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-page hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow-md"
                    >
                        <Arrow />
                    </button>
                </div>
            </div>

            {/* Cards Section */}
            <div className="relative">
                {/* Small screen horizontal scroll */}
                <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory space-x-4 py-14">
                    {comments.map((comment, index) => (
                        <div
                            key={comment.id}
                            className={`flex-shrink-0 w-full snap-center border rounded-lg p-4 bg-page shadow-sm transition-transform duration-300 ${
                                index === currentIndex ? "block" : "hidden"
                            }`}
                        >
                            <p
                                className="text-black text-s lg:text-lg mb-4 py-4 text-wrap break-words cursor-pointer leading-6"
                                onClick={() => toggleExpandComment(comment.id)}
                                onMouseEnter={() => setExpandedComment(comment.id)}
                                onMouseLeave={() => setExpandedComment(null)}
                            >
                                {expandedComment === comment.id
                                    ? `"${comment.text}"`
                                    : `"${comment.text.slice(0, 101)}"`}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={comment.image}
                                    alt={comment.name}
                                    className="w-12 h-12 rounded-full border object-contain"
                                />
                                <div className="flex flex-col truncate">
                                    <p className="text-background font-semibold text-s">
                                        {comment.name}
                                    </p>
                                    <p className="text-background text-xs">
                                        {comment.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid layout for medium to large screens */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8 max-w-screen-xl mx-auto">
                    {visibleComments.map((comment) => (
                        <div
                            key={comment.id}
                            className="border rounded-lg py-6 p-4 flex flex-col justify-between bg-page shadow-sm h-fit"
                        >
                            <p
                                className="text-black text-s lg:text-lg mb-4 p-4 break-words cursor-pointer leading-6"
                                onClick={() => toggleExpandComment(comment.id)}
                                onMouseEnter={() => setExpandedComment(comment.id)}
                                onMouseLeave={() => setExpandedComment(null)}
                            >
                                {expandedComment === comment.id
                                    ? `"${comment.text}"`
                                    : `"${comment.text.slice(0, 101)}"`}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={comment.image}
                                    alt={comment.name}
                                    className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border object-contain"
                                />
                                <div className="flex flex-col truncate">
                                    <p className="text-background font-semibold text-sm sm:text-base">
                                        {comment.name}
                                    </p>
                                    <p className="text-background text-xs sm:text-sm text-wrap">
                                        {comment.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default CommentCarousel;
