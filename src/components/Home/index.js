import React from "react";
import MainContainer from "./MainContainer";
import styled from "styled-components";

const Container = styled.div`
    position: flex;
    height: 100vh;
`;

const Home = () => {
    return (
        <Container className="container-fluid">
            <MainContainer />
        </Container>
    );
};

export default Home;
