import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_about.module.scss';

const ApproachSection = () => {
  return (
    <Container fluid className={styles.all_content}>
      <Row className={`${styles.big_content} justify-content-start pl-lg-5 pt-5 pb-5 h-50`}>
        <Col sm={12} lg={4}>
          <h4 className={styles.content}>We go beyond security.</h4>
        </Col>
        <Col sm={12} lg={8}>
          <p className={styles.text}>
            For when your security needs exceed the capabilities of traditional
            “guard companies.” Our approach offers innovative solutions, expert
            advice, excellent customer service, integrity, the most qualified
            team members, and vigilance in all assignments.{" "}
          </p>
        </Col>
      </Row>

      <img className={styles.pattern} src="/img/about/approach.png" />
      <Row className={`w-100 justify-content-start ${styles.our_approach}`}>
        <Col sm={12} lg={4} className={`${styles.big_content2} order-2 order-lg-1`} >
          <h2 className={styles.content1} >Our Approach</h2>
        </Col>
        <Col sm={12} lg={4} className="order-3 order-lg-2">
          <p className={`${styles.text1}`}>
            Our military expertise allows us to act as your security partner to
            design a solution right for your needs. We work with clients within
            their budgets and uniquely provide any information requested
            pertaining to team members assigned to deter and protect their
            assets{" "}
          </p>
        </Col>
        <Col sm={12} lg={4} className="order-1 order-lg-3">
          <h5 className={`${styles.text1} ${styles.licence_number}`}>Licence Number: 122.001374</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default ApproachSection;
