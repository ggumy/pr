import React, { useEffect } from "react";
import Iframe from "react-iframe";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출

const Contactus = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(false));
    });
    return (
        <div className="container-fluid mt120">
            <div className="container ">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 left_gnb">
                        <div className="col-12 fs_18 lh18 fc0 f_we5 letter36">
                            CONTACT
                            <img
                                src={require("../../assets/images/page/title_icon.png")}
                                className="mtm5"
                                alt=""
                            />
                        </div>

                        <div className="col-12  mt77">
                            <div className="col-lg-12 col-sm-6 col-12  mb60">
                                <div className="col-12 position-relative fs_18 fc0 lh18 letter18 f_we7 ">
                                    청주
                                    <div className="dis_box title_icon" />
                                </div>

                                <div className="col-12  fs_18 fc0 lh30 f_we2 mt30">
                                    충북 청주시 서원구 구룡산로 420
                                </div>
                                <div className="col-12  fs_18 fc0  f_we2 mt15 letter18">
                                    +82 70 7794 9257
                                </div>
                                <div className="col-12  fs_18 fc0  f_we2 mt15">
                                    cs@gitav.kr
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="offset-xl-4 col-xl-8 offset-lg-4 col-lg-8 col-md-12 col-sm-12 col-12 ">
                        <div className="col-12 fs_24_18 fc0 f_we5">
                            I hope you’ll have a <br />
                            precious relationship.
                        </div>
                        <div className="col-12  fs-18 f_we2 fc0 lh30 mt25">
                            If you are interested in learning and working more
                            from us, <br />
                            or if you need to hear from us about what we do,
                            please contact our office below. <br />
                            I’m always waiting for your call.
                        </div>
                        <div className="col-12  fs_18 lh18 f_we5 letter18 mt30 ">
                            <span className="dis_box ca_menu_ho mr27 cp mb10">
                                SEOUL
                            </span>
                        </div>

                        <div className="col-12  mt30 he437_250">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.351670187539!2d127.48656522864084!3d36.617920815973214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35652647c11e55a1%3A0x42a61537b96ec30c!2z7Lap7LKt67aB64-EIOyyreyjvOyLnCDtnaXrjZXqtawg6rWs66Oh7IKw66GcIDQyMA!5e0!3m2!1sko!2skr!4v1670301437930!5m2!1sko!2skr"
                                width="100%"
                                height="100%"
                                display="initial"
                                position="relative"
                                frameBorder="0"
                                allowfullscreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
