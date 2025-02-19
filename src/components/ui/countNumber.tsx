"use client"; // Mark this as a Client Component

import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

interface NumberProps {
    n: number;
    format?: (value: number) => string; // Optional formatting function
}

const Number: React.FC<NumberProps> = ({ n, format }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Intersection Observer to detect when the number is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true);
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
        };
    }, []);

  // React Spring animation
    const { number } = useSpring({
        from: { number: 0 },
        number: visible ? n : 0,
        delay: 200,
        config: { mass: 1, tension: 80, friction: 20 },
    });

    // Default formatting function
    const defaultFormat = (value: number) => {
        if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(1)}m`; // Format as millions
        } else if (value >= 1_000) {
        return value
            .toLocaleString("en-US") // Format the number
            .replace(/,/g, "."); // Replace commas with dots
        } else {
        return value.toFixed(0).replace(/,/g, "."); // Replace comma in decimal part if any
        }
    };

    return (
        <div ref={ref}>
            {/* @ts-expect-error*/}
        <animated.div>
            {number.to((value) => (format ? format(value) : defaultFormat(value)))}
        </animated.div>
        </div>
    );
};

export default Number;

