import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Jumbotron fluid className="mb-0">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img
                  src="\assets\img\capitol-icon.jpg"
                  alt="Header Icon"
                  width="85"
                  id="icon"
                />
              </div>
              <div className="col">
                <h1>
                  <strong>Capitol Coffee & Pastry</strong>
                </h1>
                <h2 id="subTitle">More Than Just Coffee!</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="\assets\img\capitol-icon.jpg"
                height="30"
                width="30"
                alt="Capitol Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/locationhours">
                    Location & Hours
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;