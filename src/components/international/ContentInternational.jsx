import React from 'react';
import { Container, Row } from 'react-bootstrap';

import ImageAndChildContent from '../ImageAndChildContent';
import ListArrow from '../utils/ListArrow';

import styles from '../../assets/styles/pages/_international.module.scss';

const protectiveList = [
  'Executive Protection',
  'Dignitary Protection',
  'Individual Extraction',
  'Rapid Deployment',
  'Executive Protection',
  'Sex Trafficking '
];

const securityList = [
  'Armed Transportation',
    [
      'C-Level Executives Traveling',
      'Transportation of Client Materials'
    ],
  'Investigations ',
  'Convoy Escorts',
  'Extraction Teams',
  'Property / Personal Residence Private Security team for high-net-worth individuals '
]

const ContentInternational = () => {
  return (
    <div className={styles.content_international}>
      <Container>
        <h2 className={styles.title}>International Operations</h2>
        <Row>
          <ImageAndChildContent right image="/img/international/protective-service.png" >
            <h3>Protective Services :</h3>
            <ul className={styles.list}>
              {protectiveList.map(item => <ListArrow key={item} item={item} />)}
            </ul>
          </ImageAndChildContent>
        </Row>
        <Row>
          <ImageAndChildContent image="/img/international/security-service.png">
            <h3>Security Services :</h3>
            <ul className={styles.list}>
              {
                securityList.map((item, i) => {
                  if (typeof item === 'object') {
                    return (<ul key={i}>{ item.map( insideList => <ListArrow key={insideList} item={insideList} /> ) }</ul>)
                  }
                  return <ListArrow key={item} item={item} />
                })
              }
            </ul>
          </ImageAndChildContent>
          <ImageAndChildContent right image="/img/international/training-service.png">
            <div className={styles.only_text_content}>
              <h3>Training: </h3>
              <p>Training foreign police and military forces</p>
            </div>
          </ImageAndChildContent>
          <ImageAndChildContent image="/img/international/consulting.png">
            <div className={styles.only_text_content}>
              <h3>Consulting</h3>
            </div>
          </ImageAndChildContent>
        </Row>
      </Container>
    </div>
  );
};

export default ContentInternational;