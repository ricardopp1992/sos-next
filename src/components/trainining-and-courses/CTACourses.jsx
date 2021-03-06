import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_training.module.scss';

const CTACourses = ({ text }) => {
  return (
    <div className={styles.cta_courses_section}>
      <Container>
        <Row>
          <Col sm={12} className={styles.cta_content}>
            <h3>{ text }</h3>
            <Link href="/contact-us"><a className="blue_btn">Contact Us</a></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CTACourses;