import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
// import the 4 main pages
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
// Page components
import HeaderSocial from './components/HeaderSocial';
import HeaderMenu from './components/HeaderMenu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
      
          <HeaderSocial/>
          {/* <HeaderMenu/> */}
  
          <Route path="/" exact component={HomePage} />
          <Route path="/profile/" component={ProfilePage} />
          <Route path="/services/" component={ServicesPage} />
          <Route path="/contact/" component={ContactUsPage} />
        
        </div>
      </Router>
    );
  }
}

export default App;
