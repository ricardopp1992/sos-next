import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_contact.module.scss';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const [wasSuccess, setWasSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')

  const HandleSendEmail = (event) => {
    event.preventDefault();
    const { name, surname, email, message } = event.currentTarget;
    console.log(name)
    console.log(`${name.name} surname:${surname.value} ${email.value} ${message.value}`);

    if (name.value && surname.value && email.value && message.value && !isSent) {
      fetch(`/api/send-message`, {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          surname: surname.value,
          email: email.value,
          message: message.value,
        }),
      })
        .then((resp) => {
          if (resp.status !== 200) throw Error('Server error')
          return resp.json();
        })
        .then((data) => {
          setIsSent(true);
          setWasSuccess(true);
          setErrorMessage('Your message has been sent successfully! We\'ll contact you soon')
        })
        .catch((err) => {
          console.error(err)
          setIsSent(false);
          setWasSuccess(false);
          setErrorMessage('There was an error from the server, please try again! or reach out us here email@sos.com')
        });
    } else if (name.value && surname.value && email.value && message.value && isSent) {
      setIsSent(true);
    } else {
      setIsSent(false);
      setWasSuccess(false);
      setErrorMessage(`Please check fields: ${invalidInput(name)} ${invalidInput(surname)} ${invalidInput(email)} ${invalidInput(message)}` )
    }
    setSubmitted(true);
  };

  const invalidInput = (input) => {
    return !input.value ? input.name + ',' : '';
  }

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
            {
              submitted &&
              <Col sm={12} md={12} lg={12} className={styles.message_container}>
                <div className={`${wasSuccess ? 'alert-success' : 'alert-danger'} text-left pl-lg-5 ${styles.contant_message}`}>
                  { wasSuccess ? errorMessage : errorMessage }
                </div>
              </Col>
            }
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
