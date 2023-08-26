import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.scss';
import { i18n, getTranslation } from '../../locale.ts';

import { getUserr } from '../../services/packman-service.ts'; 
const Login = () => {
   // State variables for username, password, and login status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [translations, setTranslations] = useState({});

  // Hook for navigation
  const navigate = useNavigate();

   // Function to handle login
  const handleLogin = async() => {
    const  userDetails = {
      userName:username,
      password:password,
    };
    
    // Fetch user data
    const rem= await getUserr(userDetails);
    console.log(rem.userName);
    if (username === rem.userName && password === rem.password) {
      setLoggedIn(true);
      localStorage.setItem("loggedIn",true);
    } else {
      alert('Invalid username or password');
    }
  };

  // Fetch translations on component mount
  useEffect(() => {
    getTranslation(i18n.default).then(dict => setTranslations(t => dict));
}, []);

  if (loggedIn) {
    // export const rem1= rem.userName;

    // Redirect to Dashboard if logged in
    return navigate("/Dashboard");
  }

  

  return (
    // Render the login form
    <Container className="Login">
      <div className="login-container">
        <h2>{translations.home?.login}</h2>
        <Form>
          {/** form to login */}
          <Form.Group controlId="formUsername">
            <Form.Label>{translations.login?.username}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>{translations.login?.password}</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br></br>

          <Button variant="primary" onClick={handleLogin}>
            {translations.home?.login}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
