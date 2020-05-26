import React, { Component } from 'react';
import {connect} from 'react-redux';

import {actOndeleteRequest} from '../actions/action';
import { Link } from 'react-router-dom';

class WordItem extends Component {

    onDelete = (id) => {
        if(confirm("Are you sure want to delete this word?")){ //eslint-disable-line
            this.props.onDeleteWord(id);
        }
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.sst + 1}</th>
                <td>{this.props.word}</td>
                <td>{this.props.meaning}</td>
                <td>{this.props.type}</td>
                <td className="w-25"><img className="w-100" src={this.props.image_link} alt="show implied word"></img></td>
                <td>
                    <div className="btn-group">
                        <Link to={"/deleteword/" + this.props.id +".html"} className="btn btn-warning mr-1 d-flex align-items-center"><i className="far fa-edit"></i></Link>
                        <button onClick={() => this.onDelete(this.props.id)} className="btn btn-danger d-flex align-items-center"><i className="far fa-trash-alt mr-1"></i></button>
                    </div>  
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteWord: (id) => {
            dispatch(actOndeleteRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordItem);