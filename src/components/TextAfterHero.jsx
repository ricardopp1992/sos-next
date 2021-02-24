import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../assets/styles/pages/_personal.module.scss';

const TextAfterHero = ({ children, lg = 6, sm = 12}) => {
  return (
    <Container>
      <Row className={styles.hero_content}>
        <Col sm={sm} lg={lg} className="py-sm-4 py-md-4 py-lg-5">
          {
            children
          }
        </Col>
      </Row>
    </Container>
  );
};

export default TextAfterHero;