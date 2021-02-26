import React, { useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_contact.module.scss';


const Contact = () => {
 



  return(
    <div className="bg-white">
    <Container  >
      <Row  className={styles.content_text}>
        <Col sm={6} md={12} lg={12} >
          <h5 className={styles.title} >We are located in <span className={styles.bold_text}>Chicago!</span></h5>
        </Col>
        </Row>
        <Row className={styles.input_content}>
        
          <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
            <label htmlFor="name" />
            <input className={styles.input_style} type="text" name="Name" placeholder="Name" required/>
          </Col>
          <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
            <label htmlFor="surname" />
            <input className={styles.input_style} type="text" name="Surname" placeholder="Surname" required/>
          </Col>
          <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
            <label htmlFor="email" />
            <input className={styles.input_style} type="email" name="Email" placeholder="E-mail" required/>
          </Col>
          <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
            <label htmlFor="message" />
            <textarea className={styles.input_email} name="message" placeholder="Your message" required>
              
            </textarea>
          </Col>
          <Col sm={12} md={12} lg={12} className={`${styles.btn} d-flex text-align-center pt-2`}>
            <button type="submit" className={`${styles.btn_submit} blue_btn_contact`}>Send</button>
          </Col>
        
      </Row>
    </Container>
    </div>
  )
};

export default Contact