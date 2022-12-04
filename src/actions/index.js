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
