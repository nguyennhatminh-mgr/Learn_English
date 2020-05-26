import React, { Component } from 'react';
import {firebaseCon} from '../connect/FirebaseConnect';
import {connect} from 'react-redux';

import Header from './Header';
import {actAddQuestionScriptAudioRequest} from '../actions/action';

class AddAudio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: "",
            sentenceA:"",
            sentenceB:"",
            sentenceC:"",
            sentenceD:"",
            answer:"",
            imageURL:"",
            audioURL:"",
            loadingImage:false,
            loadingAudio:false
        }

        this.setRefImage = (ref) => {
            this.fileImage = ref;
        }

        this.setRefAudio = (ref) => {
            this.fileAudio = ref;
        }
    }
    
    isChangFileImage = () => {
        const file = this.fileImage.files[0];
        if (file){
            this.setState({
                loadingImage:true
            });
            const storageRef = firebaseCon.ref('/image');
            const mainImage = storageRef.child(file.name);
            mainImage.put(file).then((snapshot) => {
                mainImage.getDownloadURL().then((url) => {
                    this.setState({
                        imageURL: url,
                        loadingImage:false
                    });
                });
            });
        }
    }

    isChangFileAudio = () => {
        const file = this.fileAudio.files[0];
        if(file){
            this.setState({
                loadingAudio:true
            });
            const storgeRef = firebaseCon.ref("/audio");
            const mainAudio = storgeRef.child(file.name);
            mainAudio.put(file).then((snapshot) => {
                mainAudio.getDownloadURL().then((url) => {
                    this.setState({
                        audioURL: url,
                        loadingAudio:false
                    });
                });
            });
        }
    }

    isLoadingImage = () => {
        if(this.state.loadingImage){
            return <div className="loader"></div>
        }
    }

    isLoadingAudio = () => {
        if(this.state.loadingAudio){
            return <div className="loader"></div>
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleClickAdd = () => {
        var question_script = {};

        if(!this.state.sentenceA){
            alert("Please fill sentence A");
            return;
        }
        if(!this.state.sentenceB){
            alert("Please fill sentence B");
            return;
        }
        if(!this.state.sentenceC){
            alert("Please fill sentence C");
            return;
        }
        if(!this.state.imageURL){
            alert("Please choose image");
            return;
        }
        if(!this.state.audioURL){
            alert("Please choose file audio");
            return;
        }

        question_script.question = this.state.question;
        question_script.sentenceA = this.state.sentenceA;
        question_script.sentenceB = this.state.sentenceB;
        question_script.sentenceC = this.state.sentenceC;
        question_script.sentenceD = this.state.sentenceD;
        if(this.state.answer === ""){
            question_script.answer = "A";
        }
        else{
            question_script.answer = this.state.answer;
        }
        question_script.imageURL = this.state.imageURL;
        question_script.audioURL = this.state.audioURL;

        this.props.addQuestionScriptAudio(question_script);

        alert("Add audio and script success");
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-header mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-xl-8 col-12">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="question">Question</label>
                                    <input onChange={(event) => {this.isChange(event)}} type="text" className="form-control" name="question" id="question" aria-describedby="helpId" placeholder="Enter question" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sentenceA">Sentence A</label>
                                    <input onChange={(event) => {this.isChange(event)}} type="text" className="form-control" name="sentenceA" id="sentenceA" aria-describedby="helpId" placeholder="Enter sentence A" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sentenceB">Sentence B</label>
                                    <input onChange={(event) => {this.isChange(event)}} type="text" className="form-control" name="sentenceB" id="sentenceB" aria-describedby="helpId" placeholder="Enter sentence B" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sentenceC">Sentence C</label>
                                    <input onChange={(event) => {this.isChange(event)}} type="text" className="form-control" name="sentenceC" id="sentenceC" aria-describedby="helpId" placeholder="Enter sentence C" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sentenceD">Sentence D</label>
                                    <input onChange={(event) => {this.isChange(event)}} type="text" className="form-control" name="sentenceD" id="sentenceD" aria-describedby="helpId" placeholder="Enter sentence D" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="answer">Answer Of Question</label>
                                    <select value={this.state.answerdefault} onChange={(event) => {this.isChange(event)}} className="form-control" name="answer" id="answer">
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Image</label>
                                    <div className="row">
                                        <div className="col">
                                            <input ref={this.setRefImage} onChange={this.isChangFileImage} type="file" className="form-control h-100" name="image" id="image" aria-describedby="helpId" />
                                        </div>
                                        {
                                            this.isLoadingImage()
                                        }
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="audio">Audio</label>
                                    <div className="row">
                                        <div className="col">
                                            <input ref={this.setRefAudio} onChange={this.isChangFileAudio} type="file" className="form-control h-100" name="audio" id="audio" aria-describedby="helpId" />
                                        </div>
                                        {
                                            this.isLoadingAudio()
                                        }
                                    </div>
                                </div>
                                <button type="reset" onClick={this.handleClickAdd} className="btn btn-success btn-block">Add</button>
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
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addQuestionScriptAudio: (question_script) => {
            dispatch(actAddQuestionScriptAudioRequest(question_script));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAudio);