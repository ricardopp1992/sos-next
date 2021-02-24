import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_about.module.scss';

const ValuesSection = () => {
  return (
    <Container fluid className={styles.values_section}>
      <Row className="justify-content-start">
        <Col sm={12} lg={6} xl={4} className="p-0 m-0 d-flex align-items-center">
          <img className="w-100" src="/img/about/values-section.png" />
        </Col>
        <Col  lg={6} xl={8} className={styles.values_content}>
          <h1 className={`${styles.text_color} w-100 pt-5 pb-3`}>Values</h1>
          <Row>
            <Values
              title='Loyalty'
              text='Our clients have our devoted loyalty and full commitment to safety. Our expertise is focused on one mission: You.'
            />
            <Values
              title='Order'
              text='We create order in every situation no matter the circumstances. We have trained, prepared, and planned for every
            possible scenario and are the leaders you need to avoid a crisis.'
            />
            <Values
              title='Professionalis'
              text='We hold ourselves to the highest professional standards that ensure your experience is exemplary.
            Professionalism shows up in how we approach our work, our expertise, and our composure.'
            />
            <Values
              title='Confidence'
              text='Confidence comes from knowing your safety and security is ensured. We earn your confidence
            not just in our experience, but in every interaction.'
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const Values = ({ title, text }) => {
  return (
    <Col sm={12} lg={12} xl={6} className="text-justify pb-sm-1 pt-5">
      <h3 className="  pb-md-1 pb-3">{title}</h3>
      <p className="pb-sm-1 pb-md-1 pb-4">{text}</p>
    </Col>
  );
};


export default ValuesSection;
