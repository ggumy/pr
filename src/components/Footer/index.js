import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Power0 } from "gsap";
import FooterContainer from "./FooterContainer";

const FNBContainer = styled.div`
    display: flex;
    height: 100px;
`;
const tl = gsap.timeline();
const Footer = (props) => {
    const divStyle = {
        opacity: 0,
    };

    const divRef = useRef();

    useLayoutEffect(() => {
        const div01 = divRef.current;
        tl.to(div01, {
            opacity: 1,
            delay: 0.3,
            duration: 0.5,
            ease: Power0.easeInOut,
        });
    });
    return (
        <FNBContainer
            ref={divRef}
            style={divStyle}
            className="container-fluid fixed-bottom"
        >
            <FooterContainer />
        </FNBContainer>
    );
};

export default Footer;
