import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {actGetListAudioRequest} from '../actions/action';

class ListQuestionAudio extends Component {

    showQuestion = (question, id) => {
        if(!question){
            return "Exercise have an illustration " + id;
        }
        else{
            return "Exercise have a question " + id;
        }
    }

    componentDidMount() {
        this.props.getListAudio();
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-header mb-5">
                    <div className="row d-flex justify-content-center">

                    <div className="col-xl-6 col-lg-6 col-12">
                            <table className="table table-hover table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">List questions for part 1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.listAudio.map((value, index) => {
                                            if(!value.question){
                                                return (
                                                    <tr className="mycursor" key={index}>
                                                        <td>
                                                            <Link to={"/listenandwrite/" + value.question_id + ".html"} className="custom_link">
                                                                <i className="fas fa-code mr-3"></i>
                                                                <span>
                                                                    {this.showQuestion(value.question,index+1)}
                                                                </span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                            else{
                                                return null;
                                            }
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-12">
                            <table className="table table-hover table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">List questions for part 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.listAudio.map((value, index) => {
                                            if(value.question){
                                                return (
                                                    <tr className="mycursor" key={index}>
                                                        <td>
                                                            <Link to={"/listenandwrite/" + value.question_id + ".html"} className="custom_link">
                                                                <i className="fas fa-code mr-3"></i>
                                                                <span>
                                                                    {this.showQuestion(value.question,index+1)}
                                                                </span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                            else{
                                                return null;
                                            }
                                        })
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
        listAudio: state.audios
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListAudio: () => {
            dispatch(actGetListAudioRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListQuestionAudio);
