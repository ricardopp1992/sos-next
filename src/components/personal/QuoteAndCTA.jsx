import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_personal.module.scss';

const QuoteAndCTA = () => {
  return (
    <div className={styles.quote_cta_section}>
      <div className={styles.gray_block} />
      <div className={styles.text_and_patter}>
        <h2 className={styles.quote_text}>
          “The best lightning rod for your protection is your own spine.”<br/>
            ― Ralph Waldo Emerson
        </h2>
        <img src="/img/team/team-pattern-bottom.svg" className={styles.quote_patter} atl="patter cta" />
      </div>
      <div className={styles.cta_content} >
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="mb-5">Don't get stuck with should</h2>
              <p className="mb-5">Should is an ugly word. It means that there was a better choice. That you made a mistake and that the outcome could have been improved. Our clients never use the word "Should".</p>
            </Col>
            <Col lg={4} className={`${styles.btn_contact} offset-lg-2 d-flex align-items-center`}>
              <a href="/#" className="blue_btn">You Should Contact Us</a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default QuoteAndCTA;