import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap, Power3 } from "gsap";

import "./css/style.css";

const Loading = () => {
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
    return isChange ? <Motion /> : "";
};

const Motion = () => {
    const startRef = useRef(null);

    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();
    const t4 = gsap.timeline();

    useLayoutEffect(() => {
        const condiv = startRef;
        const movediv01 = startRef.current.querySelector(".movediv01");
        const movediv02 = startRef.current.querySelector(".movediv02");
        const loadingbar = startRef.current.querySelector(".loadingbar");

        t1.to(loadingbar, { x: 0, duration: 1.5, ease: Power3.easeInOut })
            .to(loadingbar, {
                opacity: 0,
                duration: 0.2,
                delay: 0,
                ease: Power3.easeIn,
            })
            .to(loadingbar, {
                display: "none",
            });

        t2.to(movediv01, {
            y: "-100%",
            opacity: 1,
            duration: 0.3,
            delay: 1.6,
            ease: Power3.easeOut,
        }).to(movediv01, {
            display: "none",
        });

        t3.to(movediv02, {
            y: "100%",
            opacity: 1,
            duration: 0.5,
            delay: 1.6,
            ease: Power3.easeOut,
        }).to(movediv02, {
            display: "none",
        });

        t4.to(condiv.current, {
            display: "none",
            delay: 2,
        });
    }, [t1, t2, t3, t4]);

    return (
        <div ref={startRef} className="condiv">
            <div className="loadingbar"></div>
            <div className="overlay movediv02"></div>
            <div className="overlay movediv01"></div>
        </div>
    );
};

export default Loading;
