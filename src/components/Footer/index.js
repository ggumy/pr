import React, { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux"; // 디스패치
import styled from "styled-components";
import { gsap, Power3 } from "gsap";
import FooterContainer from "./FooterContainer";

const FNBContainer = styled.div`
    display: flex;
    height: 100px;
    opacity: 0;
    z-index: 1;
`;
const tl = gsap.timeline();
const Footer = (props) => {
    const divRef = useRef();
    const isMain = useSelector((state) => state.ui.isMain);

    useLayoutEffect(() => {
        const div01 = divRef.current;
        tl.to(div01, {
            opacity: 1,
            delay: 2.0,
            duration: 0.3,
            ease: Power3.easeInOut,
        });
    });
    return (
        <FNBContainer
            ref={divRef}
            className={`container-fluid ${isMain ? "fixed-bottom" : ""}`}
        >
            <FooterContainer />
        </FNBContainer>
    );
};

export default Footer;
