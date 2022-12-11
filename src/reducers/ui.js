import * as types from "../actions/ActionTypes";

const initialState = {
    isMain: true,
    isGnbVisible: false,
    isPostViewToggle: false,
    NaviItems: [
        { id: 1, name: "HOME", url: "/" },
        { id: 2, name: "WE ARE", url: "/weare" },
        { id: 3, name: "INSIDE", url: "/inside" },
        { id: 4, name: "PORTFOLIO", url: "/portfolio" },
        { id: 5, name: "CONTACT US", url: "/contactus" },
    ],
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case types.SET_GNB:
            return {
                ...state,
                NaviItems: action.NaviItems,
            };
        case types.SET_VISIBLE_GNB:
            return {
                ...state,
                isGnbVisible: action.isGnbVisible,
            };
        case types.SET_MAIN:
            return {
                ...state,
                isMain: action.isMain,
            };
        case types.POST_VIEW_TOGGLE:
            return {
                ...state,
                isPostViewToggle: action.isPostViewToggle,
            };
        default:
            return state;
    }
}
