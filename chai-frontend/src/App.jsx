import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import BooksPage from './pages/BooksPage/BooksPage';
import ComposePage from './pages/ComposePage/ComposePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component = {LandingPage}/>
          <Route path='/login' component = {LoginPage}/>
          <Route path='/books' component = {BooksPage}/>
          <Route path='/compose' component = {ComposePage}/>
        </div> 
      </Router>
    );
  }
}

export default App;
