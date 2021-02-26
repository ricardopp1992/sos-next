import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_training.module.scss';

const TrainingContent = () => {
  return (
    <>
      <div className={styles.training_content}>
        <Container>
          <h2 className="title">Who gets to have all the fun? </h2>
          <Row>
            <ParagraphItem
              title="Individuals"
              text={`Looking to brush up on some skills and obtain certifications? Our courses are professional grade and will prepare you for anything.`} />
            <ParagraphItem
              title="Teams"
              text={`Workshops, team building and corporate exercises are great opportunities to learn practical skills.`} />
            <ParagraphItem
              title="Professional"
              text={`Our courses are used for training foreign police and military forces to brush up on skills, complete certifications and enhance their expertise.`} />
          </Row>
        </Container>
      </div>
      <img src="/img/training/training-bottom-bg.png" className={styles.background_image} />
    </>
  );
};

const ParagraphItem = ({ title, text }) => {
  return (
    <Col sm={12} lg={4} className={styles.training_content_item}>
      <h4>{title}</h4>
      <p>{text}</p>
    </Col>
  );
};

export default TrainingContent;