import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

function NavBar() {

    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    const changeToggle = () => {
        setToggle(prevToggle => !prevToggle);
    }

    useEffect(() => {

        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                // console.log('scroll more than 50')
            } else {
                setScrolled(false);
                // console.log('scroll less than 50')
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} style={{ padding: '0rem' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ width: '300px' }}>
                    <img src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "#fff" }}>
                    <span className='navabar-toggler-icon' onClick={changeToggle} >
                        {toggle ? <AiOutlineClose /> : <GiHamburgerMenu />}

                    </span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>     Home      </Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>   Skills    </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}> Projects  </Nav.Link>
                        <Nav.Link href="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}> Certificates  </Nav.Link>

                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/naman-kumar-5916a7182/" target="_blank"><img src={navIcon1} alt="linkedin-Icon" /></a>
                            <a href="https://github.com/Namankumar199" target="_blank"><img src={navIcon2} alt="github-Icon" style={{ color: '#fff' }} /></a>
                            <a href="https://www.geeksforgeeks.org/user/infonama1day/" target="_blank"><img src={navIcon3} alt="GeeksForGeeks-Icon" /></a>
                        </div>
                        <button className="" onClick={() => console.log('connect')}>
                            <span>
                                Let's Connect
                            </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar
