import * as Types from '../constant/ActionType';
import axios from 'axios';

// Action for word
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

export const actGetOneWordRequest = (id) => {
    return (dispatch) => {
        return axios.get(`/getwordedit/${id}`)
                    .then((respone) => {
                        dispatch(actGetOneWord(respone.data[0]));
                    })
                    .catch((error) => {
                        console.log(error);
                    });
    }
}

export const actGetOneWord = (word) => {
    return {
        type: Types.GET_ONE_WORD,
        word
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

export const actOnUpdateRequest = (word) => {
    return (dispatch) => {
        axios.post("/update",word)
        .then((respone) => {
            dispatch(actOnUpdate(word));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const actOnUpdate = (word) => {
    return {
        type: Types.UPDATE_WORD,
        word
    }
}

// Action for listen and write
export const actGetListAudioRequest = () => {
    return (dispatch) => {
        axios.get("/getlistaudio")
        .then((respone) => {
            dispatch(actGetListAudio(respone.data));
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export const actGetListAudio = (listAudio) => {
    return {
        type: Types.GET_LIST_AUDIO,
        listAudio
    }
}

export const actGetAudioDetailRequest = (id) => {
    return (dispatch) => {
        axios.get("/audiodetail/" + id)
        .then((respone) => {
            dispatch(actGetAudioDetail(respone.data[0]));
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export const actGetAudioDetail = (audio) => {
    return {
        type: Types.GET_AUDIO_DETAIL,
        audio
    }
}

export const actGetAudioScriptRequest = (id) => {
    return (dispatch) => {
        axios.get("/audioscript/"+ id)
        .then((respone) => {
            dispatch(actGetAudioScript(respone.data));
        })
    }
}

export const actGetAudioScript = (audioscript) => {
    return {
        type: Types.GET_AUDIO_SCRIPT,
        audioscript
    }
}

// Add question and script
export const actAddQuestionScriptAudioRequest = (question_script) => {
    return (dispatch) => {
        axios.post("/addaudio",question_script)
        .then((respone) => {
            dispatch(actAddQuestionScriptAudio(question_script))
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const actAddQuestionScriptAudio = (question_script) => {
    return {
        type: Types.ADD_QUESTION_SCRIPT_AUDIO,
        question_script
    }
}

// Get data for choice vocabulary
