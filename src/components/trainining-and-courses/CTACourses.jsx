import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_training.module.scss';

const CTACourses = () => {
  return (
    <div className={styles.cta_courses_section}>
      <Container>
        <Row>
          <Col sm={12} className={styles.cta_content}>
            <h3>Contacts us to register for an upcoming course</h3>
            <Link href="/contact"><a className="blue_btn">Contact Us</a></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CTACourses;