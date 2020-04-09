import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import WordItem from './WordItem';
import {actGetWordsRequest} from '../actions/action';

class ViewListWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words:null
        }
    }

    findWord = (event) => {
        var keyword = event.target.value;
        var tempArr = [];
        if(this.props.words){
            this.props.words.forEach(element => {
                if(element.word.indexOf(keyword) !== -1){
                    tempArr.push(element);
                }    
            });
        }

        this.setState({
            words: tempArr
        });
    }

    componentDidMount() {
        this.props.getAllWord();
    }

    renderListWord = () => {
        if (this.state.words){
            return this.state.words?.map((value, key) => {
                return (
                    <WordItem key={key} sst={key} word={value.word} 
                    id = {value.id}
                    meaning={value.meaning} type={value.type} 
                    image_link={value.image_link}></WordItem>
                )
            })
        }
        else{
            return this.props.words?.map((value, key) => {
                return (
                    <WordItem key={key} sst={key} word={value.word} 
                    id = {value.id}
                    meaning={value.meaning} type={value.type} 
                    image_link={value.image_link}></WordItem>
                )
            })
        }
    }
    

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-header">
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-search input-group-text d-flex align-items-center"></i>
                                </div>
                                <input onChange={(event) => {this.findWord(event)}} type="text" className="form-control" placeholder="Seach words" aria-label="seachword" aria-describedby="basic-addon1" />
                            </div>

                            <table className="table table-hover">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Word</th>
                                        <th scope="col">Meaning</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Modify</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.renderListWord()
                                    }
                                </tbody>
                            </table>
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
        getAllWord: () => {
            dispatch(actGetWordsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewListWord);