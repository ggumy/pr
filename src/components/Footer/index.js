import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Power3 } from "gsap";
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
            delay: 2.4,
            duration: 0.3,
            ease: Power3.easeInOut,
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
