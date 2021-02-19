import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

import styles from "../../assets/styles/components/services.module.scss";

const contentListOne = [
  "Executive Protection",
  "Dignitary Protection",
  "News Crew Protection",
  "Individual Extraction",
  "Rapid Deployment",
  "Extraction Teams",
];

const contentListTwo = [
  "Oil Rigs",
  "Maritime Transportation",
  "Convoy Escorts",
  "C-Level Executives Traveling",
  "Transportation of Client Materials",
];

const contentListThree = [
  "Warehouse, Garages",
  "Vehicle Patrol",
  "Section 8-clean up task force",
  "Residence Security",
  "Event Security",
];

const contentListFour = [
  "Investigations",
  "Undercover and reconnaissance",
  "Ticket citations and criminal arrests",
  "Searches and seizures",
  "Weapons recoveries",
  "Illicit money recoveries",
  "Illicit drug recoveries",
  "Services of process",
];

const CardServices = () => {
  return (
    <>
      <ServicesImgLeftt
        img="/img/services/services-img1.jpg"
        title="Protective Services"
        arrowIcon="/img/services/chevrons-right.png"
        list={contentListOne}
      />
      <ServicesImgRight
        img="/img/services/services-img2.jpg"
        title="Armed Transportation"
        arrowIcon="/img/services/chevrons-right.png"
        list={contentListTwo}
      />
      <ServicesImgLeftt
        img="/img/services/services-img3.jpg"
        title="Security Servicess"
        arrowIcon="/img/services/chevrons-right.png"
        list={contentListThree}
      />
      <ServicesImgRight
        img="/img/services/services-img4.jpg"
        title="Assignments"
        arrowIcon="/img/services/chevrons-right.png"
        list={contentListFour}
      />
      <ServicesImgLeftt
        img="/img/services/services-img5.jpg"
        title="Neutralized workplace threats Workplace Discharge"
      >
        <p>Workplace Discharge</p>
      </ServicesImgLeftt>
      <ServiceWhitOutListL
        img="/img/services/services-img6.jpg"
        title="Training & Courses"
        paragraph="Our team can prepare you to be the best"
        anchor="Read More >>>"
      />
      <ServiceWhitOutListR
        img="/img/services/services-img7.jpg"
        title="Consulting"
      />
    </>
  );
};

const ServicesImgLeftt = ({
  img,
  title,
  arrowIcon,
  list = false,
  children,
}) => {
  return (
    <div className={styles.protect_section}>
      <Row>
        <Col lg={7} xl={6}>
          <img
            className={`${styles.protect_img} rounded-xl`}
            src={img}
            alt="protect"
          />
        </Col>
        <Col lg={5} xl={6} className="d-flex align-items-center">
          <div className={styles.protect_content}>
            <h3 className="subtitle">{title}</h3>
            <ul className={styles.services_list}>
              {list &&
                list.map((item) => (
                  <li className={styles.services_item} key={item}>
                    <img
                      className={styles.chevrons_right}
                      src={arrowIcon}
                      alt="arrow"
                    />
                    {item}
                  </li>
                ))}
              {children && children}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const ServicesImgRight = ({
  img,
  title,
  arrowIcon,
  list = false,
  children,
}) => {
  return (
    <div className={styles.protect_section}>
      <Row>
        <Col
          lg={5}
          xl={6}
          className="d-flex align-items-center justify-content-start"
        >
          <div className={``}>
            <h3 className="subtitle">{title}</h3>
            <ul className={styles.services_list}>
              {list &&
                list.map((item) => (
                  <li className={styles.services_item} key={item}>
                    <img
                      className={styles.chevrons_right}
                      src={arrowIcon}
                      alt="arrow"
                    />
                    {item}
                  </li>
                ))}
              {children && children}
            </ul>
          </div>
        </Col>
        <Col lg={7} xl={6}>
          <img
            className={`${styles.protect_img} rounded-xl`}
            src={img}
            alt="armed"
          />
        </Col>
      </Row>
    </div>
  );
};

const ServiceWhitOutListR = ({ img, title, paragraph }) => {
  return (
    <div
      
      className={styles.service_background}
    >
      <Row className={styles.protect_section}>
        <Col lg={7} xl={7}>
          <img
            className={`${styles.protect_img} rounded-xl`}
            src={img}
            alt="protect"
          />
        </Col>
        <Col lg={5} xl={5} className="d-flex align-items-center">
          <div className={styles.protect_content}>
            <h3 className="subtitle text-dark">{title}</h3>
            <p>{paragraph}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const ServiceWhitOutListL = ({ img, title, paragraph, anchor }) => {
  return (
    <div
      className={styles.protect_section}
      className={styles.service_background}
    >
      <Row>
        <Col lg={5} xl={6} className="d-flex align-items-center justify-content-center">
          <div className={styles.protect_content}>
            <h3 className="subtitle text-dark">{title}</h3>
            <p className="text-dark">{paragraph}</p>
            <Link href="/#">
              <a className="text-dark fs-6">{anchor}</a>
            </Link>
          </div>
        </Col>
        <Col lg={6} xl={5}>
          <img
            className={`${styles.protect_img} rounded-xl`}
            src={img}
            alt="protect"
          />
        </Col>
      </Row>
    </div>
  );
};

export default CardServices;
