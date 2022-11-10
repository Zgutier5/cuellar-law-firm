import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import the 4 main pages
// import HomePage from "./components/HomePage/HomePage";
import HomePage2 from "./components/HomePage/HomePage2";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import JailReleasePage from "./components/JailReleasePage/JailReleasePage.js"
import ServicesPage from "./components/ServicesPage/ServicesPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
// Page components
import HeaderSocial from './components/HeaderSocial/HeaderSocial';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Footer from './components/Footer/Footer';
import HomePage3 from './components/HomePage/HomePage3';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
      
          <HeaderSocial leftText="Michaela D. Cuellar Attorney at Law"/>
          <HeaderMenu/>
          
          <Routes>
            <Route path="/" element={<HomePage2/>} />
            <Route path="/spanish" element={<HomePage3/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/jailrelease" element={<JailReleasePage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/contact" element={<ContactUsPage/>} />
            {/* TODO add page not found route */}
          </Routes>
          
          <Footer/>
          <HeaderSocial leftText="Copy Rights Design by Z"/>
        </div>
      </Router>
    );
  }
}

export default App;
