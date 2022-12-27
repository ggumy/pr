import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";

import "./css/style.css";

const MainContainer = () => {
    const startRef = useRef(null);
    const textRef = useRef(null);

    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    useLayoutEffect(() => {
        const condiv = startRef;
        const text01 = textRef.current.querySelector(".text-1");
        const text02 = textRef.current.querySelector(".text-2");
        const text03 = textRef.current.querySelector(".text-3");
        const text04 = textRef.current.querySelector(".text-4");
        //gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });

        t1.from(condiv, { css: { display: "block" } });
        t2.to(text01, {
            opacity: 1,
            x: 0,
            delay: 0.7,
            duration: 0.3,
            ease: Power3.easeIn,
        })
            .to(text02, {
                opacity: 1,
                x: 0,
                delay: 0.1,
                duration: 0.2,
                ease: Power3.easeIn,
            })
            .to(text03, {
                opacity: 1,
                x: 0,
                delay: 0.1,
                duration: 0.2,
                ease: Power3.easeIn,
            })
            .to(text04, {
                opacity: 1,
                delay: 0.8,
                duration: 0.5,
                ease: Power3.easeIn,
            });
    }, [t1, t2]);

    return (
        <div ref={startRef} className="condiv container">
            <div className="container d-flex h-100">
                <div ref={textRef} className="row align-self-center">
                    <div className="col-12 fs_100_70_50 fc00 f_we7 lh110 pl95_20 roboto">
                        <div className="text-1">WE WILL DO</div>
                        <div className="text-2">BEST TO MAKE</div>
                        <div className="text-3">YOU SUCCESS</div>
                    </div>

                    <div className="text-4 col-12 fc00 fs_14 lh18 letterp14 f_we6 mt40 pl95_20 roboto">
                        <Link to="/portfolio" className="gnb_sub_link">
                            SHOW PORTFOLIO{" "}
                            <img
                                src={require("../../assets/images/index/r_bt.png")}
                                className="mtm3"
                                alt="show portfolio"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
