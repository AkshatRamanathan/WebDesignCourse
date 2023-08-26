//importing all the components
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, FormControl, ListGroup } from 'react-bootstrap';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import {shipmentsData} from './../my-shipments/index';
import CreateShipmentModal from '../CreateShipmentModal/CreateShipmentModal';
import img4 from './../../assets/img4.jpeg';
import { i18n, getTranslation } from '../../locale.ts';


export default function Dashboard() {
  //creating a modal for create shipment option
  const [showModal, setShowModal] = useState(false);
  const [shipmentData, setShipmentData] = useState({
    saddress: '',
    rname: '',
    raddress: '',
    dimension: '',
    details: '',
  });

  console.log(shipmentsData)

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShipmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
//create shipment button to show modal
  const createShipment = (shipment) => {
    console.log('New Shipment:', shipment);
  };

  //searching the shipment status using tracking id
  const handleSearch = () => {
    // Implement the search and redirection logic here
  };
  
  const [translations, setTranslations] = useState({});

    useEffect(() => {
        getTranslation(i18n.default).then(dict => setTranslations(t => dict));
    }, []);

  return (
    <div id="Dashboard">
      <Container className='mainbox'>
        <Row>
          <Col xs={8}>
            {/*main page image*/}
            <img className='png' src={img4} alt="" />
          </Col>
          <Col xs={4} className='rightnav'>
            <h3 className='myship'>{translations.shipments?.myshipment}</h3>
            <hr />
             {/*All shipments in display*/}
            <ListGroup>
            {shipmentsData.map((shipment) => (
              <ListGroup.Item
                key={shipment.id}
                //className={selectedShipment === shipment.id ? 'active' : ''}
                //onClick={() => handleShipmentClick(shipment.id)}
              >
                {shipment.trackingID}
              </ListGroup.Item>
            ))}
          </ListGroup>
          </Col>
        </Row>
        <Row className='mt-3 mb-3'>
          <Col xs={8} className="desc ">
          <div className="shipment-container">
          <Button variant="warning" onClick={openModal} className="create-shipment-btn">
          {translations.shipments?.new}
          </Button>
          <Form inline className="search-form mt-3">
            <FormControl
              type="text"
              name="searchText" 
              placeholder="Search by Tracking ID"
              className="mr-sm-2"
            />
            <Button variant="outline-danger" onClick={handleSearch}>
              {translations.dashboard?.search}
            </Button>
          </Form>
          </div>    
          </Col>
          <Col xs={4} className="righttxt">
            External Links
            <hr />
            <ListGroup>
              <ListGroup.Item>
                <Link className="nav-link" to="/Dashboard">{translations.dashboard?.title}</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="nav-link" to="/myShipment">{translations.shipments?.myshipment}</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="nav-link" to="/getQuote">{translations.dashboard?.quote}</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="nav-link" to="/track">{translations.dashboard?.track}</Link>

              </ListGroup.Item>


            </ListGroup>
          </Col>
        </Row>
        <CreateShipmentModal
        showModal={showModal}
        closeModal={closeModal}
        createShipment={createShipment}
      />
      </Container>
    </div >
  );
  }

