import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출
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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(true));
    });
    return (
        <Container className="container-fluid">
            <MainContainer />
        </Container>
    );
};

export default Home;
