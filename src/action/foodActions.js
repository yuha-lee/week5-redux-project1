import {FETCH_FOOD_DETAIL} from "./types";
import axios from 'axios'

/*
*   export const fetchFoodDetail = cno => dispatch => {
*
*   }
*
* */
// export function fetchFoodDetail(no) {
//     return function (dispatch) {
//         // dispatch => 함수
//         axios.get('http://localhost:3355/food_detail', {
//             params: {
//                 no: no
//             }
//         }).then((result) => dispatch({
//           type: FETCH_FOOD_DETAIL,
//           payload: result.data
//         }))
//     }
// }

export const fetchFoodDetail = (no) => dispatch => {
    axios.get('http://localhost:3355/food_detail', {
        params: {
            no: no
        }
    }).then((result) => dispatch({
        type: FETCH_FOOD_DETAIL,
        payload: result.data
    }))
}