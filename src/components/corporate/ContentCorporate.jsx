import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import ListArrow from '../utils/ListArrow';

import styles from '../../assets/styles/pages/_corporate.module.scss';

const practiveServices = [
  'Executive Protection, Dignitary Protection',
  'Extraction Teams',
  'Rapid Deployment Teams'
]

const ContentCorporate = () => {
  return (
    <div className={styles.content_corporate1}>
      <Container >
        <h2 className={styles.corporate_title}>Corporate Operations</h2>
        <Row>
          <ParagraphItem>
            <h3>Protective and Security Services (Asset Protection)</h3>
            <ul>{ practiveServices.map(item => <ListArrow key={item} item={item} />) }</ul>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Event Security:</h3>
            <p>The worst possible thing to happen at an event is an unplanned incident. Think of us as your event insurance to maintain order and protection. We are great for conventions, trade shows, fundraisers, and press conferences.</p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Workplace Discharge:</h3>
            <p>Never let a disgruntled employee compromise your organization and team. We are prepared to handle these situations before they become an issue. </p>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Team building and Training:</h3>
            <p>For the organizations looking to educate and develop their team, our trainings and courses provide peace of mind and strengthen your bench. </p>
            <Link href="/training-and-courses"><a>read more{` >>>`}</a></Link>
          </ParagraphItem>
          <ParagraphItem>
            <h3>Security Consulting:</h3>
            <p>Let our expert team assess, evaluate, and provide recommendations for your security needs. Our team is always looking to provide cover, guidance, and force when necessary. </p>
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

export default ContentCorporate;