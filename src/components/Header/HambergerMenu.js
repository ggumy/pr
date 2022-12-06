import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출
import { gsap, Power3 } from "gsap";

import "./css/style.css";

/*
https://hemanta.io/how-to-create-a-hamburger-menu-using-gsap-and-react/
*/

// dispatch를 사용하기 위한 준비

export const HambergerMenu = () => {
    const dispatch = useDispatch();
    const [itemcolor, setItemcolor] = useState("#fff");
    const [t1] = useState(gsap.timeline({ paused: true, reversed: true }));
    const [t2] = useState(gsap.timeline({ paused: true, reversed: true }));

    /** 시작 스토어 호출 */
    const NaviItems = useSelector((state) => state.ui.NaviItems);
    const isMain = useSelector((state) => state.ui.isMain);
    const isGnbVisible = useSelector((state) => state.ui.isGnbVisible);

    useEffect(() => {
        if (isMain) {
            setItemcolor("#fff");
        } else {
            if (isGnbVisible) {
                setItemcolor("#fff");
            } else {
                setItemcolor("#000");
            }
        }
    }, [isMain, isGnbVisible, itemcolor]);

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
            ease: Power3.easeinOut,
        })
            .to(
                menuLine1,
                {
                    rotate: "45deg",
                    y: "0.65rem",
                    duration: 0.2,
                    ease: Power3.easeinOut,
                },
                "<"
            )
            .to(
                menuLine2,
                { x: "-105%", duration: 0.2, ease: Power3.easeinOut },
                "<"
            )
            .to(
                menuLine3,
                {
                    rotate: "-45deg",
                    y: "-0.65rem",
                    duration: 0.2,
                    ease: Power3.easeinOut,
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

    const handleMenuClick = (e) => {
        e.preventDefault();
        if (t1.reversed()) {
            t1.play();
            dispatch(actions.visibleGNB(true));
        } else {
            t1.reverse(0);
            dispatch(actions.visibleGNB(false));
        }
        t2.reversed() ? t2.play() : t2.reverse(0);
    };

    const handleNavLinkClick = () => {
        t1.reverse(0);
        t2.reverse(0);
        dispatch(actions.visibleGNB(false));
        dispatch(actions.setMain(false));
    };

    return (
        <>
            <div className="menu" ref={menuRef} onClick={handleMenuClick}>
                <div className="menu-line-wrapper">
                    <div
                        className="menu-line menu-line-1"
                        style={{ backgroundColor: `${itemcolor}` }}
                    ></div>
                    <div
                        className="menu-line menu-line-2"
                        style={{ backgroundColor: `${itemcolor}` }}
                    ></div>
                    <div
                        className="menu-line menu-line-3"
                        style={{ backgroundColor: `${itemcolor}` }}
                    ></div>
                </div>
            </div>
            <nav ref={navRef}>
                <div className="nav-menu pl95_20">
                    {NaviItems.map((NaviItem, i) => {
                        return (
                            <div
                                key={NaviItem.id}
                                className={`menu-text menu-link-${NaviItem.id} fs_100_70_50 f_we7 roboto`}
                                onClick={handleNavLinkClick}
                            >
                                <Link
                                    to={NaviItem.url}
                                    className="nav-link menu_default"
                                >
                                    {NaviItem.name}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};
