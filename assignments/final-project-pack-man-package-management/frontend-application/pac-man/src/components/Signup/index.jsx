import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is "user"

  const handleSignup = () => {
    if (password.length !== 7) {
      alert('Password must be 7 characters long');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      return <Link to="myShipment" />;
    }
  };

  return (
    <Container className="Signup">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password (7 characters)</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
