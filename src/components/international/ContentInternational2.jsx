import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_international.module.scss';

const ContentInternational2 = () => {
  return (
    <div className={styles.content_gray_international}>
      <Container>
        <Row>
          <ParagraphItem>
            <h3>Maritime Transportation:</h3>
            <p>Ensure your next ocean crossing is fully prepared for potential threats. Pirates are not just a thing of the past and when you have valuable, there is no better target. Great for oil rigs, X, and Z. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>News Crew Protection:</h3>
            <p>Wherever there is a story to tell, you are there.  Make sure your team can do their jobs without fear or threat.</p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>International Resorts:</h3>
            <p>Nothing will tarnish your guests experience and your reputation like an incident. Keep the luxury and fun going without a hiccup when you have the right protection for your resort and guests.</p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Port Security:</h3>
            <p>Private military and security is just the type of protection you need when it comes to jobs big and small. It’s not worth the risk to have an under-supported team and a partner for unique operations that call for a strong presence.</p>
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

export default ContentInternational2;