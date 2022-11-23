import React from "react";
import styled from "styled-components";

const FNBContainer = styled.div`
    display: flex;
    height: 100px;
`;

const Footer = () => {
    return (
        <FNBContainer className="container-fluid">
            <div className="container fc00">FOOTER</div>
        </FNBContainer>
    );
};

export default Footer;
