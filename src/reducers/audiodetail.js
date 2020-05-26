import * as Types from '../constant/ActionType';

var initialState = {};
const audiodetail = (state = initialState,action) => {
    switch(action.type){
        case Types.GET_AUDIO_DETAIL:
            state = action.audio
            return {...state}
            
        case Types.ADD_QUESTION_SCRIPT_AUDIO:
            state = {}
            return {...state}

        default:
            return state
    }
}

export default audiodetail;