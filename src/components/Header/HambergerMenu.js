import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

/*
https://hemanta.io/how-to-create-a-hamburger-menu-using-gsap-and-react/
*/

const animation = gsap.timeline({ paused: true, reversed: true });

export const HambergerMenu = () => {
    const menuRef = useRef();
    useLayoutEffect(() => {
        const menuLine1 = menuRef.current.querySelector(".menu-line-1");
        const menuLine2 = menuRef.current.querySelector(".menu-line-2");
        const menuLine3 = menuRef.current.querySelector(".menu-line-3");

        animation
            .to(
                menuLine1,
                { rotate: "45deg", y: "0.65rem", duration: 0.2 },
                "<"
            )
            .to(menuLine2, { x: "-105%", duration: 0.2 }, "<")
            .to(
                menuLine3,
                { rotate: "-45deg", y: "-0.65rem", duration: 0.2 },
                "<"
            );
    });

    const handleMenuClick = () => {
        animation.reversed() ? animation.play() : animation.reverse();
    };

    /*
    const handleNavLinkClick = () => {
        animation.reverse();
    };
    */

    return (
        <>
            <div
                className="menu position-absolute"
                ref={menuRef}
                onClick={handleMenuClick}
            >
                <div className="menu-line-wrapper">
                    <div className="menu-line menu-line-1"></div>
                    <div className="menu-line menu-line-2"></div>
                    <div className="menu-line menu-line-3"></div>
                </div>
            </div>
        </>
    );
};
