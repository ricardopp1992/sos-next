import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ServiceContent = () => {
  return (
    <Container>
      <Row className="top-detail">
        <Col lg={3}>
          <h3>What we do</h3>
        </Col>
        <Col lg={9}>
          <p>
            SOS Private Security offers consulting, operations, events, and ongoing relationships with our clients to
            address their security needs and concerns. Our list of services is extensive and we are always working
            with clients to create a security experience that matches their needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceContent;