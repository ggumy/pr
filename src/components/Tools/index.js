import React from "react";
import ScrollToTop from "./ScrollToTop";
import PageChangeMotion from "./Motion";
import Loading from "./Loading";

export const ScrolltoTop = () => {
    return <ScrollToTop />;
};

export const PageMotion = () => {
    return <PageChangeMotion />;
};

// 페이지 로딩 만들거임
export const pageLoading = () => {
    return <Loading />;
};
