import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_about.module.scss';

const ConsultationSection = () => {
  return (
    <Container fluid className={`${styles.consult_content}`}>
      <Row className="justify-content-start  pb-5 pb-lg-0 h-50">
        <Col sm={12} lg={3} className="">
          <h4 className={styles.color_text}>Consultations</h4>
          <p className={styles.consult_detail}>
            Let our team of experts guide you towards the appropriate solution
            to fit your needs. We are dead serious about protecting your assets
            and bring creative solutions to ensure success.
          </p>
        </Col>
        <Col sm={12} lg={6} className="px-lg-4">
          <h4 className={styles.color_text}>
            Not every situation calls for a show of force.
          </h4>
          <p className={styles.consult_detail}>
            Our customizable approach and expertise allow us to be the message
            you need for the situation. We are there to set the tone you are
            looking for and match the style of the situation. Whether we are
            blending into a crowd, professionally concealed, or in full tactical
            attire, our mission never wavers. Let us build you a perfect team
            and create the plans we hope to never have to execute.
          </p>
        </Col>
        <Col sm={12} lg={3}>
          <h4 className={styles.color_text}>We have the power</h4>
          <p className={styles.consult_detail}>
            Our incredible team is more than capable to handle any situation
            thrown at them. We are always striving to avoid situations, however
            when the indeed arises we are capable of XYZ. Have the right to
            detain, cuff, and use gas canisters when necessary. Our team is
            expertly trained on the porper show of force.
          </p>
        </Col>
        <Col lg={12} className={styles.btn}>
          <a className="blue_btn" href="/services">
            See Our Security Services
        </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ConsultationSection;
