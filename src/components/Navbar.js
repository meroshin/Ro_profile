import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
        {/* <nav>
            <div className='Navbar'>
                <div className='logo'>
                    <h3>Rr</h3>
                </div>
                <div className='Nav-items'>
                    <ul className='Nav-items'>
                        <li className='nav-links'>
                            <Link to="/" className='navbar-links'>Home</Link>
                            </li>
                        <li className='nav-links'>
                            <Link to="/about" className='navbar-links'>About</Link>
                            </li>
                        <li className='nav-links'>
                            <Link to="/contact" className='navbar-links'>Contact</Link>
                            </li>
                    </ul>
                </div>
            </div>
        </nav> */}

<Navbar collapseOnSelect expand="lg" className='Navbar'>
      <Container> 
        <Navbar.Brand href="/">
        <div className='logo'>
                    <h3>Rr</h3>
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='Toggle-btn' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto Nav-item">
          <Link to="/" className='navbar-links'>Home</Link>
          <Link to="/MyWorks" className='navbar-links'>My Works</Link>
          <Link to="/contact" className='navbar-links'>Contact</Link>
     
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar