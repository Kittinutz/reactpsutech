import {FILLTERING} from "../actions/index";

const initialState = [
    {id:1 , todos:"Programmer"},
    {id:2 , todos:"Docter"},
    {id:3 , todos:"Teacher"},
    {id:4 , todos:"Police"},
]

export default function (state=initialState,action) {

    switch (action.type){
        case
            FILLTERING:
            return state.filter(value=>value.id !== parseInt(action.payload))
        default:
            return state = initialState;
    }
    return initialState;
}