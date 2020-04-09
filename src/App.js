import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Footer from './components/Footer';
import RedirectURL from './router/RedirectURL';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      mylistword:null
    }
  }
  
  render(){
    return (
      <Router>
        <div>
          <RedirectURL></RedirectURL>
          <Footer></Footer>
        </div>
      </Router>
      
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // getAllWords: () => {
    //   dispatch(actGetWordsRequest());
    // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
