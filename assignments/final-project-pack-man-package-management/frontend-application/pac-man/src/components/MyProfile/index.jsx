import React, { useState, useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { i18n, getTranslation } from '../../locale.ts';


export default function MyProfile() {
    const [newUsername, setNewUsername] = useState(''); //set username from store
    const [newPassword, setNewPassword] = useState();
    const [newConfirmPassword, setNewConfirmPassword] = useState('');
   
    const handleSave = () => {
        // Check password length and match
        if (newPassword.length !== 7) {
            alert('Password must be 7 characters long');
        } else if (newPassword !== newConfirmPassword) {
            alert('Passwords do not match');
        } else {
            // Create new user object
            var newUser = {
                newUsername,
                newPassword
            }
        }
        //redux call to updte current user, reducer calls api
        console.log(newUser);
    }

    const [translations, setTranslations] = useState({});

    useEffect(() => {
        // Load translations
        getTranslation(i18n.default).then(dict => setTranslations(t => dict));
    }, []);

    return (
        <Container className="Signup">
            <div className="signup-container">
                <h2><svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>{translations.profile?.title}</h2>
                <Form>
                    <Form.Group controlId="formUsername">
                        <Form.Label>{translations.login?.username}</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUsername}
                            placeholder={translations.login?.username}
                            onChange={(e) => setNewUsername(e.target.value)}

                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formPassword">
                        <Form.Label>{translations.profile?.new}</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={translations.profile?.new}
                            onChange={(e) => setNewPassword(e.target.value)}

                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>{translations.profile?.confirm}</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={translations.profile?.confirm}
                            onChange={(e) => setNewConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={handleSave}>
                        {translations.profile?.save}
                    </Button>
                </Form>
            </div>
        </Container>
    )
}
