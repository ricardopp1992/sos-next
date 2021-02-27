import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_training.module.scss';

const coursesList = [
  'Handcuff',
  'Baton',
  'Active Shooter',
  'Workplace Violence',
  'Self Defense (with weapons)',
  'Intruder Response',
  'Firearm Certification through IDFPR',
  'CPR Certifications',
  'Tactical Combat Causality Care (TCCC)'
];

const CoursesList = () => {
  return (
    <div className={styles.courses_list_section}>
      <Container>
        <Row>
          <Col sm={12} lg={12} className={styles.boxes_container}>
            <div className={styles.course_box}>
              <p >Conceal Carry</p>
              <p className={styles.text}>illinois</p>
              <p className={styles.text}>utah</p>
              <p className={styles.text}>Re-certificacions</p>
            </div>
            {
              coursesList.map((course, i) => (
                <div key={i} className={styles.course_box}>{course}</div>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesList;