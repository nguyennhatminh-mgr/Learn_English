import * as Types from '../constant/ActionType';

var initialState = [];

const audios = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_LIST_AUDIO:
            state = action.listAudio
            return [...state]
        
        default:
            return state
    }
}

export default audios;