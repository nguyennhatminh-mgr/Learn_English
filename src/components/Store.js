import * as redux from 'redux';
import axios from 'axios';

const learnInitialState = {
    listword:null
}
const allReducer = (state = learnInitialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            axios.get("/getword").then((respone) => {
                state.listword = respone.data
            }).catch((error) => {
                console.log(error);
            });
            return state;
            
        case "UPDATE_LIST_WORD":
            state.listword.push(action.newword);
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);
export default store;