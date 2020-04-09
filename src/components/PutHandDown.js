import React, { Component } from 'react';
import Header from './Header';
import myvideo from '../assets/img/hongphuoc.mp4';

class PutHandDown extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-header mb-5">
                    <div className="row d-flex justify-content-center">
                        <video className="col-xl-6 col-lg-8 col-md-8 col-11" controls src={myvideo} />
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                        <button className="btn btn-primary position-absolute d-none">Học gương mặt lúc không chạm tay</button>
                        <button className="btn btn-primary position-absolute d-none">Học gương mặt lúc chạm tay</button>
                        <button className="btn btn-primary">Trải nghiệm ứng dụng</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PutHandDown;