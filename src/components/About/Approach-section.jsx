import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_about.module.scss'

const ApproachSection = () => {
  return (
    <Container fluid className={styles.all_content}>
      <Row
        className={`${styles.big_content} justify-content-start pl-5 pt-5 pb-5 h-50`}
      >
        <Col lg={4}>
          <h4 className={styles.content}>We go beyond security.</h4>
        </Col>
        <Col lg={8}>
          <p className={styles.text}>
            For when your security needs exceed the capabilities of traditional
            “guard companies.” Our approach offers innovative solutions, expert
            advice, excellent customer service, integrity, the most qualified
            team members, and vigilance in all assignments.{" "}
          </p>
        </Col>
      </Row>

      <div className="row w-100 justify-content-start">
        <img className={styles.pattern} src="/img/about/approach.png" />
        <Col lg={4} className={styles.big_content2} >
          <h2 className={styles.content1} >Our Approach</h2>
        </Col>
        <Col lg={4}>
          <p className={styles.text1}>
            Our military expertise allows us to act as your security partner to
            design a solution right for your needs. We work with clients within
            their budgets and uniquely provide any information requested
            pertaining to team members assigned to deter and protect their
            assets{" "}
          </p>
        </Col>
        <Col lg={4}>
          <h5 className={styles.text1}>Licence Number: 122.001374</h5>
        </Col>
      </div>
    </Container>
  );
};

export default ApproachSection;
