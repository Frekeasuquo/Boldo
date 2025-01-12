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
        setCurrentIndex((prevIndex) => (prevIndex + 3) % comments.length);
        setExpandedComment(null);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        (prevIndex - 3 + comments.length) % comments.length);
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
        <div className='relative'>
            <div className='flex '>
                <h1 className="text-white py-10 font-normal text-xxl text-wrap basis-3/4">An enterprise template to ramp up your company website</h1>
                <div className="flex space-x-4 basis-1/4 items-end justify-end py-6">
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
            <div className="relative max-w-xxl mx-auto  p-6 rounded-lg shadow-md">
                
                <div className="flex space-x-4 justify-center">
                    {visibleComments.map((comment) => (
                    <div
                        key={comment.id}
                        className="flex-shrink-0 w-1/3 h-fit border rounded-lg p-4 bg-page shadow-sm "
                    >
                            <p 
                                className="text-black text-lg mb-4 p-6 break-words text-wrap cursor-pointer leading-7" 
                                onClick={() => toggleExpandComment(comment.id)}
                                onMouseEnter={() => setExpandedComment(comment.id)}
                                onMouseLeave={() => setExpandedComment(null)}
                            >
                                {expandedComment === comment.id
                                ? `"${comment.text}"`
                                : `"${comment.text.slice(0, 101)}"`}
                            </p>
                            <div className="flex items-center gap-6">
                                <img
                                    src={comment.image}
                                    alt={comment.name}
                                    className="w-16 h-16 rounded-full border object-contain"
                                />
                                <div className=" flex flex-col break-words text-wrap truncate">
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
            </div>
        </div>
    );
};

export default CommentCarousel;
