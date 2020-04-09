import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import Header from './Header';

class AddNewWord extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    handleClick = () => {
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

        // this.props.updateListWord(); 
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-header">
                    <div className="row">
                        <div className="col-12">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Add new word</div>
                        </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                        <div className="col-12 col-xl-8 col-lg-8">
                        <form>
                            <div className="form-group">
                                <label htmlFor="word">Word</label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="word" id="word" aria-describedby="helpId" placeholder="Enter word" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="meaning">Meaning</label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="meaning" id="meaning" aria-describedby="helpId" placeholder="Enter meaning" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Type word</label>
                                <select defaultValue={this.state.defaultType} onChange={(event) => this.isChange(event)} name="type" className="form-control" id="exampleFormControlSelect1">
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
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="image_link" id="image_link" aria-describedby="helpId" placeholder="Enter link image" />
                            </div>
                            <button onClick={this.handleClick} type="reset" className="btn btn-success btn-block">Add</button>
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
        words: state.words
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // updateListWord: () => {
        //     dispatch({
        //         type:"GET_DATA"
        //     })
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWord);