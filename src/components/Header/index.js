import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { HambergerMenu } from "./HambergerMenu";
import { gsap, Power0 } from "gsap";

/**
 * 참고 페이지
 * https://codesandbox.io/s/react-gsap-animation-toite?from-embed=&file=/src/components/Menu.js:671-679
 */

const GNBContainer = styled.div`
    z-index: 100;
    display: flex;
    height: 6rem;
`;

const tl = gsap.timeline();

const Header = (props) => {
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
        <GNBContainer
            ref={divRef}
            style={divStyle}
            className="container-fluid fixed-top"
        >
            <div className="container position-relative fc00">
                <div className="row">
                    <div className="col-6 float-start">
                        <Logo />
                    </div>
                    <div className="col-6 float-end">
                        <HambergerMenu />
                    </div>
                </div>
            </div>
        </GNBContainer>
    );
};

export default Header;
