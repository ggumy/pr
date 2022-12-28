import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출
import { useParams } from "react-router-dom";
import { portfolioData } from "../../api/portfolioData";

import { CgLayoutList } from "react-icons/cg";

export const View = () => {
    const { view_id } = useParams();
    const dispatch = useDispatch();
    const { name, text, client, services, years, url, content } =
        portfolioData.data[view_id];
    useEffect(() => {
        dispatch(actions.setMain(false));
    });
    return (
        <div className="container-fluid mt150" style={{ zIndex: 1 }}>
            <div className="container mb77">
                <div className="row lh18">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 left_gnb lh20">
                        <div className="col-12 fs_18 lh18 fc0 f_we5 letter36">
                            PORTFOLIO
                            <img
                                src={require("../../assets/images/page/title_icon.png")}
                                className="mtm5"
                                alt=""
                            />
                        </div>
                        <div className="col-12">
                            <div className="mt77"></div>
                            <span className="f_we5 fs_25 letter18 mt37">
                                {name}
                            </span>
                            <p className="card-text fs_15 fc0 mt10 lh25">
                                {text}
                            </p>
                            <ul className="fs_15 mz mt20">
                                <li className="we_100 f_we5 float-start mr10">
                                    Client
                                </li>
                                <li>{client}</li>
                            </ul>
                            <ul className="fs_15 mz mt10">
                                <li className="we_100 f_we5 float-start mr10">
                                    Services
                                </li>
                                <li>{services}</li>
                            </ul>
                            <ul className="fs_15 mz mt10">
                                <li className="we_100 f_we5 float-start mr10">
                                    Year
                                </li>
                                <li>{years}</li>
                            </ul>
                            <ul className="fs_15 mz mt10">
                                <li className="we_100 f_we5 float-start mr10">
                                    Link
                                </li>
                                <li>
                                    <a
                                        href={url}
                                        target="_blank"
                                        title={`${name}"바로가기"`}
                                        rel="noopener noreferrer"
                                    >
                                        {url}
                                    </a>
                                </li>
                            </ul>

                            <ul className="d-xl-block d-lg-block d-md-none d-sm-none d-none mz pz mt40">
                                <li className="fs_25 float-start mz pz text-left">
                                    <CgLayoutList className="mz pz text-left" />
                                </li>
                                <li className="fs_15 f_we5 float-start mt3 mr10">
                                    <Link
                                        to="/portfolio"
                                        preventScrollReset={true}
                                    >
                                        리스트로 돌아가기
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset-xl-4 col-xl-8 offset-lg-4 col-lg-8 col-md-12 col-sm-12 col-12 mt40">
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                        ></div>
                        <div className="col-xl-12 col-lg-12 d-xl-none d-lg-none d-md-block d-sm-block d-block mz pz mt40 text-center fs_15 f_we5">
                            <Link to="/portfolio" preventScrollReset={true}>
                                리스트로 돌아가기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
