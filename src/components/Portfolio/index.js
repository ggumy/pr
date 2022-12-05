import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출

const Portfolio = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(false));
    });

    return <div>Portfolio</div>;
};

export default Portfolio;
