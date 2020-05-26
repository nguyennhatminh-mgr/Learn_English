import * as Types from '../constant/ActionType';

var initialState = [];

const audioscript = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_AUDIO_SCRIPT:
            state = action.audioscript
            return [...state]

        default:
            return state;
    }
}

export default audioscript;