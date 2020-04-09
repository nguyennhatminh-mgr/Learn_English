import React, { Component } from 'react';
import {connect} from 'react-redux';

import ChoiceVocabItem from './ChoiceVocabItem';
import Header from './Header';
import implyimage from '../assets/img/background.jpg';

class ChoiceVocab extends Component {
    render() {
        console.log("This is ChoiceVocab component");
        console.log(this.props.listword);
        return (
            <div>
                <Header></Header>
                <div className="container mt-header">
                    <div className="row">
                        <div className="col-12">
                            <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Learn vocabulary</div>
                            </div>
                        </div>
                    </div>
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
                        <div className="col-xl-6 col-lg-8 col-md-8 col-10">
                            <img className="img-fluid" src={implyimage} alt="" />
                            {
                               this.props.listword?.map((value,key) => {
                                   return (
                                    <div key={key}>
                                        <p className="p-2 bg-primary">{value.meaning}</p>
                                    </div>
                                   
                                   );
                               }) 
                            }
                        </div>
                    </div>

                    <div className="row">
                        <ChoiceVocabItem></ChoiceVocabItem>
                        <ChoiceVocabItem></ChoiceVocabItem>
                    </div>

                    <div className="row">
                        <ChoiceVocabItem></ChoiceVocabItem>
                        <ChoiceVocabItem></ChoiceVocabItem>
                    </div>
                    
                    <div className="row mb-3">   
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-info mr-2"><i className="fas fa-arrow-left" /> Previous</button>
                            <button className="btn btn-info">Next <i className="fas fa-arrow-right" /></button>
                        </div>         
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listword: state.listword
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChoiceVocab);