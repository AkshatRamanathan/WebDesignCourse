import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { i18n, getTranslation } from '../../locale.ts';

export default function NotFound() {
  const navigate = useNavigate();
  const [sec, setSec] = useState(5);

  const [translations, setTranslations] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setSec(sec - 1);
    }, 1000)
    setTimeout(() => {
      navigate("/");
    }, 5000)
    getTranslation(i18n.default).then(dict => setTranslations(t => dict));
  })
  return (
    <Container>
      <Row>
        <Col>
          <Alert lg className='text-center' variant='warning'>
            <h2>{translations.error?.notfound}</h2>
            <hr />
            <p>{translations.error?.redirect} {sec} secs. If not, please <Link to="/">click here</Link></p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}
