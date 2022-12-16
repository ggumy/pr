import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // 디스패치
import * as actions from "../../actions"; // store 엑션 함수를 호출

const Andproject = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.setMain(false));
    });
    return (
        <div className="container-fluid mt150">
            <div className="container">
                <div className="col-12 fs_18 lh18 fc0 f_we5 letter36">
                    AND PORTFOLIO
                    <img
                        src={require("../../assets/images/page/title_icon.png")}
                        className="mtm5"
                        alt=""
                    />
                </div>
                <div className="row mt47">
                    <div className="col-lg-6 col-12 fs_18 fc0 lh30 mt25 justify-content-end">
                        제뉴이티(팩토리세븐&지인터렉티브)는 그동안 구축되어온
                        웹사이트들을 대상으로 하는 우수 웹사이트 평가시상식인
                        웹어워드 코리아의 브랜드 및 영화사이트부분에서 여러차레
                        수상하며 크리에이티브를 인정받았습니다.
                    </div>

                    <div className="col-lg-6 col-12 text-end fc00 mt25 fs_18 f_we5 letter18">
                        <Link to="/portfolio">PORTFOLIO</Link>
                    </div>
                </div>

                <div className="row mt80">
                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2004
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-‘페이책’ <br />
                            브랜드-‘CJ 엔터테이먼트’
                            <br />
                            영화-‘사랑도 통역이 되나요?’
                            <br />
                            영화-‘내생에 최고의 데이트’
                            <br />
                            영화-‘슈렉2’
                            <br />
                            영화-‘리딕’
                            <br />
                            영화-‘터미널’
                            <br />
                            영화-‘스텝 포드 와이프’
                            <br />
                            영화-‘모터 사이트 다이어리’
                            <br />
                            영화-‘샤크’
                            <br />
                            영화-‘서바이벌 크리스마스’
                            <br />
                            브랜드-[유니레버] ‘폰즈브랜드 사이트 구축 및
                            유지운영’
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2005
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-쏘우
                            <br />
                            영화-킨제이보고서
                            <br />
                            영화-셔터
                            <br />
                            영화-오픈워터
                            <br />
                            영화-불량공주모모코
                            <br />
                            영화-러브토크
                            <br />
                            브랜드-폰즈 청 브랜드 사이트
                            <br />
                            영화-피햅스러브
                            <br />
                            영화-무극
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2006
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            브랜드-[유니레버] ‘레세나브랜드’ 사이트 구축
                            <br />
                            영화-‘강적’
                            <br />
                            영화-‘비열한거리’ (웹어워드코리아 영화부분 대상)
                            <br />
                            영화-‘파이스토리’
                            <br />
                            영화-‘예의 없는것들’
                            <br />
                            영화-[바세린] 브랜드 사이트 구축
                            <br />
                            영화-‘사랑할때 이야기 하는 것들’
                            <br />
                            영화-‘무지개 여신’
                            <br />
                            영화-‘그 해 여름’
                            <br />
                            영화-‘미녀는 괴로워’
                            <br />
                            영화-‘뮤직 인 마이 하트’
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2007
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-복면달호
                            <br />
                            영화-수
                            <br />
                            브랜드-폰즈 브랜드 사이트 리뉴얼
                            <br />
                            브랜드-리조트 칸<br />
                            영화-므이
                            <br />
                            영화-기담
                            <br />
                            영화-두사람이다
                            <br />
                            브랜드-바세린 브랜드 사이트
                            <br />
                            영화-상사부일체
                            <br />
                            영화-식객
                            <br />
                            영화-우리동네
                            <br />
                            영화-기다리다미쳐
                            <br />
                            영화-6년째 연예중
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2008
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-원스어폰어타임
                            <br />
                            영화-추격자
                            <br />
                            브랜드-SK브로드밴드_브로드랜 TV 유지운영
                            <br />
                            영화-빙그레, 쌩큐 브랜드 사이트
                            <br />
                            영화-가루지기
                            <br />
                            브랜드-상하목장 유기농 우유브랜드
                            <br />
                            브랜드-썬업 제로칼로리 프로모션
                            <br />
                            브랜드-투게더 브랜드 사이트
                            <br />
                            영화-순정만화
                            <br />
                            영화-달콤한 거짓말
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2009
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            브랜드-샘표, 폰타나 브랜드 사이트
                            <br />
                            브랜드-제스타드
                            <br />
                            뮤지컬-돈쥬앙
                            <br />
                            브랜드-매일유업_카페라떼 프로모션
                            <br />
                            브랜드-피자헛, 스마트 런치 브랜드
                            <br />
                            브랜드-빙그레, 닥터캡슐 브랜드 사이트
                            <br />
                            뮤지컬-형제는 용감했다
                            <br />
                            브랜드-Q채널
                            <br />
                            영화-아스트로보이
                            <br />
                            브랜드-대한 A&C
                            <br />
                            영화-펜트하우스 코끼리
                            <br />
                            영화-의형제
                            <br />
                            영화-식객 김치의 전쟁
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2010
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-복면달호
                            <br />
                            영화-수
                            <br />
                            브랜드-폰즈 브랜드 사이트 리뉴얼
                            <br />
                            브랜드-리조트 칸<br />
                            영화-므이
                            <br />
                            영화-기담
                            <br />
                            영화-두사람이다
                            <br />
                            브랜드-바세린 브랜드 사이트
                            <br />
                            영화-상사부일체
                            <br />
                            영화-식객
                            <br />
                            영화-우리동네
                            <br />
                            영화-기다리다미쳐
                            <br />
                            영화-6년째 연예중
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2011
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-원스어폰어타임
                            <br />
                            영화-추격자
                            <br />
                            브랜드-SK브로드밴드_브로드랜 TV 유지운영
                            <br />
                            영화-빙그레, 쌩큐 브랜드 사이트
                            <br />
                            영화-가루지기
                            <br />
                            브랜드-상하목장 유기농 우유브랜드
                            <br />
                            브랜드-썬업 제로칼로리 프로모션
                            <br />
                            브랜드-투게더 브랜드 사이트
                            <br />
                            영화-순정만화
                            <br />
                            영화-달콤한 거짓말
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2012
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            브랜드-샘표, 폰타나 브랜드 사이트
                            <br />
                            브랜드-제스타드
                            <br />
                            뮤지컬-돈쥬앙
                            <br />
                            브랜드-매일유업_카페라떼 프로모션
                            <br />
                            브랜드-피자헛, 스마트 런치 브랜드
                            <br />
                            브랜드-빙그레, 닥터캡슐 브랜드 사이트
                            <br />
                            뮤지컬-형제는 용감했다
                            <br />
                            브랜드-Q채널
                            <br />
                            영화-아스트로보이
                            <br />
                            브랜드-대한 A&C
                            <br />
                            영화-펜트하우스 코끼리
                            <br />
                            영화-의형제
                            <br />
                            영화-식객 김치의 전쟁
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2013
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-복면달호
                            <br />
                            영화-수
                            <br />
                            브랜드-폰즈 브랜드 사이트 리뉴얼
                            <br />
                            브랜드-리조트 칸<br />
                            영화-므이
                            <br />
                            영화-기담
                            <br />
                            영화-두사람이다
                            <br />
                            브랜드-바세린 브랜드 사이트
                            <br />
                            영화-상사부일체
                            <br />
                            영화-식객
                            <br />
                            영화-우리동네
                            <br />
                            영화-기다리다미쳐
                            <br />
                            영화-6년째 연예중
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2014
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            영화-원스어폰어타임
                            <br />
                            영화-추격자
                            <br />
                            브랜드-SK브로드밴드_브로드랜 TV 유지운영
                            <br />
                            영화-빙그레, 쌩큐 브랜드 사이트
                            <br />
                            영화-가루지기
                            <br />
                            브랜드-상하목장 유기농 우유브랜드
                            <br />
                            브랜드-썬업 제로칼로리 프로모션
                            <br />
                            브랜드-투게더 브랜드 사이트
                            <br />
                            영화-순정만화
                            <br />
                            영화-달콤한 거짓말
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2015
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            브랜드-샘표, 폰타나 브랜드 사이트
                            <br />
                            브랜드-제스타드
                            <br />
                            뮤지컬-돈쥬앙
                            <br />
                            브랜드-매일유업_카페라떼 프로모션
                            <br />
                            브랜드-피자헛, 스마트 런치 브랜드
                            <br />
                            브랜드-빙그레, 닥터캡슐 브랜드 사이트
                            <br />
                            뮤지컬-형제는 용감했다
                            <br />
                            브랜드-Q채널
                            <br />
                            영화-아스트로보이
                            <br />
                            브랜드-대한 A&C
                            <br />
                            영화-펜트하우스 코끼리
                            <br />
                            영화-의형제
                            <br />
                            영화-식객 김치의 전쟁
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12  mb40">
                        <div className="col-12 position-relative fs_18 fc0 lh18 letter36 f_we7">
                            2016
                            <div className="dis_box title_icon" />
                        </div>
                        <div className="col-12  fc6 fs_18 lh30 f_we2 mt18">
                            브랜드-샘표, 폰타나 브랜드 사이트
                            <br />
                            브랜드-제스타드
                            <br />
                            뮤지컬-돈쥬앙
                            <br />
                            브랜드-매일유업_카페라떼 프로모션
                            <br />
                            브랜드-피자헛, 스마트 런치 브랜드
                            <br />
                            브랜드-빙그레, 닥터캡슐 브랜드 사이트
                            <br />
                            뮤지컬-형제는 용감했다
                            <br />
                            브랜드-Q채널
                            <br />
                            영화-아스트로보이
                            <br />
                            브랜드-대한 A&C
                            <br />
                            영화-펜트하우스 코끼리
                            <br />
                            영화-의형제
                            <br />
                            영화-식객 김치의 전쟁
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Andproject;
