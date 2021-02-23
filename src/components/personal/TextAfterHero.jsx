import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_personal.module.scss';

const TextAfterHero = () => {
  return (
    <Container>
      <Row className={styles.hero_content}>
        <Col sm={12} lg={6} className="py-sm-4 py-md-4 py-lg-5">
          <h5 className="text-white">
            No matter the situation you find yourself in, we are the private military contractor that ensures you stay out of harm’s way.
            From preventative training to full team support, SOS Private Security is here to keep you safe. 
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default TextAfterHero;