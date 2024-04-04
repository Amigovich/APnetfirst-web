import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
    <footer className="footer">
        <Navbar>
        <Nav className="mr-auto">
            <Nav.Link href="/" target="_blank" rel="noopener noreferrer">
            Phone: 952-212-7499
            </Nav.Link>
            <Nav.Link href="/" target="_blank" rel="noopener noreferrer">
            Email: info@aphomesvc.com
            </Nav.Link>
        </Nav>
        <Navbar.Text>&copy; {new Date().getFullYear()} AP Home Services. All rights reserved.</Navbar.Text>
        </Navbar>
    </footer>
    );
}

export default Footer;
