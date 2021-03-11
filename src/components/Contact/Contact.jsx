import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_contact.module.scss';

const Contact = () => {

  const HandleSendEmail = (event) => {
    event.preventDefault();
    const { name, surname, email, message } = event.currentTarget;

    // if (name && surname && email && message) {
      const response = fetch(`api/send-message`, {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          surname: surname.value,
          email: email.value,
          message: message.value,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          // AQUI VA TODO RESPECTO A UN FETCH SUCCESSFULL
          console.log('YEEEI')
        })
        .catch((err) => {
          //TODO RESPECTO A ERRORES
          console.error(err)
        });
  };
  return (
    <div className="bg-white">
      <Container>
        <Row className={styles.content_text}>
          <Col sm={6} md={12} lg={12}>
            <h5 className={styles.title}>
              We are located in{' '}
              <span className={styles.bold_text}>Chicago!</span>
            </h5>
          </Col>
        </Row>
        <Row className={styles.input_content}>
          <form onSubmit={HandleSendEmail}>
            <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
              <label htmlFor="name" />
              <input
                className={styles.input_style}
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </Col>
            <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
              <label htmlFor="surname" />
              <input
                className={styles.input_style}
                type="text"
                name="surname"
                placeholder="Surname"
              />
            </Col>
            <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
              <label htmlFor="email" />
              <input
                className={styles.input_style}
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </Col>
            <Col sm={12} md={12} lg={12} className="pt-2 pb-2">
              <label htmlFor="message" />
              <textarea
                className={styles.input_email}
                name="message"
                placeholder="Your message"
                required
              ></textarea>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              className={`${styles.btn} d-flex text-align-center pt-2`}
            >
              <button
                type="submit"
                // ref={buttonRef}
                className={`${styles.btn_submit} blue_btn_contact`}
              >
                Send
              </button>
            </Col>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
