import React from "react";
import styled from "styled-components";

const FNBContainer = styled.div`
    display: flex;
    height: 100px;
`;

const Footer = (props) => {
    return (
        <FNBContainer className="container-fluid fixed-bottom">
            <div className="container fc00">FOOTER</div>
        </FNBContainer>
    );
};

export default Footer;
