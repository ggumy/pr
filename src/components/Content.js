import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
`;

const Content = () => {
    return (
        <Container className="container-fluid">
            <div className="container fc00">CONTENT</div>
        </Container>
    );
};

export default Content;
