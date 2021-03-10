import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_corporate.module.scss';

const ContentCorporate2 = () => {
  return (
    <div className={styles.content_corporate2}>
      <img  src="/img/corporate/corporate-middle.png" className={styles.content_large_image} />
      <Container>
        <h2 className={styles.content_title}>Industries</h2>
        <Row>
          <ParagraphItem>
            <h3>Your Section 8-clean up task force: </h3>
            <p>We have executed over 5,000 secure evictions, and are experts at ensuring your image and assets are protected. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Cannabis:</h3>
            <p>In this budding industry you have a lot to protect. From fields, production to centers, warehouses, and dispensaries your locations must be properly secured. Don’t forget about transportation from location to location. And the needs keep on growing. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Communities:</h3>
            <p>From retirement, to exclusive residential communities there is a lot of responsibility to keep everyone safe. Our secret service like approach is ideal for domestic and international locations. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>News Crew Protection:</h3>
            <p>Wherever there is a story to tell, you are there.  Make sure your team can do their jobs without fear or threat. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Law Firms:</h3>
            <p>When you have an investigation, there is no better team than SOS to handle delicate, and not so delicate, situations. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Port Security:</h3>
            <p>Private military and security is just the type of protection you need when it comes to jobs big and small. It’s not worth the risk to have an under-supported team and a partner for unique operations that call for a strong presence. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Banking/Financial Institutions:</h3>
            <p>Nothing needs more security than money. Our expert team has the training, credentials, and expertise to ensure nothing and no one is at risk when there is a threat. For special operations, when the world gets crazy, or just for a consultation, SOS is your partner.</p>
          </ParagraphItem>
        </Row>
      </Container>
    </div>
  );
}

const ParagraphItem = ({children}) => (
  <Col lg={6} sm={12} className={styles.content_item}>
    {
      children
    }
  </Col>
);

export default ContentCorporate2;