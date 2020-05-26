import {combineReducers} from 'redux';

import words from './words';
import wordediting from './wordediting';
import audios from './audios';
import audiodetail from './audiodetail';
import audioscript from './audioscript';

const appReducers = combineReducers({
    words,
    wordediting,
    audios,
    audiodetail,
    audioscript
});

export default appReducers;