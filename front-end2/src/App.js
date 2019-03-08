import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;