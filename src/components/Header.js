import React from "react";
import styled from "styled-components";

const GNBContainer = styled.div`
    z-index: 100;
    display: flex;
    height: 130px;
`;

const Header = () => {
    return (
        <GNBContainer className="container-fluid">
            <div className="container fc00">
                <div className="row">
                    <div className="col-2">LOGO</div>
                    <div className="col-10">MENU</div>
                </div>
            </div>
        </GNBContainer>
    );
};

export default Header;
