import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ADDShipment } from '../../services/packman-service.ts';

//creating shipment modal to save all the details
const CreateShipmentModal = ({ showModal, closeModal, createShipment }) => {
  const [shipmentData, setShipmentData] = useState({
    saddress: '',
    rname: '',
    raddress: '',
    dimension: '',
    details: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShipmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [selectedFromaddress, setFromaddress] = useState('');
  const [selectedToname, setToname] = useState('');
  const [selectedToaddress, setToaddress] = useState('');
  const [selectedPackageType, setPackageType] = useState('');
  const [selectedLength, setLength] = useState('');
  const [selectedBreadth, setBreadth] = useState('');
  const [selectedHeight, setHeight] = useState('');
  const [selectedServicetype, setServicetype] = useState('');

  //saving the details entered after submitting
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(selectedPackageType+'jkb');
    const  shipmentDetails = {
      packageData:{
        from:selectedFromaddress,
        toName: selectedToname,
        toAddress: selectedToaddress,
         dimension: {
            length : selectedLength,
            breadth : selectedBreadth,
            height : selectedHeight,
          },
          packageType :'DOCUMENT',
      },
      serviceType:selectedServicetype,
    };
    const rem= await ADDShipment(shipmentDetails);
    
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Shipment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form onSubmit={handleSubmit}> */}
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="saddress">
              {/*Taking all the details to create shipment*/}
              <Form.Label>Pick-up address</Form.Label>
              <Form.Control
                type="text"
                name="saddress"
                value={selectedFromaddress}
                onChange={(e) => setFromaddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="rname">
              <Form.Label>Recipient Name</Form.Label>
              <Form.Control
                type="text"
                name="rname"
                value={selectedToname}
                onChange={(e) => setToname(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="raddress">
              <Form.Label>Recipient Address</Form.Label>
              <Form.Control
                type="text"
                name="raddress"
                value={selectedToaddress}
                onChange={(e) => setToaddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="packageInfo">
            <Form.Label>Package Type</Form.Label>
            <Form.Control
                as="select"
                name="packageType"
                value={selectedPackageType}
                onChange={(e) => setPackageType(e.target.value)}
            >
                <option value="document">Document</option>
                <option value="food">Food</option>
                <option value="other">Other</option>
            </Form.Control>
            </Form.Group>
            <Form.Group controlId="dimension">
              <Form.Label>Package length (mm)</Form.Label>
              <Form.Control
                type="number"
                name="length"
                value={selectedLength}
                onChange={(e) => setLength(e.target.value)}
              />
               <Form.Label>Package breadth (mm)</Form.Label>
              <Form.Control
                type="number"
                name="breadth"
                value={selectedBreadth}
                onChange={(e) => setBreadth(e.target.value)}
              />
               <Form.Label>Package height (mm)</Form.Label>
              <Form.Control
                type="number"
                name="height"
                value={selectedHeight}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="details">
              <Form.Label>Additional Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="details"
                value={selectedServicetype}
                onChange={(e) => setServicetype(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Shipment
            </Button>
          </Form>
        {/* </Form> */}
      </Modal.Body>
    </Modal>
  );
};
//exporting the component to add it in the dashboard page
export default CreateShipmentModal;
