import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출
import Card from "./Card";

import { portfolioData } from "../../api/portfolioData";

const List = () => {
    const { data } = portfolioData;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(false));
    });

    return (
        <div className="portfolio container-fluid mt150" style={{ zIndex: 1 }}>
            <div className="container ">
                <div className="col-12 fs_18 lh18 fc0 f_we5 letter36">
                    PORTFOLIO
                    <img
                        src={require("../../assets/images/page/title_icon.png")}
                        className="mtm5"
                        alt=""
                    />
                </div>

                <div className="row fs_18 lh18 letter18  mt77 ">
                    <div className="col-6">
                        <span className="f_we5">
                            <Link to="#">ALL</Link>
                        </span>
                        <span className="ml10">
                            <Link to="#">WEB</Link>
                        </span>
                        <span className="ml10">
                            <Link to="#">ADV</Link>
                        </span>
                        <span className="ml10">
                            <Link to="#">UI</Link>
                        </span>
                        <span className="ml10">
                            <Link to="#">SI</Link>
                        </span>
                    </div>
                    <div className="col-6 text-end fc00 f_we5 letter18">
                        <Link to="/portfolio/andproject">AND PORTFOLIO</Link>
                    </div>
                </div>
            </div>

            <div className="container mt50">
                <div className="row">
                    {data.map((data, index) => {
                        return (
                            <Card
                                key={index}
                                list_id={index}
                                imgUrl={data.imgUrl}
                                name={data.name}
                                service={data.services}
                            />
                        );
                    })}

                    <div className="col-12 pz text-center fs_18 lh18 fc0 letter18 mt30">
                        <span className="f_we5"> ::: END ::: </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
