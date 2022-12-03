import React from "react";
import MainContainer from "./MainContainer";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    height: -webkit-fill-available;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    z-index: 0;
    overflow-y: hidden;
`;

const Home = () => {
    return (
        <Container className="container-fluid">
            <MainContainer />
        </Container>
    );
};

export default Home;
