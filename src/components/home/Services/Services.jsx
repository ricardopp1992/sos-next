import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

import styles from '../../../assets/styles/index.module.css';

const Services = () => {
  return (
    <div className={styles.service_section}>
      <h3 className="subtitle">Services</h3>
      <Row>
        <Col lg={4}>
          <ServiceItem
            title="Personal"
            description={`No matter your status, wealth, or popularity, enjoy life while resting easy knowing you are protected.`}
            image="/img/home/service-1.jpg"
            href="/personal" />
        </Col>
        <Col lg={4}>
          <ServiceItem
            title="Corporate"
            description={`
              Protect your assets and team incase of heated,
              tense, or threatening situations.
            `}
            image="/img/home/service-2.jpg"
            href="/corporate" />
        </Col>
        <Col lg={4}>
          <ServiceItem
            title="International"
            description={`
              For your transportation, travel, and corporate
              needs. We are not there for international relations,
              but to avoid an international incident.
            `}
            image="/img/home/service-3.jpg"
            href="/international" />
        </Col>
      </Row>
    </div>
  );
};

const ServiceItem = ({ title, description, image, href}) => {
  return (
    <div className={styles.service_item}>
      <img className={`${styles.service_img} rounded-xl`} src={image} alt="service" />
      <h4 className={styles.service_title}>{ title }</h4>
      <p className={styles.service_detail}>{ description }</p>
      <Link href={href}><a>Read More</a></Link>
    </div>
  );
}

export default Services;