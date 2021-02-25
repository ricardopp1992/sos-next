import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_contact.module.scss';

const Contact = () =>{
  return(
    <Container fluid className="bg-white">
      <Row className={styles.content_text}>
        <Col lg={12} >
          <h5 className={styles.title} >We are located in <span className={styles.bold_text}>Chicago!</span></h5>
        </Col>
        </Row>
        <Row className={styles.input_content}>
        <Col lg={12} className="pt-2 pb-2">
          <input className={styles.input_style} type="text" name="Name" placeholder="Name" />
        </Col>
        <Col lg={12} className="pt-2 pb-2">
          <input className={styles.input_style} type="text" name="Surname" placeholder="Surname"/>
        </Col>
        <Col lg={12} className="pt-2 pb-2">
          <input className={styles.input_style} type="text" name="Email" placeholder="E-mail"/>
        </Col>
        <Col lg={12} className="pt-2 pb-2">
          <textarea className={styles.input_email}>
            Your message
          </textarea>
        </Col>
        <Col lg={12} className={`${styles.btn_submit} d-flex text-align-center`}>
          <button type="submit" className="blue_btn">Send</button>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact