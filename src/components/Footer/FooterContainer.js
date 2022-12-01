import React from "react";
import { GrInstagram, GrFacebook } from "react-icons/gr";
import { CgMail, CgCopyright } from "react-icons/cg";

//https://react-icons.github.io/react-icons

const FooterContainer = () => {
    return (
        <div className="container fc00">
            <div className="row">
                <div className="col-12 fs_14 lh14 f_we4 fc00">CONTACT US</div>
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
                            <span className="fs_20">
                                <GrFacebook />
                            </span>
                        </li>
                        <li className="float-end">
                            <span className="fs_20">
                                <GrInstagram />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default FooterContainer;
