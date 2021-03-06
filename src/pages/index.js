import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout/Layout';
import Hero from '../components/home/Hero/HomeHero';
import HomeClients from '../components/home/HomeClients/HomeClients';
import Services from '../components/home/Services/Services';

import styles from '../assets/styles/index.module.css';

export default function Home() {
  return (
    <Layout title="Home" activeGoUp>
      {/* <img src="/testback-1.png" alt="" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}
      <Hero />
      <HomeClients />
      <Services />
      <div className={styles.review_section}>
        <img className={styles.review_img} src="/img/home/flag.jpg" alt="flag" />
        <div className={styles.review_content}>
          <p className={styles.review_detail}>
            The SOS Team is your paramilitary resource for protection in all situations.
            Our team brings professional decorum with the expertise and experience you
            hope to never need. Only the most elite trained professionals are selected for the job.
            </p>
          <img className={styles.review_thumb} src="/img/home/thumb.png" alt="thumb" />
          <h5 className={styles.review_name}>Name Lastname</h5>
          <h5 className={styles.review_occupation}>CEO of XYZ</h5>
        </div>
      </div>

      <div className={styles.about_section}>
        <Row>
          <Col lg={6}>
            <img className={`${styles.about_img} rounded-xl`} src="/img/home/about.jpg" alt="about" />
          </Col>
          <Col lg={6}>
            <div className={styles.about_content}>
              <h3 className="subtitle">We create order out of chaos</h3>
              <p className={styles.about_detail}>
                The SOS Team is your paramilitary resource for protection
                in all situations. Our team brings professional decorum
                with the expertise and experience you hope to never need.
                Only the most elite trained professionals are selected for the job.
                  </p>
              <a className="blue_btn" href="/contact-us">About SOS Private Security</a>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.connect_section}>
        <img className={styles.connect_pattern} src="/img/home/connect-pattern.svg" alt="connect" />
        <div className={styles.connect_content}>
          <h1 className="primary-title">Send us an SOS signal</h1>
          <a className="blue_btn" href="/contact-us">Connect</a>
        </div>
      </div>
    </Layout >
  );
}
