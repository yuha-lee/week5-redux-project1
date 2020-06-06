import React, {useEffect} from "react";
import {FETCH_CATEGORY} from "../action/types";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {NavLink} from "react-router-dom";

/*
*   view => dispatch => export default function(state=initialState, action)
*           dispatch({
*               type:,
*               payload:
*           })
*                       ==> state ==> store ==> subscribe
* */
export default function Category(props) {
    const dispatch = useDispatch(); // reduce 함수 호출
    useEffect(() => {
        axios.get('http://localhost:3355/category').then((result) => {
            dispatch({
                type: FETCH_CATEGORY,
                payload: result.data
            });
        });
    }, []);
    // dispatch() => state 갱신 => store에서 변경된 state를 읽음 => render

    const category_data = useSelector((state) => state.foods.category);

    // render
    const html = category_data.map((m) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <NavLink to={"/cate_food/" + m.cateno}>
                    <img src={m.poster} alt="Lights" style={{"width": "100%"}}/>
                </NavLink>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className={"row"}>
            {html}
        </div>
    )
}