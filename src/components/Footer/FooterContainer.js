import React from "react";
import { useSelector } from "react-redux"; // 디스패치
import { Link } from "react-router-dom";
import { GrInstagram, GrFacebook } from "react-icons/gr";
import { CgMail, CgCopyright } from "react-icons/cg";

import "./css/style.css";

//https://react-icons.github.io/react-icons

const FooterContainer = () => {
    const isMain = useSelector((state) => state.ui.isMain);
    return (
        <div className="footer container fc00">
            <div className="row">
                <div className="col-12 fs_14 lh14 f_we5 fc00 roboto">
                    <Link
                        to="/contactus"
                        className={`${isMain ? "gnb_sub_link" : "sub_link"}`}
                    >
                        CONTACT US
                    </Link>
                </div>
                <div className="col-6 col-sm-9 mt10">
                    <div className="col-12 fc6 lh18">
                        <ul className="float-left">
                            <li className="text-start">
                                <span className="fs_12 mr5">
                                    <CgMail />
                                </span>
                                <span className="f_we4 fs_12">cs@gitav.kr</span>
                            </li>
                            <li className="text-start mt5">
                                <span className="fs_12 mr5">
                                    <CgCopyright />
                                </span>
                                <span className="f_we4 fs_12">
                                    GITAV All Rights Reserved.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 col-sm-3 d-sm-block">
                    <ul className="float-end mt25">
                        <li className="float-start mr10">
                            <Link
                                className={`fs_20 ${
                                    isMain ? "gnb_sub_link" : "sub_link"
                                }`}
                            >
                                <GrFacebook />
                            </Link>
                        </li>
                        <li className="float-end">
                            <Link
                                className={`fs_20 ${
                                    isMain ? "gnb_sub_link" : "sub_link"
                                }`}
                            >
                                <GrInstagram />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default FooterContainer;
