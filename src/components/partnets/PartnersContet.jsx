import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ImageAndChildContent from '../ImageAndChildContent';

import styles from '../../assets/styles/pages/_partners.module.scss';

const PartnersContet = () => {
  return (
    <div className={styles.partners_content}>
      <Container>
        <Row>
          <Col sm={12}>
            <h4>We’ve earned the respect of government entities, retired professionals and industry experts  providing unique partnerships and connections. These relationships allow us to serve more missions and add the sometimes necessary Special Operations Sector to their artillery.</h4>
          </Col>
        </Row>
        <Row>
          <ImageAndChildContent image="/img/partners/partener-content-1.png">
            <p>Strategic partnerships are great for expanding the team, special services and getting jobs done that may be out of traditional scopes.</p>
          </ImageAndChildContent>
          <ImageAndChildContent right image="/img/partners/partener-content-2.png">
            <p>Our collaborative approach ensures that we are able to operate within each of our areas, but share in joint accountability and mutual respect.</p>
          </ImageAndChildContent>
          <ImageAndChildContent image="/img/partners/partener-content-3.png">
            <p>Our licensing and clearances expand the capabilities of vetted parters allowing everyone to bring more safety and options to the situation.</p>
          </ImageAndChildContent>
          <ImageAndChildContent right image="/img/partners/partener-content-4.png">
            <p>Our reputation speaks for itself. We have to earn our partners’ respect and prove ourselves at every operation. The best form of flattery is a referral, and we are blessed to be flattered.</p>
          </ImageAndChildContent>
        </Row>
      </Container>
    </div>
  );
}

export default PartnersContet;