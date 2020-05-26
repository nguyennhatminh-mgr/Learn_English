import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/img/logo.png';
// import script from '../assets/utility/script';

class Header extends Component {
    componentDidMount() {
        var getHeader = document.getElementById('myheader');
        if (getHeader){
            getHeader.classList.remove('bg-dark');
            getHeader.classList.add('mt-2');
            window.onscroll = () => {
                if(document.documentElement.scrollTop >= 150){
                    getHeader.classList.add('bg-dark');
                    getHeader.classList.remove('mt-2');
                }
                else{
                    getHeader.classList.remove('bg-dark');
                    getHeader.classList.add('mt-2');
                }
            }
        }

        var navbar_toggler= document.getElementById('my-navbar-toggler');
        if(navbar_toggler && getHeader){
            navbar_toggler.onclick=() => {
                if(!navbar_toggler.classList.contains('bg-dark')){
                    getHeader.classList.add('bg-dark');
                    getHeader.classList.remove('mt-2');
                }
            }
        }
    }
    
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light align-items-center fixed-top bg-dark pd-header-mobile" id={this.props.id_header_home}>
                <div className="container">
                    <NavLink className="navbar-brand text-white d-flex align-items-center" to="/">
                    <img src={logo} width={36} height={36} className="d-inline-block align-top" alt="" /> 
                    </NavLink>
                    <button id="my-navbar-toggler" className="navbar-toggler navbar-toggler-btn--border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-list icon-white" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item active">
                            <NavLink className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle text-white mycursor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Learn Tool</div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/choicevocab">Choice Vocabulary</NavLink>
                            <NavLink className="dropdown-item" to="/connectionvocab">Connection Vocabulary</NavLink>
                            <NavLink className="dropdown-item" to="/listquestionaudio">Listen and write</NavLink>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle text-white mycursor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Other tools
                            </div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/puthanddown">Put hand down</NavLink>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle text-white mycursor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin tools
                            </div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/addnewword">Add new word</NavLink>
                                <NavLink className="dropdown-item" to="/viewlistword">View list words</NavLink>
                                <NavLink className="dropdown-item" to="/addaudio">Add audio</NavLink>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;