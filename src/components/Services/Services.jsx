import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

import styles from '../../assets/styles/index.module.css';

const Services = () => {
  return (
    <div className={styles.service_section}>
      <h3 className="subtitle">Services</h3>
      <Row>
        <Col lg={4}>
          <div className={styles.service_item}>
            <img className={styles.service_img} src="/img/home/service-1.jpg" alt="service" />
            <h4 className={styles.service_title}>Personal</h4>
            <p className={styles.service_detail}>
              No matter your status, wealth, or popularity, enjoy
              life while resting easy knowing you are protected.
            </p>
            <Link href="/"><a>Read More</a></Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.service_item}>
            <img className={styles.service_img} src="/img/home/service-2.jpg" alt="service" />
            <h4 className={styles.service_title}>Corporate</h4>
            <p className={styles.service_detail}>
              Protect your assets and team incase of heated,
              tense, or threatening situations.
            </p>
            <Link href="/"><a>Read More</a></Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.service_item}>
            <img className={styles.service_img} src="/img/home/service-3.jpg" alt="service" />
            <h4 className={styles.service_title}>International</h4>
            <p className={styles.service_detail}>
              For your transportation, travel, and corporate
              needs. We are not there for international relations,
              but to avoid an international incident.
            </p>
            <Link href="/"><a>Read More</a></Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Services;