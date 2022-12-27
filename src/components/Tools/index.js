import React from "react";
import ScrollToTop from "./ScrollToTop";
import PageChangeMotion from "./Motion";
import Loading from "./Loading";
import NotFoundContainer from "./NotFoundContainer";

export const ScrolltoTop = () => {
    return <ScrollToTop />;
};

export const PageMotion = () => {
    return <PageChangeMotion />;
};

// 페이지 로딩 만들거임
export const PageLoading = () => {
    return <Loading />;
};

export const NotFound = () => {
    return <NotFoundContainer />;
};

export default ScrolltoTop;
