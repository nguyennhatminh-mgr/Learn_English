import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from '../components/Home';
import ChoiceVocab from '../components/ChoiceVocab';
import ConnectionVocab from '../components/ConnectionVocab';
import PutHandDown from '../components/PutHandDown';
import AddNewWord from '../components/AddNewWord';
import ViewListWord from '../components/ViewListWord';
import ListenAndWrite from '../components/ListenAndWrite';
import ListQuestionAudio from '../components/ListQuestionAudio';
import AddAudio from '../components/AddAudio';

class RedirectURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/choicevocab" component={ChoiceVocab}></Route>
                <Route exact path="/connectionvocab" component={ConnectionVocab}></Route>
                <Route exact path="/puthanddown" component={PutHandDown}></Route>
                <Route exact path="/addnewword" component={AddNewWord}></Route>
                <Route exact path="/deleteword/:id.html" component={AddNewWord}></Route>
                <Route exact path="/viewlistword" component={ViewListWord}></Route>
                <Route exact path="/listquestionaudio" component={ListQuestionAudio}></Route>
                <Route exact path="/listenandwrite/:id.html" component={ListenAndWrite}></Route>
                <Route exact path="/addaudio" component={AddAudio}></Route>
            </div>
        );
    }
}

export default RedirectURL;