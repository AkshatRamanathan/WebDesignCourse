import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup} from 'react-bootstrap';
import { DELShipment, PUTShipment, getShipments } from '../../services/packman-service.ts';
import Shipment from '../../models/shipment.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrackShipment.scss';
// export const shipmentsData = [
//   {
//     id: 1,
//     trackingId: 'SH123456',
//     cost: '$100',
//     duration: '2 days',
//     status: 'DELIVERED',
//     serviceType: 'GROUND',
//   },
//   {
//     id: 2,
//     trackingId: 'SH123457',
//     cost: '$300',
//     duration: '7 days',
//     status: 'In Transit',
//     serviceType: 'EXPRESS',
//   },
//   {
//     id: 3,
//     trackingId: 'SH123458',
//     cost: '$700',
//     duration: '3 days',
//     status: 'In Transit',
//     serviceType: 'GROUND',
//   },
// ];


// Fetch shipment data using the getShipments function
export const shipmentsData = await getShipments();
console.log(shipmentsData);
const TrackShipment = () => {

  // State variables to manage selected shipment details
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [selectedTrackingId, setTrackingId] = useState(null);
  const [selectedId, setId] = useState(null);
  const [selectedModify, setModify] = useState(null);
  const [selectedStatus, setStatus] = useState('');
  const [selectedCost, setCost] = useState('');
  const [selectedDuration, setDuration] = useState('');
  const [selectedType, setType] = useState('');
  const [ClassName, setClassName] = useState(null);

  // Function to handle tracking and modification of shipments
  const handleTrack = async(e) => {
    e.preventDefault();
    console.log('up');
    const clickedButton = e.nativeEvent.submitter.id;
    if(clickedButton === 'submit')
    // Logic to determine CSS class based on selectedStatus
    {
      const getClassName = () => {
        switch (selectedStatus) {
          case 'IN_TRANSIT':
            return 'in-transit';
          case 'DELIVERED':
            return 'delivered';
          case 'CANCELLED':
            return 'cancelled';
          case 'CREATED':
            return 'created';
          case 'PICKED_UP':
              return 'pickedup';
          default:
            return '';
        }
      };
      setStatus(selectedStatus);
      setClassName(getClassName());
      //setTrackingId(e.target.value);
    }
    else if(clickedButton === 'modify')
    {
      console.log('heree');
      
      // setStatus(shipment.status);
      // setDuration(shipment.duration);
      // setCost(shipment.cost);
      // setType(shipment.serviceType);
      setModify(e.target.value);
    }
    else if(clickedButton === 'cancel')
    {
      console.log('heree');
      const updatedshipment=await DELShipment(selectedId);
      // setStatus(shipment.status);
      // setDuration(shipment.duration);
      // setCost(shipment.cost);
      // setType(shipment.serviceType);
      window.location.reload();
    }
     

    
    // Perform tracking logic here
  };
  //const [selectedShipment, setSelectedShipment] = useState(null);
  const handleModify=async (event)=>{
    event.preventDefault();
    const shipmentModel={
      _id:selectedId,
      serviceType:selectedType,
      status:selectedStatus,
      cost:selectedCost,
      duration:selectedDuration,
  }
  console.log('sgvf');
  const updatedshipment=await PUTShipment(selectedId,shipmentModel);
  window.location.reload();
  }
  // Function to handle shipment modification
  const handleShipmentClick = (shipment) => {
    setId(shipment._id);
    setSelectedShipment(shipment.trackingID);
    setTrackingId(shipment.trackingID);
    setStatus(shipment.status);
    setDuration(shipment.duration);
    setCost(shipment.cost);
    setType(shipment.serviceType);
  };
  
  return (
    <Container className="mt-5">
      <Row className='shipments mb-3'>
      <Col sm={4}>
          <h2>My Shipments</h2>
          <hr />
          <ListGroup>
            {shipmentsData.map((shipment) => (
              <ListGroup.Item
                key={shipment._id}
                className={selectedShipment === shipment._id ? 'active' : ''}
                onClick={() => handleShipmentClick(shipment)}
              >
                {shipment.trackingID}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={8} className='rightShopments'>
          {/* <h2>Track Shipment</h2> */}
          {selectedShipment !== null && ( <Form onSubmit={handleTrack}>

            <Row>
              <Col xs={8}>
                <Form.Group >
                  <Form.Label>Shipment Tracking ID</Form.Label>
                  <Form.Control
                    
                    type="text"
                    placeholder="Enter tracking ID"
                    //value={shipmentsData[selectedShipment - 1].trackingId}
                    value={selectedTrackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={4} className='btn-group'>
                <Button variant="danger" type="submit"  id="cancel">
                  Cancel
                </Button>
              </Col>
              <Col xs={4} className='btn-group'>
                <Button variant="success" type="submit" id="submit">
                Submit
                </Button>
              </Col>
              <Col xs={4} className='btn-group'>
                <Button variant="warning" type="submit" id="modify">
                  Modify
                </Button>
              </Col>
            </Row>
          </Form>
          )}
          {selectedModify !== null && ( <Form onSubmit={handleModify}>

            <Row>
              <Col xs={8}>
                <Form.Group >
                  <Form.Label>Shipment Tracking ID</Form.Label>
                  <Form.Control
                    
                    type="text"
                    placeholder="Enter tracking ID"
                    value={selectedTrackingId}
                    //value={selectedTrackingId}
                    //onChange={(e) => setTrackingId(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={8}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedStatus}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="in-transit">In Transit</option>
                    <option value="delivered">Delivered</option>
                    <option value="pending">Pending</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={8}>
                <Form.Group>
                  <Form.Label>Cost</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter cost"
                    value={selectedCost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </Form.Group>
              </Col>
          <Col xs={8}>
              <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter duration"
                  value={selectedDuration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </Form.Group>
          </Col>
          <Col xs={8}>
            <Form.Group>
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                    as="select"
                    value={selectedType}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="EXPRESS">EXPRESS</option>
                    <option value="GROUND">GROUND</option>
                    
              </Form.Control>
            </Form.Group>
          </Col>
              <Col xs={4} className='btn-group'>
                <Button variant="variant" type="submit"  id="update">
                  Update
                </Button>
              </Col>
              </Row>
            </Form>
            )}
           {/* //<p className='title  mt-3'>Package Status</p> */}
           {ClassName !== null && (
          <Card className="mt-2">
            <Card.Body>
              <h4>Package Status</h4>
              <h3>{selectedStatus}</h3>
              <div className="progress-bar">
                  <div className={`progress ${ClassName}`} ></div>
               </div>
             
            </Card.Body>
          </Card> )}
        </Col>
      </Row>
    </Container>
  );
};
export default TrackShipment;
//   return (
//     <Container className="mt-5">
//       <Row className='shipments mb-3'>
//         <Col xs={4} className="leftShipments">
//           <p className='tit'>My Shipments</p>
//           <ul>
//             <li>Feature 1</li>
//             <li>Feature 2</li>
//             <li>Feature 3</li>
//             <li>Feature 4</li>
//             <li>Feature 5</li>
//             <li>Feature 6</li>
//           </ul>
//         </Col>
//         <Col xs={8} className='rightShopments'>
//           {/* <h2>Track Shipment</h2> */}
//           <Form onSubmit={handleTrack}>

//             <Row>
//               <Col xs={8}>
//                 <Form.Group controlId="trackingId">
//                   <Form.Label>Shipment Tracking ID</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter tracking ID"
//                     value={trackingId}
//                     onChange={(e) => setTrackingId(e.target.value)}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col xs={4}>
//                 <Button variant="success" type="submit" className='mt-4' id="submit">
//                   Submit
//                 </Button>
//               </Col>
//               <Col xs={8} className='mt-3'>
//                 <Button variant="danger" type="button" id="cancel">
//                   Cancel
//                 </Button>
//               </Col>
//               <Col xs={4} className='mt-3'>
//                 <Button variant="warning" type="button">
//                   Modify
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//           <p className='title  mt-3'>Package Status</p>
//           <Card className="mt-2">
//             <Card.Body>
//               <h4>Package Status</h4>
//               <div className='linebox btn-group'>
//                 <span className='ball'>
//                   Layer1
//                   <i></i>
//                 </span>
//                 <span className='line btn'></span>
//                 <span className='ball'>
//                   Layer2
//                   <i></i>
//                 </span>
//                 <span className='line btn'></span>
//                 <span className='ball'>
//                   Layer3
//                   <i></i>
//                 </span>
//                 <span className='line btn'></span>
//                 <span className='ball'>
//                   Layer4
//                   <i></i>
//                 </span>
//               </div>
//               <div style={{ overflowY: 'scroll', height: '200px' }}>
//                 <Card.Text>Layer 1: ....</Card.Text>
//                 <Card.Text>Layer 2: ....</Card.Text>
//                 <Card.Text>Layer 3: ....</Card.Text>
//                 <Card.Text>Layer 4: ....</Card.Text>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


