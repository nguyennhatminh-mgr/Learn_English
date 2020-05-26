import React, { Component } from 'react';

class ChoiceVocabItem extends Component {
    showABCD = () => {
        const {bgChoice} = this.props;
        if(bgChoice === "bg-warning"){
            return "A";
        }
        else if (bgChoice === "bg-success"){
            return "B";
        }
        else if (bgChoice === "bg-danger"){
            return "C";
        }
        else{
            return "D";
        }
    }
    render() {
        const {bgChoice, content, wordShown} = this.props;
        return (
            <div className="col-6" onClick={() => {this.props.funcCheckRightOrWrong(content, wordShown)}}>
                <div className={"card text-white mb-3 mycursor "+ bgChoice}>
                    <div className="card-header">{ this.showABCD() }</div>
                    <div className="card-body">
                        <h5 className="card-title">{content.word}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChoiceVocabItem;