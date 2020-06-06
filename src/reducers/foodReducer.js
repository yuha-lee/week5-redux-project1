import {FETCH_CATE_FOOD, FETCH_CATEGORY, FETCH_FOOD_DETAIL, FETCH_CATE_INFO} from "../action/types";

const initialState = {
    category: [],
    cate_food: [],
    food_detail: {},
    cate_info: {}
}

/*
*   dispatch({
*       type: FETCH_CATEGORY,
*       payload: data(category)
*   })
* */
export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case FETCH_CATE_FOOD:
            return {
                ...state,
                cate_food: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_CATE_INFO:
            return {
                ...state,
                cate_info: action.payload
            }
        default:
            return state
    }
}