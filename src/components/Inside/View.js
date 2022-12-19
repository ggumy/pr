import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출
import { CgLayoutList } from "react-icons/cg";

export const View = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(false));
    });
    return (
        <div className="container-fluid mt150" style={{ zIndex: 1 }}>
            <div className="container mb77">
                <div className="row lh18">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 left_gnb lh20">
                        <div className="col-12 fs_18 lh18 fc0 f_we5 letter36">
                            INSIDE
                            <img
                                src={require("../../assets/images/page/title_icon.png")}
                                className="mtm5"
                                alt=""
                            />
                        </div>
                        <div className="col-12">
                            <div className="mt77"></div>
                            <span className="f_we5 fs_25 letter18 mt37">
                                유니클로 2022 유지보수
                            </span>
                            <p className="card-text fs_15 fc0 mt10 lh25">
                                2021, 2022년 연간 카드뉴스 및 웹진 제작 수주. 월
                                100건 카드뉴스 컨텐츠 및 월 10종 웹진 제작업무
                                진행중.
                            </p>
                            <ul className="fs_15 mz mt20">
                                <li className="we_100 f_we5 float-start mr10">
                                    Client
                                </li>
                                <li>유니클로</li>
                            </ul>
                            <ul className="fs_15 mz mt10">
                                <li className="we_100 f_we5 float-start mr10">
                                    Services
                                </li>
                                <li>카드뉴스컨텐츠, 웹진</li>
                            </ul>
                            <ul className="fs_15 mz mt10">
                                <li className="we_100 f_we5 float-start mr10">
                                    Year
                                </li>
                                <li>2021, 2022</li>
                            </ul>
                            <ul className="fs_15 mz mt10">
                                <li className="we_100 f_we5 float-start mr10">
                                    Link
                                </li>
                                <li>
                                    <a
                                        href="https://store-kr.uniqlo.com"
                                        target="_blank"
                                        title="유니클로 바로가기"
                                        rel="noopener noreferrer"
                                    >
                                        https://store-kr.uniqlo.com/
                                    </a>
                                </li>
                            </ul>

                            <ul className="d-xl-block d-lg-block d-md-none d-sm-none d-none mz pz mt40">
                                <li className="fs_25 float-start mz pz text-left">
                                    <CgLayoutList className="mz pz text-left" />
                                </li>
                                <li className="fs_15 f_we5 float-start mt3 mr10">
                                    <Link to="/inside">리스트로 돌아가기</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset-xl-4 col-xl-8 offset-lg-4 col-lg-8 col-md-12 col-sm-12 col-12 mt40">
                        <div className="d-sm-none mt40"></div>
                        <img
                            src={require("../../assets/images/portfolio/uniq02.png")}
                            alt=""
                            className="img-con img-fluid"
                        />
                        <div className="d-sm-none mt40"></div>
                        <img
                            src={require("../../assets/images/portfolio/uniq01.png")}
                            alt=""
                            className="img-con img-fluid"
                        />

                        <div className="col-xl-12 col-lg-12 d-xl-none d-lg-none d-md-block d-sm-block d-block mz pz mt40 text-center fs_15 f_we5">
                            <Link to="/inside">리스트로 돌아가기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
