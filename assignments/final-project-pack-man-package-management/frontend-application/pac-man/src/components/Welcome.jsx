import React from 'react'
import { Alert, Carousel, Col, Row } from 'react-bootstrap';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <>
            <Row>
                <Col xs={5}>
                    <Carousel className="carousel" height="600" >
                        <Carousel.Item xs={3} interval={10000}>
                            <img src={img1} width="500" height="600" alt="img1" />
                            <Carousel.Caption>
                                <h3>Safe</h3>
                                <p>Send your package safely.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item xs={3} interval={5000}>
                            <img src={img2} width="500" height="600" alt="img2" />
                            <Carousel.Caption>
                                <h3>Secure</h3>
                                <p>Secure your package.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item xs={3}>
                            <img src={img3} width="500" height="600" alt="img3" />
                            <Carousel.Caption>
                                <h3>Convenient</h3>
                                <p>Easy help right at your doorstep.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={6} >
                    <Row>
                        <Alert variant='info' >
                            This app is a demonstration of a REST API backend on NodeJS built with the ExpressJS framework.
                            The database connectivity is done using MongooseAPI to MongoDB as this application is build on collection based NoSQL database.
                            The app allowed user to create shipments and get quotation and tracking information for their desired shipments. To learn
                            more login or signup to the application <b><u>NOW</u></b>!
                            <hr />
                            <Row >
                                <Col xs="auto">
                                    <Link to="login" className="btn btn-primary btn-lg">Login</Link>
                                </Col>
                                <Col xs="auto">
                                    <Link to="signup" className="btn btn-primary btn-lg">Sign Up</Link>
                                </Col>
                            </Row>
                        </Alert>
                    </Row>
                    <Row>
                        <Col>
                            <Alert variant='info'>
                                This app is designed and created by the following members:
                                <hr />
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">NU ID</th>
                                            <th scope="col">GitHub</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Akshat Ramanathan</td>
                                            <td>002773371</td>
                                            <td><a target="_blank" rel="noreferrer" href='https://github.com/AkshatRamanathan'>➡️</a></td>
                                        </tr>
                                        <tr>
                                            <td>Abhishek Udayakumar Guragol</td>
                                            <td>002765039</td>
                                            <td><a target="_blank" rel="noreferrer" href='https://github.com/Abhishek-Guragol'>➡️</a></td>
                                        </tr>
                                        <tr>
                                            <td>Shruti Suresh Mundargi</td>
                                            <td>001090508</td>
                                            <td><a target="_blank" rel="noreferrer" href='https://github.com/mundargishruti'>➡️</a></td>
                                        </tr>
                                        <tr>
                                            <td>Faisal Anwar Mohammed</td>
                                            <td>002928537</td>
                                            <td><a target="_blank" rel="noreferrer" href='https://github.com/FaisalAnwarMohammed'>➡️</a></td>
                                        </tr>
                                        <tr>
                                            <td>Xinqi Shao</td>
                                            <td>002602209</td>
                                            <td><a target="_blank" rel="noreferrer" href='https://github.com/xinqishao'>➡️</a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </Alert>
                        </Col>
                    </Row>

                </Col>
            </Row >

        </>
    )
}
