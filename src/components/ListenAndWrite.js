import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';

import {actGetAudioDetailRequest, actGetAudioScriptRequest} from '../actions/action';
import { Link } from 'react-router-dom';

class ListenAndWrite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false
        }
    }
    

    onClickRewindingLeft = () => {
        var myaudio = document.getElementById("myaudio");
        if(myaudio){
            myaudio.currentTime -= 5;
        }
    }

    onClickRewindingRight = () => {
        var myaudio = document.getElementById("myaudio");
        if(myaudio){
            myaudio.currentTime += 5;
        }
    }

    onToggelAudio = () => {
        var myaudio = document.getElementById("myaudio");
        if(myaudio){
            if(myaudio.paused){
                myaudio.play();
            }
            else{
                myaudio.pause();
            }
        }
    }

    componentDidMount() {
        this.props.getAudioDetail(this.props.match.params.id);
        this.props.getAudioScript(this.props.match.params.id);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        // console.log(nextProps);
    }

    showQuestion = (question) => {
        if(!question){
            return "Question have image to listen ";
        }
        else{
            return question + "?";
        }
    }

    showABCD = (index) => {
        if(index === 0){
            return "A. ";
        }
        else if (index === 1){
            return "B. ";
        }
        else if (index === 2){
            return "C. ";
        }
        else{
            return "D. ";
        }
    }

    showImage = () => {
        // if(!this.props.audio.image_link){
        if(! this.state.imageLoaded){
            return (
                <div className="img-audio-listen-write d-flex align-items-center">
                    <div className="loader"></div>
                </div>
            );
        }
        else{
            return <img onLoad={this.checkImageIsLoaded} className="img-fluid img-audio-listen-write" src={this.props.audio.image_link} alt="" />;
        }
    }

    checkImageIsLoaded = () => {
        this.setState({
            imageLoaded: true
        });
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-header mb-5">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="d-flex justify-content-center">
                                {
                                    this.showImage()
                                }
                                <img onLoad={this.checkImageIsLoaded} className="d-none" src={this.props.audio.image_link} alt="" />
                            </div>
                            <audio preload="true" className="w-100 mt-3" id="myaudio" src={this.props.audio.audio_link} controls />
                            <div className="button-group text-center">
                                <button onClick={this.onClickRewindingLeft} id="btn-rewinding-left" className="btn btn-success bg-btn-audio"><i className="fas icon-color fa-arrow-left mr-1" /><span className="icon-color">5s</span></button>
                                <button onClick={this.onToggelAudio} id="btn-toggle-play" className="btn btn-success bg-btn-audio"><i className="fas fa-play icon-color" /><i className="fas icon-color fa-pause" /></button>
                                <button onClick={this.onClickRewindingRight} id="btn-rewinding-right" className="btn btn-success bg-btn-audio"><span className="icon-color">5s</span><i className="fas icon-color fa-arrow-right ml-1" /></button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="mb-2">
                                <div>
                                <div className="btn btn-primary mr-1">{this.props.audio.question ? "Question" : "A"}</div>
                                <button className="btn btn-success">Check</button>
                                </div>
                                <textarea className="form-control w-100" name="question_audio_A" rows={2} defaultValue={""} />
                            </div>
                            <div className="mb-2">
                                <div>
                                <div className="btn btn-primary mr-1">{this.props.audio.question ? "A" : "B"}</div>
                                <button className="btn btn-success">Check</button>
                                </div>
                                <textarea className="form-control w-100" name="question_audio_B" rows={2} defaultValue={""} />
                            </div>
                            <div className="mb-2">
                                <div>
                                <div className="btn btn-primary mr-1">{this.props.audio.question ? "B" : "C"}</div>
                                <button className="btn btn-success">Check</button>
                                </div>
                                <textarea className="form-control w-100" name="question_audio_C" rows={2} defaultValue={""} />
                            </div>
                            <div className="mb-2">
                                <div>
                                <div className="btn btn-primary mr-1">{this.props.audio.question ? "C" : "D"}</div>
                                <button className="btn btn-success">Check</button>
                                </div>
                                <textarea className="form-control w-100" name="question_audio_D" rows={2} defaultValue={""} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 d-flex justify-content-center">
                        <Link to="/listquestionaudio" className="btn btn-info mr-1">Return to List</Link>
                        <button className="btn btn-info" data-toggle="modal" data-target="#exampleModalLong">View Transcript</button>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Transcript</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <p>{this.showQuestion(this.props.audio.question)}</p>
        
                                {
                                    this.props.audioscript.map((value,index) => {
                                        if (this.props.audio.answer === value.select_item){
                                            return (
                                                <p className="btn btn-danger" key={index}><span>{value.select_item+". "}</span>
                                                    {value.content_script}
                                                </p>
                                            )
                                        }
                                        else{
                                            return (
                                                <p key={index}><span>{value.select_item+". "}</span>
                                                    {value.content_script}
                                                </p>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Got it</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        audio : state.audiodetail,
        audioscript: state.audioscript
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAudioDetail: (id) => {
            dispatch(actGetAudioDetailRequest(id));
        },
        getAudioScript: (id) => {
            dispatch(actGetAudioScriptRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListenAndWrite);