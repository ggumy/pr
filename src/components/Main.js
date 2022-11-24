import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    top: 130px;
    height: calc(100vh-130px);
`;

const Main = (props) => {
    return (
        <Container className="container-fluid">
            <div className="container fc00">Main</div>
        </Container>
    );
};

export default Main;
