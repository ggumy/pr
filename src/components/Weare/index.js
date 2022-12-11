import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출

const Weare = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(false));
    });
    return (
        <div className="container-fluid mt150">
            <div className="container">
                <div className="row">
                    <div className="col-12 fs_18 lh18 fc0 f_we5 letter36">
                        WE ARE
                        <img
                            src={require("../../assets/images/page/title_icon.png")}
                            className="mtm5"
                            alt=""
                        />
                    </div>

                    <div className="col-12  fc0 fs_18 lh30 mt70">
                        CREATIVE DESIGN GROUP
                    </div>
                    <div className="col-12  fc0 fs_18 lh30 f_we5 mt10 mb77">
                        THEGRAPE
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 fs_18 fc0 lh30 letterm36 text-justify mb20">
                        <div className="row">
                            <div className="col-12 f_we5">
                                최고의 실무자들과 다재다능한 인력
                            </div>
                            <div className="col-12 text_j">
                                웹에이젼시, IT기업, 교육등 전문컨설턴트 등
                                국내외 다양한 수상경력을 가진 크리에이티브
                                디자이너 및 기획자로 인력구성, 다년간
                                온라인프로모션, 전략, 기획/제작등을 직접 해온
                                실주진 위주로, 대규모 프로젝트 및 다양한
                                디바이스 제작경험이 풍부한 전문
                                디자인업체입니다.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4  fs_18 fc0 lh30 letterm36 text-justify mb20">
                        <div className="row">
                            <div className="col-12  f_we5">
                                경험과 노하우를 바탕으로 최고의 E-Business 전략
                            </div>
                            <div className="col-12 text_j">
                                10년 이상의 실무자들을 바탕으로 설립된
                                더그레이프는 국내외 대표적인 기업들의 프로젝트에
                                참여한 인력들로 구성 대기업, 금융사, 하이브랜드
                                등 높은 크리에이티브 구현은 물론 기술적, 시각적,
                                시간적 난이도가 높은 프로젝트 등을 통해 다양한
                                경험과 노하우를 보유하고 있습니다.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 fs_18 fc0 lh30 letterm36 mb20">
                        <div className="row">
                            <div className="col-12 fs_18 fc0 f_we5 lh30">
                                DOWNLOAD{" "}
                                <img
                                    src="./images/page/d_bt.png"
                                    className="mtm5 ml10"
                                    alt=""
                                />
                            </div>
                            <div className="col-12 fs_14 fc0 f_we5 lh30">
                                THEGRAPE COMPANY PDF
                                <img
                                    src="./images/page/r_bt.png"
                                    className="mtm3 ml10"
                                    alt=""
                                />
                            </div>
                            <div className="col-12 fs_14 fc0 f_we5 lh30">
                                LOGO GUIDE
                                <img
                                    src="./images/page/r_bt.png"
                                    className="mtm3 ml10"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12  mt207 fs_18 lh18 fc0 f_we5 letter36">
                        SERVICE
                        <img
                            src={require("../../assets/images/page/title_icon.png")}
                            className="mtm5"
                            alt=""
                        />
                    </div>

                    <div className="col-12 fs_18 fc0 f_we2 lh30 mt80">
                        더그레이프는 다양한 경험을 바탕으로 고객이 원하는 방향을
                        제시하
                        <br />고 접근하여 고객의 지속적인 성공파트너가
                        되겠습니다.
                    </div>

                    <div className="row mt70">
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-12  mb30">
                            <div className="position-relative col-12 fs_18 fc0 lh18 letter36 f_we7 overflow-hidden">
                                DESIGN CONSULTING
                                <div className="dis_box title_icon" />
                            </div>
                            <div className="col-12 fs_18 fc0 f_we2 lh30   text_j mt30">
                                디자인은 기업의 이미지, 제품을 홍보하기 위한
                                요소로 브랜딩을 통한 온라인, 디지털마케팅 모바일
                                등 다양한 분야에서 전략적으로 필요하며, 정해진
                                예산에서 디자인 컨설팅을 통해 효율적인 디자인의
                                범위를 정하고 집행하면서 최대의 효과를 거두는데
                                목적이 있습니다.
                            </div>
                            <div className="col-12  mt10 fs_16 fc0 f_we2 letterm36 lh30">
                                - 브랜딩
                                <br />
                                - 온라인 프로모션
                                <br />
                                - 디지털 마케팅
                                <br />
                                - 모바일
                                <br />- 미디어
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-12   mb30">
                            <div className="position-relative col-12 fs_18 fc0 lh18 letter36 f_we7 overflow-hidden">
                                GRAPHIC DESIGN
                                <div className="dis_box title_icon" />
                            </div>
                            <div className="col-12 fs_18 fc0 f_we2 lh30   text_j mt30">
                                업무에 따라 업체를 찾아 개별적으로 진행하고
                                작업된 소스를 필요한 해당 업체에 각각 전달하는
                                방식은 업무의 효율성이나 고객이 원하는 브랜드의
                                일관성을 유지하기 어렵습니다. 하나의 브랜드를
                                다양한 업무와 연계 함으로서 시간과 비용적인
                                부분에서 효율적입니다.
                            </div>
                            <div className="col-12  mt10 fs_16 fc0 f_we2 letterm36 lh30">
                                - UX/UI
                                <br />
                                - 웹사이트
                                <br />
                                - 편집디자인
                                <br />
                                - 패키지디자인
                                <br />
                                - 브랜딩
                                <br />
                                - 포토그래피
                                <br />- 멀티미디어
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-12   mb30">
                            <div className="position-relative col-12 fs_18 fc0 lh18 letter36 f_we7 overflow-hidden">
                                MAINTENANCE
                                <div className="dis_box title_icon" />
                            </div>
                            <div className="col-12 fs_18 fc0 f_we2 lh30   text_j mt30">
                                지속적인 업무로 다수의 디자인 인원의 구성이 있는
                                경우가 아니면 소수의 디자이너로 다양한 디자인
                                업무를 진행하는 데에는 한계가 있습니다. 이런
                                경우 디자인 업무를 연간 계약을 통해 기업이
                                필요한 다양한 디자인 업무를 진행 할 수 있습니다.
                            </div>
                            <div className="col-12  mt10 fs_16 fc0 f_we2 letterm36 lh30">
                                - 브랜딩
                                <br />
                                - 온라인 프로모션
                                <br />
                                - 디지털 마케팅
                                <br />
                                - 모바일
                                <br />- 미디어
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12 col-12   mb30">
                            <div className="position-relative col-12 fs_18 fc0 lh18 letter36 f_we7 overflow-hidden">
                                DEVELOPMENT
                                <div className="dis_box title_icon" />
                            </div>
                            <div className="col-12 fs_18 fc0 f_we2 lh30   text_j mt30">
                                이제 오프라인의 세상은 온라인을 통해 이어지고 있
                                으며. 온라인은 우리의 생활에 자연스럽게 흡수되어
                                다양한 정보와 컨텐츠등이 온라인을 통해 전달되고
                                있습니다. 디자인과 접목된 기술을 통해 고객의
                                비즈 니스에 파트너가 되어 성장하고자 합니다.
                            </div>
                            <div className="col-12  mt10 fs_16 fc0 f_we2 letterm36 lh30">
                                - 웹사이트
                                <br />
                                - 모바일
                                <br />- E-커머스
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12  mt70 fs_18 lh18 fc0 f_we5 letter36 prl15_5">
                    CLIENT
                    <img
                        src="./images/page/title_icon.png"
                        className="mtm5"
                        alt=""
                    />
                </div>

                <div className="col-12 fs_18 fc0 f_we2 lh30 mt30 prl15_5">
                    같은 목적을 가지고 가치를 창조해오고 있는 파트너 고객사
                    입니다. <br />
                    지금도 다양한 고객사와 함께 크리에이티브를 만들어 가고
                    있습니다.
                </div>

                <div className="row  mt40">
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo1.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo2.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo3.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo4.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo5.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo6.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo7.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo8.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo9.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo10.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo11.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo12.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo13.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo14.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6  prl15_5 mb20_10">
                        <img
                            src={require("../../assets/images/page/logo15.png")}
                            className="we100"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weare;
