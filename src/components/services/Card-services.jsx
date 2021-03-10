import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../../assets/styles/components/services.module.scss";

const contentListOne = [
  "Executive Protection",
  "Dignitary Protection",
  "News Crew Protection",
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
  "Residence Security",
  "Event Security",
];

const contentListFour = [
  "Investigations",
  "Undercover Assignments",
  "Reconnaissance Mission",
  "Ticket citations and criminal arrests",
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
      <ServiceWhitoutListL
        img="/img/services/services-img6.jpg"
        title="Training & Courses"
        paragraph="Our team can prepare you to be the best"
        anchor="Read More >>>"
      />
      <ServiceWhitoutListR
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
    <Container fluid>
      <Row className={`${styles.protect_section} mx-0 my-5 mx-lg-5`}>
        <Col sm={12} lg={6} >
          <img
            className={`${styles.protect_img}  rounded-xl`}
            src={img}
            alt="protect"
          />
        </Col>
        <Col sm={12} lg={6} className="d-flex align-items-center justify-content-start">
          <div className={`${styles.protect_content}`}>
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
    </Container>
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
    <Row className="mx-0 my-5 mx-lg-5">
      <Col sm={12} lg={6} className="d-flex align-items-center justify-content-start" >
        <div className={styles.protect_section}>
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
      <Col sm={12} lg={6}>
        <img
          className={`${styles.protect_img} rounded-xl`}
          src={img}
          alt="armed"
        />
      </Col>
    </Row>
  );
};

const ServiceWhitoutListR = ({ img, title, paragraph }) => {
  return (
    <Container fluid>
      <Row className={`${styles.service_background} px-0 p-lg-5`}>
        <Col sm={12} lg={6}>
          <img
            className={`${styles.protect_img} rounded-xl`}
            src={img}
            alt="protect"
          />
        </Col>
        <Col sm={12} lg={6} className="d-flex align-items-center">
          <div className={`${styles.protect_content}  mb-5 mg-lg-10`}>
            <h3 className="subtitle text-dark">{title}</h3>
            <p>{paragraph}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const ServiceWhitoutListL = ({ img, title, paragraph, anchor }) => {
  return (
    <Container fluid>
      <Row className={`${styles.service_background} px-0 p-lg-5`}>
        <Col
          sm={12} lg={6}
          className="pb-4 d-flex align-items-center justify-content-start">
          <div className={styles.protect_content}>
            <h3 className="pb-1 subtitle text-dark">{title}</h3>
            <p className="text-dark">{paragraph}</p>
            <Link href="/training-and-courses"><a className="text-dark fs-6">{anchor}</a></Link>
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <img
            src={img}
            className={`w-100 w-lg-80 rounded-xl`}
            alt="protect"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CardServices;
