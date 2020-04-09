import React, { Component } from 'react';
import Header from './Header';
import ConnectionVocabItem from './ConnectionVocabItem';

class ConnectionVocab extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mb-5 mt-header">
                    <div className="row">
                        <div className="col-12">
                            <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Connection - Thử thách vốn từ vựng của bạn</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-white bg-primary mb-3 my-border-radius">
                            <div className="d-flex title-question">
                                <div className>Time: <span>00</span>:<span>01</span>:<span>30</span></div>
                                <div className><span>1</span> right | <span>0</span> wrong</div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                    </div>
                    <div className="row justify-content-center">
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                    </div>
                    <div className="row justify-content-center">
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                    </div>
                    <div className="row justify-content-center">
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                        <ConnectionVocabItem/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConnectionVocab;