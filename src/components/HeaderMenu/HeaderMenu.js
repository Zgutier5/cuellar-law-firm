import React, { Component } from 'react';
import "./HeaderMenu.css";
import Responsive from 'react-responsive';
import LogoImg from "../../assets/newlogo.png";
import { NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  
  render() {
    return (
      <div>
        <Default>


        <Navbar color="light" light expand="lg">
          {/* This is the logo */}
          <NavbarBrand tag={Link} to="/">
            <img src={LogoImg} alt="Michaela D. Cuellar - Attorney at Law" />
          </NavbarBrand>
          {/* this is the part of the header the collapses on mobile */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="ml-auto">
              <div className="header-container">
                {/* Home link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/">
                    <div className="header-link-text">Home</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>

                <div className="header-link-container">
                  <Link className="menu-link" exact to="/spanish">
                    <div className="header-link-text">Español</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
    
                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/profile">
                    <div className="header-link-text">Profile</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>

                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/jailrelease">
                    <div className="header-link-text">Jail Release</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                {/* Services Offered link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/services">
                    <div className="header-link-text">Services Offered</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                {/* Contact link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/contact">
                    <div className="header-link-text">Contact Us</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
                
              </div>
            </div>
          </Collapse>
        </Navbar>

        </Default>
        <Mobile>
        <Navbar color="light" light expand="lg">
          {/* This is the logo */}
          <NavbarBrand tag={Link} to="/">
            <img src={LogoImg} alt="Michaela D. Cuellar - Attorney at Law" />
          </NavbarBrand>
          {/* this is the part of the header the collapses on mobile */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="ml-auto">
              <div className="header-container">
                {/* Home link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/">
                    <div className="header-link-text">Home</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>

                <div className="header-link-container">
                  <Link className="menu-link" exact to="/spanish">
                    <div className="header-link-text">Español</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
    
                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/profile">
                    <div className="header-link-text">Profile</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>

                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/jailrelease">
                    <div className="header-link-text">Jail Release</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                {/* Services Offered link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/services">
                    <div className="header-link-text">Services Offered</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                {/* Contact link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/contact">
                    <div className="header-link-text"></div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
                
              </div>
            </div>
          </Collapse>
        </Navbar>
        </Mobile>
      </div>
    );
  }
}

export default HeaderMenu;

/*


 */

