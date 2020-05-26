import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import Header from './Header';
import { actGetOneWordRequest,actOnUpdateRequest } from '../actions/action';
import { Link } from 'react-router-dom';

class AddNewWord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:null,
            word:"",
            meaning:"",
            type:"",
            image_link:"",
            defaultType:"n"
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleClickAdd = () => {
        if(this.state.word ===""){
            alert("Please fill word!!!");
            return;
        }

        if (this.state.meaning ===""){
            alert("Please fill meaning!!!");
            return;
        }

        if (this.state.image_link ===""){
            alert("Please fill link of image");
            return;
        }

        var newword = {};
        newword.word = this.state.word;
        newword.meaning = this.state.meaning;

        if (this.state.type ===""){
            newword.type="n";
        }
        else{
            newword.type = this.state.type;
        }

        newword.image_link = this.state.image_link;

        axios.post('/addnewword',newword).then((respone) => {
            console.log(respone.data);
            alert("Add new word success");
        });

        this.setState({
            id: null,
            word: "",
            meaning: "",
            type: "",
            image_link: ""
        });

    }

    handleClickEdit = () => {
        var word = {};
        word.id = this.state.id;
        word.word = this.state.word;
        word.meaning = this.state.meaning;
        word.type = this.state.type;
        word.image_link = this.state.image_link;
        this.props.onUpdateWord(word);
    }

    componentDidMount() {
        if (this.props.match.params.id){
            this.props.getOneWord(this.props.match.params.id);
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.wordediting){
            var wordediting = nextProps.wordediting;
            this.setState({
                id: wordediting.id,
                word: wordediting.word,
                meaning: wordediting.meaning,
                type: wordediting.type,
                image_link: wordediting.image_link
            });
        }
    }

    showTitle = () => {
        if(this.props.match.params.id){
            return "Edit word";
        }
        else{
            return "Add new word";
        }
    }
    
    showButton = () => {
        if(this.props.match.params.id){
            return (
                <Link to="/viewlistword" onClick={this.handleClickEdit} className="btn btn-success btn-block">Edit</Link>
            );
        }
        else{
            return (
                <button onClick={this.handleClickAdd} type="reset" className="btn btn-success btn-block">Add</button>
            );
        }
    }
    

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-header">
                    <div className="row">
                        <div className="col-12">
                        <div className="card text-white bg-primary mb-3">
                        <div className="card-header">{this.showTitle()}</div>
                        </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                        <div className="col-12 col-xl-8 col-lg-8">
                        <form>
                            <div className="form-group">
                                <label htmlFor="word">Word</label>
                                <input onChange={(event) => this.isChange(event)} value={this.state.word} type="text" className="form-control" name="word" id="word" aria-describedby="helpId" placeholder="Enter word" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="meaning">Meaning</label>
                                <input onChange={(event) => this.isChange(event)} value={this.state.meaning} type="text" className="form-control" name="meaning" id="meaning" aria-describedby="helpId" placeholder="Enter meaning" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Type word</label>
                                <select value={this.state.type} onChange={(event) => this.isChange(event)} name="type" className="form-control" id="exampleFormControlSelect1">
                                    <option value="n">Noun</option>
                                    <option value="adj">Adjective</option>
                                    <option value="v">Verb</option>
                                    <option value="adv">Adverb</option>
                                    <option value="prep">Preposition</option>
                                    <option value="phrase">Phrase</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image_link">Link image</label>
                                <input onChange={(event) => this.isChange(event)} value = {this.state.image_link} type="text" className="form-control" name="image_link" id="image_link" aria-describedby="helpId" placeholder="Enter link image" />
                            </div>
                            {
                                this.showButton()
                            }
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        wordediting: state.wordediting
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOneWord: (id) => {
            dispatch(actGetOneWordRequest(id))
        },
        onUpdateWord: (word) => {
            dispatch(actOnUpdateRequest(word))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWord);