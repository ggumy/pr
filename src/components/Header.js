import React from "react";
import styled from "styled-components";

import gitavLogo from "../assets/images/header/home-gitav-logo.svg";

const GNBContainer = styled.div`
    z-index: 100;
    display: flex;
    height: 130px;
`;

const Header = (props) => {
    return (
        <GNBContainer className="container-fluid fixed-top">
            <div className="container fc00">
                <div className="row">
                    <div className="col-2">
                        <img
                            src={gitavLogo}
                            alt="gitav logo"
                            style={{
                                width: "44px",
                                height: "44px",
                            }}
                        />
                    </div>
                    <div className="col-10">MENU</div>
                </div>
            </div>
        </GNBContainer>
    );
};

export default Header;
