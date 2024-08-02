import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/nav.css';
;
function TopNav(){
    // const navRef = useRef();

    // const shownavbar = () => {
    //     navRef.current.classList.toggle('responsive_nav');
    // }
    return  <>
       {/* <header>
           <h3 className='logo'>SilverScreen Pulse</h3>
       <nav className='navbar' ref={navRef}>
            <a href='#Home'>Home</a>
            <a href='#English'>English</a>
            <a href='#Telugu'>Telugu</a>
            <a href='#Hindi'>Hindi</a>
            <a href='#Tamil'>Tamil</a>
            <a href='#Malayalam'>Malayalam</a> 
            <button onClick={shownavbar} className='nav-btn nav-close-btn'>
                <FaTimes/>
            </button>
        </nav>
            <button className='nav-btn' onClick={shownavbar}>
                <FaBars/>
            </button>
       </header> */}



        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >SilverScreen Pulse<span className='caption'> : Pulsating Flicks</span></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link1">English</Nav.Link>
                    <Nav.Link href="#link2">Telugu</Nav.Link>
                    <Nav.Link href="#link3">Hindi</Nav.Link>
                    <Nav.Link href="#link4">Tamil</Nav.Link>
                    <Nav.Link href="#link5">Malayalam</Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>


        
    </>
}

export default TopNav;