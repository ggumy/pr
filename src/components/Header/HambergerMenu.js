import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";

import "./css/style.css";

/*
https://hemanta.io/how-to-create-a-hamburger-menu-using-gsap-and-react/
*/

export const HambergerMenu = () => {
    const t1 = gsap.timeline({ paused: true, reversed: true });
    const t2 = gsap.timeline({ paused: true, reversed: true });

    const navRef = useRef(null);
    const menuRef = useRef(null);
    useLayoutEffect(() => {
        const menuLink1 = navRef.current.querySelector(".menu-link-1");
        const menuLink2 = navRef.current.querySelector(".menu-link-2");
        const menuLink3 = navRef.current.querySelector(".menu-link-3");
        const menuLink4 = navRef.current.querySelector(".menu-link-4");
        const menuLink5 = navRef.current.querySelector(".menu-link-5");

        const menuLine1 = menuRef.current.querySelector(".menu-line-1");
        const menuLine2 = menuRef.current.querySelector(".menu-line-2");
        const menuLine3 = menuRef.current.querySelector(".menu-line-3");

        t1.to(navRef.current, {
            opacity: 1,
            display: "flex",
            duration: 0.2,
            ease: Power3.inOut,
        })
            .to(
                menuLine1,
                {
                    rotate: "45deg",
                    y: "0.65rem",
                    duration: 0.2,
                    ease: Power3.inOut,
                },
                "<"
            )
            .to(
                menuLine2,
                { x: "-105%", duration: 0.2, ease: Power3.inOut },
                "<"
            )
            .to(
                menuLine3,
                {
                    rotate: "-45deg",
                    y: "-0.65rem",
                    duration: 0.2,
                    ease: Power3.inOut,
                },
                "<"
            );

        t2.to(menuLink1, {
            opacity: 1,
            x: 0,
            delay: 0.1,
            duration: 0.1,
            ease: Power3.easeIn,
        })
            .to(menuLink2, {
                opacity: 1,
                x: 0,
                delay: 0.1,
                duration: 0.1,
                ease: Power3.easeIn,
            })
            .to(menuLink3, {
                opacity: 1,
                x: 0,
                delay: 0.1,
                duration: 0.1,
                ease: Power3.easeIn,
            })
            .to(menuLink4, {
                opacity: 1,
                x: 0,
                delay: 0.1,
                duration: 0.1,
                ease: Power3.easeIn,
            })
            .to(menuLink5, {
                opacity: 1,
                x: 0,
                delay: 0.1,
                duration: 0.1,
                ease: Power3.easeIn,
            });
    }, [t1, t2]);

    const handleMenuClick = () => {
        t1.reversed() ? t1.play() : t1.reverse();
        t2.reversed() ? t2.play() : t2.reverse(0);
    };

    const handleNavLinkClick = () => {
        t1.reverse();
        t2.reverse(0);
    };

    return (
        <>
            <div className="menu" ref={menuRef} onClick={handleMenuClick}>
                <div className="menu-line-wrapper">
                    <div className="menu-line menu-line-1"></div>
                    <div className="menu-line menu-line-2"></div>
                    <div className="menu-line menu-line-3"></div>
                </div>
            </div>
            <nav ref={navRef}>
                <div className="nav-menu pl95_20">
                    <div
                        className="menu-text menu-link-1 fs_100_70_50 f_we7"
                        onClick={handleNavLinkClick}
                    >
                        <Link to="/home" className="nav-link menu_default">
                            HOME
                        </Link>
                    </div>
                    <div
                        className="menu-text menu-link-2 fs_100_70_50 f_we7"
                        onClick={handleNavLinkClick}
                    >
                        <Link to="/weare" className="nav-link menu_default">
                            WE ARE
                        </Link>
                    </div>
                    <div
                        className="menu-text menu-link-3 fs_100_70_50 f_we7"
                        onClick={handleNavLinkClick}
                    >
                        <Link to="/contactus" className="nav-link menu_default">
                            CONTACT US
                        </Link>
                    </div>
                    <div
                        className="menu-text menu-link-4 fs_100_70_50 f_we7"
                        onClick={handleNavLinkClick}
                    >
                        <Link to="/inside" className="nav-link menu_default">
                            INSIDE
                        </Link>
                    </div>
                    <div
                        className="menu-text menu-link-5 fs_100_70_50 f_we7"
                        onClick={handleNavLinkClick}
                    >
                        <Link to="/portfolio" className="nav-link menu_default">
                            PORTFOLIO
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
