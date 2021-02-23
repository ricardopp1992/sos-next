import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_personal.module.scss';
import ListArrow from '../utils/ListArrow';

const list1 = [
  'Executive Protection, for all situations, places, and needs',
  'Individual Extraction, for getting out of a jam',
  'Rapid Deployment, for immediate situations',
  'Armed Transportation, great for travel',
  'Executive Residence, for creating a secure environment'
]

const list2 = [
  'Conceal Carry Courses',
  'Self Defense Courses (with weapons)',
  'Intruder Response',
  'Firearm Certification through IDFPR',
  'CPR Certifications',
  'Tactical Combat Causality Care (TCCC)'
]

const PersonalServiceContent = () => {
  return (
    <div className={styles.personal_service_content}>
      <Container>
        <h2>Personal Protection Services:</h2>
        <Row>
          <ImageAndList right image="/img/personal-service/protactive-service.png">
            <h3>Protective and Security Services:</h3>
            <p>For some, maintaining a low profile is best, and others require a more visible presence. Whatever your need, the SOS team’s sole mission is to ensure your protection at all costs. </p>
            <ul>{ list1.map((item, i) => <ListArrow key={i} item={item} />)}</ul>
            <div>
              <a href="/#" className="blue_btn">Contact Us</a><span>To share your special operation</span>
            </div>
          </ImageAndList>
          <ImageAndList image="/img/personal-service/training-service.png">
            <h3>Training and Courses</h3>
            <p>Learn from the best at our state-of-the-art trainings and courses. Our expert shooters train for weapon usage and prepare you for what-if situations.</p>
            <ul>{ list2.map((item, i) => <ListArrow key={i} item={item} />)}</ul>
            <div><a href="/#" className="blue_btn">Read More</a></div>
          </ImageAndList>
        </Row>
      </Container>
    </div>
  );
};

const ImageAndList = ({ right, image, children }) => {
  return (
    <div className={styles.personal_content}>
      <Col lg={6} className={`${right ? styles.image_right : ''} ${styles.image} d-none d-lg-flex`}>
        <img src={image} alt="" />
      </Col>
      <Col sm={12} lg={6} className={`${right ? styles.content_left : ''} ${styles.content_children}`}>
        {
          children
        }
      </Col>
    </div>
  );
};

export default PersonalServiceContent;