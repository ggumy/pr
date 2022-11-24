import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    top: 130px;
    height: calc(100vh-130px);
`;

const NotFound = () => {
    return (
        <Container>
            <div className="container fc00">404 Error</div>
        </Container>
    );
};

export default NotFound;
