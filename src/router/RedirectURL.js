import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from '../components/Home';
import ChoiceVocab from '../components/ChoiceVocab';
import ConnectionVocab from '../components/ConnectionVocab';
import PutHandDown from '../components/PutHandDown';
import AddNewWord from '../components/AddNewWord';
import ViewListWord from '../components/ViewListWord';

class RedirectURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/choicevocab" component={ChoiceVocab}></Route>
                <Route exact path="/connectionvocab" component={ConnectionVocab}></Route>
                <Route exact path="/puthanddown" component={PutHandDown}></Route>
                <Route exact path="/addnewword" component={AddNewWord}></Route>
                <Route exact path="/viewlistword" component={ViewListWord}></Route>
            </div>
        );
    }
}

export default RedirectURL;