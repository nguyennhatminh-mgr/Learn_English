import React, { Component } from 'react';
import {connect} from 'react-redux';

import ChoiceVocabItem from './ChoiceVocabItem';
import Header from './Header';
// import implyimage from '../assets/img/background.jpg';
import {actGetWordsRequest} from '../actions/action';

class ChoiceVocab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listFourWord: []
        }
    }

    componentDidMount(){
        this.props.getWords();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.words){
            var {words} = nextProps;
            this.chooseFourWord(words);
        }
    }

    getBackgroudChoice = (index) => {
        if(index === 0){
            return "bg-warning";
        }
        else if (index === 1){
            return "bg-success";
        }
        else if (index === 2){
            return "bg-danger";
        }
        else{
            return "bg-info";
        }
    }

    chooseIndex = () => {
        return Math.floor(Math.random() * 4);
    }

    chooseFourWord = (words) => {
        const numWords = words.length - 1;
        var listFourWord = [];
        const index1 = Math.floor(Math.random()*numWords);
        const index2 = this.chooseIndexForWord(index1, numWords, words);
        const index3 = this.chooseIndexForWord(index2, numWords, words);
        const index4 = this.chooseIndexForWord(index3, numWords, words);
        listFourWord.push(words[index1]);
        listFourWord.push(words[index2]);
        listFourWord.push(words[index3]);
        listFourWord.push(words[index4]);
        this.setState({
            listFourWord: listFourWord
        });
    }

    chooseIndexForWord = (indexBefore, numWords, words) => {
        var resIndex = Math.floor(Math.random()*numWords);
        while(resIndex === indexBefore || words[resIndex].meaning === words[indexBefore].meaning){
            resIndex = Math.floor(Math.random()*numWords);
        }
        return resIndex;
    }

    checkRightOrWrong = (wordClicked, wordShown) => {
        if(wordClicked && wordShown){
            if(wordClicked.id === wordShown.id){
                alert("You choose exactly");
                
                this.chooseFourWord(this.props.words);
            }
            else{
                alert("Incorrect, please choose again");
            }
        }
    }

    checkLoaded = () => {
        console.log("image is loaded successfully");
    }

    render() {
        const indexChosen = this.chooseIndex();
        return (
            <div>
                <Header></Header>
                <div className="container mt-header">
                    {/* <div className="row">
                        <div className="col-12">
                            <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Learn vocabulary</div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="text-white bg-primary mb-3 my-border-radius">
                            <div className="d-flex title-question">
                                <div>Question <span>1</span>/<span>100</span></div>
                                <div><span>1</span> right | <span>0</span> wrong</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-3">
                        <div className="col-xl-6 col-lg-8 col-md-8 col-12">
                            <div className="d-flex justify-content-center">
                                <img onLoad={this.checkLoaded} style={{height: '300px'}} className="img-fluid" src={this.state.listFourWord[indexChosen]?.image_link} alt="" />
                            </div>
                            <div className="text-white bg-dark mt-3 my-border-radius p-2 text-center">{this.state.listFourWord[indexChosen]?.meaning}</div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            this.state.listFourWord.map((value, index) => {
                                return (
                                    <ChoiceVocabItem key={index} wordShown={this.state.listFourWord[indexChosen]} funcCheckRightOrWrong={this.checkRightOrWrong} bgChoice={this.getBackgroudChoice(index)} content={value}></ChoiceVocabItem>
                                );
                            })
                        }
                    </div>
                    
                    <div className="row mb-3">   
                        <div className="col-12 d-flex justify-content-end">
                            {/* <button className="btn btn-info mr-2"><i className="fas fa-arrow-left" /> Previous</button> */}
                            <button onClick={() => {this.chooseFourWord(this.props.words)}} className="btn btn-info">Next <i className="fas fa-arrow-right" /></button>
                        </div>         
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        words: state.words
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getWords: () => {
            dispatch(actGetWordsRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChoiceVocab);