import React, { useEffect, useState } from 'react'
import { Navbar, Container, Row, Col, Alert } from 'react-bootstrap';
import logo from '../../assets/logo.jpg';
import './Home.scss';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { i18n, getTranslation } from '../../locale.ts';

export default function Home() {
    //main page 
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('loggedIn') ?? false;

    // Function to handle user logout
    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        window.location.replace("/");
    }

    // State variable for translations
    const [translations, setTranslations] = useState({});

     // Fetch translations on component mount
    useEffect(() => {
        getTranslation(i18n.default).then(dict => setTranslations(t => dict));
    }, []);

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/">
                                <Navbar.Brand>
                                    <img
                                        src={logo}
                                        width="70"
                                        height="50"
                                        className="d-inline-block align-top"
                                        alt="App logo"
                                    />{''}
                                    <h3 className="d-inline-block" style={{paddingTop: '10px'}}>Pack-Man: Package Management</h3>
                                </Navbar.Brand>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="auto">
                            {
                                isLoggedIn ?
                                    <Link onClick={handleLogout} className="btn btn-warning btn-lg">Logout</Link>
                                    :
                                    <Link to="login" className="btn btn-warning btn-lg">{translations.home?.login}</Link>
                            }
                        </Col>
                        <Col xs="auto">
                            {
                                isLoggedIn ?
                                    <Link to='myProfile' className="btn btn-warning btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                                  </svg></Link>
                                    :
                                    <Link to="signup" className="btn btn-warning btn-lg">{translations.home?.signup}</Link>
                            }
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Alert xs='auto' variant='warning' className=''>
                {translations.home?.about}
            </Alert>
            {
                isLoggedIn &&
                <Navbar className="bg-light" expand="lg">
                    <Container >
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Dashboard">{translations.dashboard?.title}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/myShipment">{translations.shipments?.myshipment}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/getQuote">{translations.dashboard?.quote}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/track">{translations.dashboard?.track}</Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
            <br />
            {/* Outlet for rendering nested routes */}
            <Outlet />

            <Footer />
        </>
    )
}
