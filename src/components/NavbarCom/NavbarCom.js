import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./navbar.scss";

const NavbarCom = () => {
    return (
        <div>
            <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand className="Navbar-Brand" href="#home">Capture</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto Nav">
                            <Link to="/" className="nav-item">1.About Us</Link>
                            <Link to="/OurWork" className="nav-item">2.Our Work</Link>
                            <Link to="/ContactUs" className="nav-item">3.Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default NavbarCom;