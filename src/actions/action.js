import * as Types from '../constant/ActionType';
import axios from 'axios';


export const actGetWordsRequest = () => {
    return (dispatch) => {
        axios.get("/getword").then((respone) => {
            dispatch(actGetWords(respone.data));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const actGetWords = (words) => {
    return {
        type: Types.GET_WORD,
        words
    }
}

export const actOndeleteRequest = (id) => {
    return (dispatch) => {
        axios.get("/deleteword/" + id)
        .then((respone) => {
            dispatch(actOnDelete(id));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const actOnDelete = (id) => {
    return {
        type: Types.DELETE_WORD,
        id
    }
}