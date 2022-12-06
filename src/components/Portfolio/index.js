import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출

const Portfolio = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(false));
    });

    return (
        <div className="container-fluid mt120" style={{ zIndex: 1 }}>
            <div className="container ">
                <div className="col-12 fs_18 lh18 fc0 f_we5 letter36">
                    PORTFOLIO
                    <img
                        src={require("../../assets/images/page/title_icon.png")}
                        className="mtm5"
                        alt=""
                    />
                </div>

                <div className="row fs_18 lh18 f_we5 letter18 mt77 ">
                    <div className="col-6">
                        <span>ALL</span>
                    </div>
                    <div className="col-6 text-end fc00">
                        <Link to="/portfolio/andproject">AND PROJECT</Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mb50_30">
                        <div className="col-12 pz im_area_js">
                            <div className="col-12 pz fs_18 fc0 f_we5  mt20">
                                <span>11</span>
                            </div>
                            <div className="col-12 pz fs_14 lh24 fc0 mt10 he75 over_h" />
                            <div className="col-12 pz fs_12 lh24 fc0 mt10  mt10" />
                        </div>
                    </div>

                    <div className="col-12 pz text-center fs_18 lh18 fc0 letter18 mt30">
                        <span className="f_we5"> ::: END ::: </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
