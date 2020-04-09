import * as Types from '../constant/ActionType';

var initialState = [];

const findIndexById = (words, left, right, id) => {
    var mid = parseInt((left + right) / 2);
    if (id === words[mid].id){
        return mid;
    }
    else if (id < words[mid].id){
        return findIndexById(words, left, mid - 1, id);
    }
    else{
        return findIndexById(words, mid + 1, right, id);
    }    
}

const words = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_WORD:
            state = action.words;
            return [...state]
        case Types.DELETE_WORD:
            var index = findIndexById(state,0,state.length - 1, action.id);
            state.splice(index,1);
            return [...state]
        default:
            return [...state]
    }
}

export default words;