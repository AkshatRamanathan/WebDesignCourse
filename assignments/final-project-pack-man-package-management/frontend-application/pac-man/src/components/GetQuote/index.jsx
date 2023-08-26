import React, { useState } from 'react';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';

const GetQuotationPage = () => {
  // State variables to manage user inputs and calculated values
  const [packageType, setPackageType] = useState('document');
  const [weight, setWeight] = useState('');
  const [baseCost, setBaseCost] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateQuotation = () => {
    let baseCost = 0;
  if (packageType === 'document') {
    baseCost = 100;
  } else if (packageType === 'food') {
    baseCost = 120;
  }

  // Calculate taxes (e.g., 10% of base cost)
  const taxes = 0.1 * baseCost;

  // Calculate delivery charge based on weight
  const deliveryCharge = weight * 2;

  // Calculate total cost
  const totalCost = baseCost + taxes + deliveryCharge;

  // Update state variables
  setBaseCost(baseCost);
  setTaxes(taxes);
  setDeliveryCharge(deliveryCharge);
  setTotalCost(totalCost);
  };

  return (
    <Container className="get-quotation-container">
      <h2>Get Quotation</h2>
      <Form>
        <Form.Group controlId="packageType">
          <Form.Label>Package Type</Form.Label>
          <Form.Control
            as="select"
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
          >
            <option value="document">Document</option>
            <option value="food">Food</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>
        <Button variant="warning" onClick={calculateQuotation}>
          Calculate Quotation
        </Button>
      </Form>
      {/* Quotation table */}
      <Table className="quotation-table">
        <thead>
          <tr>
            <th>Details</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Cost</td>
            <td>${baseCost.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td>${taxes.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Delivery Charge</td>
            <td>${deliveryCharge.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td>${totalCost.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default GetQuotationPage;
