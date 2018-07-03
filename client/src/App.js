import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import VolunteerCards from './components/volunteercards';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupForm from './components/signupform';
import HomePage from './components/homepage';
import About from './components/aboutus';
class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="App">
        <NavBar />
        <Route path="/signup" exact strict component={SignupForm} />
        <Route path="/" exact strict component={HomePage} />
        <Route path="/aboutus" exact strict component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
