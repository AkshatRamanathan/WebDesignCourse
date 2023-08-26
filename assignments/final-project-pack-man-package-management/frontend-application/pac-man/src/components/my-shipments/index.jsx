import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './my-shipments.scss';
import { getShipments } from '../../services/packman-service.ts';
import Shipment from '../../models/shipment.ts';


// export const shipmentsData = [
//   {
//     id: 1,
//     trackingId: 'SH123456',
//     cost: '$100',
//     travelTime: '2 days',
//     status: 'In Transit',
//     details: 'Details about the shipment...',
//   },
//   {
//     id: 2,
//     trackingId: 'SH123457',
//     cost: '$300',
//     travelTime: '7 days',
//     status: 'In Transit',
//     details: 'Details about the shipment...',
//   },
//   {
//     id: 3,
//     trackingId: 'SH123458',
//     cost: '$700',
//     travelTime: '3 days',
//     status: 'In Transit',
//     details: 'Details about the shipment...',
//   },
// ];

// Fetch shipments data using the getShipments function
export const shipmentsData = await getShipments();
console.log(shipmentsData);

// Define the MyShipments component
const MyShipments = () => {

   // State variables to hold selected shipment details
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [selectedtrackid, setselectedtrackid] = useState(null);
  const [selectedCost, setselectedCost] = useState(null);
  const [selectedDuration, setselectedDuration] = useState(null);
  const [selectedStatus, setselectedStatus] = useState(null);
  const [selectedServicetype, setServicetype] = useState(null);

  // Event handler for selecting a shipment
  const handleShipmentClick = (Shipment) => {
    setSelectedShipment(Shipment.trackingID);
    setselectedtrackid(Shipment.trackingID)
    setselectedCost(Shipment.cost);
    setselectedDuration(Shipment.duration);
    setselectedStatus(Shipment.status);
    setServicetype(Shipment.serviceType);
  };

  return (
    <Container className="shipments">
      <Row>
        <Col sm={4}>
          <h2>My Shipments</h2>
          <hr />
          <ListGroup>
            {shipmentsData.map((Shipment) => (
              console.log(Shipment),
              <ListGroup.Item
                key={Shipment._id}
                className={selectedShipment === Shipment._id ? 'active' : ''}
                onClick={() => handleShipmentClick(Shipment)}
              >
                {Shipment.trackingID}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          {selectedShipment !== null && (
            <Card className="shipment-details">
              <Card.Body>
                <h2>Shipment Details</h2>
                <p>Tracking ID: {selectedtrackid}</p>
                <p>Cost: {selectedCost}</p>
                <p>Travel Time: {selectedDuration}</p>
                <p>Status: {selectedStatus}</p>
                <p>{selectedServicetype}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const myShipment = () => {
  return <MyShipments />;
};

export default myShipment;
