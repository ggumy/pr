import * as types from "./ActionTypes";

export function setGNB(isSetGNB) {
    return {
        type: types.SET_GNB,
        isSetGNB,
    };
}

export function visibleGNB(isGnbVisible) {
    return {
        type: types.SET_VISIBLE_GNB,
        isGnbVisible,
    };
}

export function setMain(isMain) {
    return {
        type: types.SET_MAIN,
        isMain,
    };
}

export function visiblePostView(isPostViewToggle) {
    return {
        type: types.POST_VIEW_TOGGLE,
        isPostViewToggle,
    };
}

/**  두개 이용 안함 추후 변경*/

export function currentPage(currentPage) {
    return {
        type: types.CURRENT_PAGE,
        currentPage,
    };
}

export function preventPage(preventPage) {
    return {
        type: types.PREVENT_PAGE,
        preventPage,
    };
}
