import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "../../../assets/styles/index.module.css";

const HomeClients = () => {
  return (
    <>
      <div className={`${styles.partner_section} partner-section`}>
        <h3 className="subtitle mb-4 text-left">Our trusted partners and clients</h3>
        <Row className="d-xs-block d-lg-flex ">
          <Col lg={6} >
            <img className="client-logo pt-3 mb-4" src="/img/client-01.png" alt="" />
          </Col>
          <Col lg={6}>
            <img className="client-logo pt-3" src="/img/client-stragegos.png" alt="" />
          </Col>
        </Row>
      </div>
      <div className={`${styles.intro_section} text-section`}>
        <img
          className={styles.intro_pattern}
          src="/img/home/intro-pattern.svg"
          alt="intro"
        />
        <div className={styles.intro_subtitle} >
          <h3 className="subtitle mt-3">
            No matter where you are, your safety and{" "}
            <br className="d-none d-block" />
            protecting your assets is our mission.
          </h3>
        </div>
      </div>
    </>
  );
};

export default HomeClients;
