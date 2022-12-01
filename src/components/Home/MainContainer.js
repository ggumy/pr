import React, { useLayoutEffect, useRef } from "react";
import { gsap, Power0 } from "gsap";

const tl = gsap.timeline();
const MainContainer = () => {
    const txtStyle = {
        opacity: 0,
    };

    const textRef = useRef();

    useLayoutEffect(() => {
        const text01 = textRef.current.querySelector(".text-1");
        const text02 = textRef.current.querySelector(".text-2");
        tl.to(text01, {
            opacity: 1,
            delay: 0.7,
            duration: 0.5,
            ease: Power0.easeInOut,
        }).to(text02, {
            opacity: 1,
            delay: 0.1,
            duration: 0.1,
            ease: Power0.easeIn,
        });
    });

    return (
        <div className="container d-flex h-100">
            <div ref={textRef} className="row align-self-center">
                <div
                    className="text-1 col-12 fs_100_50 fc00 f_we7 lh110 pl95_20"
                    style={txtStyle}
                >
                    WE WILL DO <br />
                    BEST TO MAKE <br />
                    YOU SUCCESS
                </div>

                <div
                    className="text-2 col-12 fc00 fs_14 lh18 letterp14 mt40 pl95_20"
                    style={txtStyle}
                >
                    SHOW PORTFOLIO{" "}
                    <img
                        src={require("../../assets/images/index/r_bt.png")}
                        className="mtm3"
                        alt="show portfolio"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
