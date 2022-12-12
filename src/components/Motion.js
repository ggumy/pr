import React, { useLayoutEffect, useRef } from "react";
import { gsap, Power0 } from "gsap";

import "./motion.css";

export const PageChangeMotion = () => {
    const pageChangeMotionRef = useRef(null);
    const t1 = gsap.timeline();
    useLayoutEffect(() => {
        const first = pageChangeMotionRef.current.querySelector(".first");
        const second = pageChangeMotionRef.current.querySelector(".second");
        const third = pageChangeMotionRef.current.querySelector(".third");

        t1.to(first, {
            top: "-100%",
            duration: 0.3,
            delay: 0.1,
            ease: Power0.easeInOut,
        })
            .to(second, {
                top: "-100%",
                duration: 0.3,
                delay: 0.1,
                ease: Power0.easeInOut,
            })
            .to(third, {
                top: "-100%",
                duration: 0.3,
                delay: 0.1,
                ease: Power0.easeInOut,
            });
    });
    return (
        <div ref={pageChangeMotionRef}>
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>
        </div>
    );
};
