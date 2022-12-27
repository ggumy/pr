import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap, Power0 } from "gsap";

import "./motion.css";

const PageChangeMotion = () => {
    const location = useLocation();
    const [isChange, setIsChange] = useState(false);
    const [route, setRoute] = useState({
        to: location.pathname,
        from: location.pathname, //--> previous pathname
    });
    const { from } = route;
    useEffect(() => {
        // 이전 경로 저장 실질적으로 이 부분은 필요없음 document.body <-- body를 최상위로 올리면 됨.
        setRoute((prev) => ({ to: location.pathname, from: prev.to }));
        if (from !== location.pathname) {
            setIsChange(false);
        } else {
            setIsChange(true);
        }
    }, [location, from, isChange]);

    console.log(from + " | " + location.pathname);
    console.log("isChange", isChange);
    return isChange ? <PageMotion /> : "";
};

export const PageMotion = () => {
    const pageChangeMotionRef = useRef(null);
    const t1 = gsap.timeline();
    useLayoutEffect(() => {
        const first = pageChangeMotionRef.current.querySelector(".first");
        const second = pageChangeMotionRef.current.querySelector(".second");
        const third = pageChangeMotionRef.current.querySelector(".third");
        const fourth = pageChangeMotionRef.current.querySelector(".fourth");
        const fifth = pageChangeMotionRef.current.querySelector(".fifth");

        t1.to(first, {
            x: "100%",
            opacity: 0,
            duration: 0.1,
            ease: Power0.easeOut,
        })
            .to(second, {
                x: "100%",
                opacity: 0,
                duration: 0.1,
                ease: Power0.easeOut,
            })
            .to(third, {
                x: "100%",
                opacity: 0,
                duration: 0.1,
                ease: Power0.easeOut,
            })
            .to(fourth, {
                x: "100%",
                opacity: 0,
                duration: 0.1,
                ease: Power0.easeOut,
            })
            .to(fifth, {
                x: "100%",
                opacity: 0,
                duration: 0.1,
                ease: Power0.easeOut,
            })
            .to(pageChangeMotionRef.current, {
                display: "none",
            });
    });
    return (
        <div ref={pageChangeMotionRef} className="motion-default-container">
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>
            <div className="overlay fourth"></div>
            <div className="overlay fifth"></div>
        </div>
    );
};

export default PageChangeMotion;
