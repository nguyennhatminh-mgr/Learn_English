import * as Types from '../constant/ActionType';

var initialState = {};
const wordediting = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_ONE_WORD:
            return action.word
        default:
            return state
    }
}

export default wordediting;