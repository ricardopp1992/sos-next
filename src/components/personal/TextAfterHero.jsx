import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TextAfterHero = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} lg={6} className="py-lg-5">
          <h3 className="text-white">
            No matter the situation you find yourself in, we are the private military contractor that ensures you stay out of harm’s way.
            From preventative training to full team support, SOS Private Security is here to keep you safe. 
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default TextAfterHero;