import React, { Component } from 'react';
import Header from './Header';
import {NavLink} from 'react-router-dom';
import avatar from '../assets/img/my_avatar.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="bg-container overlay" />
                    {/* Header */}
                    <Header id_header_home="myheader"></Header>
                    <div className="position-absolute title">
                        <h1 className="text-white mb-3">Welcome to learning website</h1>
                        <h5 className="text-white mb-5">Learn new things with easy method</h5>
                        <NavLink to="/" className="btn btn-primary">Get started</NavLink>
                    </div>
                </div>

                {/* Body home*/}
                <div className="container">
                    <div className="row mt-5">
                        <h4 className="col">About me</h4>
                    </div>
                    <div className="row mt-3 mb-3" >
                        <img src={avatar} alt="" className="col-12 col-sm-11 col-xl-5 col-lg-5 col-md-5 mb-5" />
                        <div className="col-xl-1 col-lg-1 col-md-1 col-0 col-sm-0" />
                        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-11 d-flex align-items-center">
                        <div>
                            <p>Don't put off till tomorrow what you can do today</p>
                            <p>Good luck!!!</p>
                        </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <h4 className="col">Some video</h4>
                    </div>
                    <div className="row mb-5 justify-content-center">
                        <div className="col-12 col-xl-8 col-lg-8 col-md-10">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Video music" className="embed-responsive-item" src="https://www.youtube.com/embed/wog7Aiol-pk" />
                        </div>
                        </div>
                    </div>
                    <div className="row mb-5 justify-content-center">
                        <div className="col-12 col-xl-8 col-lg-8 col-md-10">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Video music" className="embed-responsive-item" src="https://www.youtube.com/embed/A4woMa7Cm1o" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;