import { Row, Col } from 'react-bootstrap';

import Layout from '../../components/Layout/Layout';

import styles from './services.module.css';

export default function Services() {
  return (
    <Layout title="Services">
      <div className={styles.top_section}>
        <div className={styles.top_content}>
          <h1 className="primary-title">Services</h1>
          <p className={styles.top_detail}>
            SOS Private Security offers consulting, operations, events, and ongoing relationships with our clients to
            address their security needs and concerns. Our list of services is extensive and we are always working
            with clients to create a security experience that matches their needs.
            </p>
        </div>
        <img className={styles.top_pattern} src="/img/services/top-pattern.svg" alt="top pattern" />
      </div>

      <div className={styles.protect_section}>
        <Row>
          <Col lg={7} xl={6}>
            <img className={styles.protect_img} src="/img/services/protect.jpg" alt="protect" />
          </Col>
          <Col lg={5} xl={6}>
            <div className={styles.protect_content}>
              <h3 className="subtitle">Protective Services</h3>
              <ul className={styles.services_list}>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Executive Protection
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Dignitary Protection
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    News Crew Protection
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Individual Extraction
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Rapid Deployment
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Extraction Teams
                  </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.armed_section}>
        <Row>
          <Col lg={6} xl={5}>
            <div className="d-flex justify-content-lg-end">
              <div className={styles.armed_content}>
                <h3 className="subtitle">Armed Transportation</h3>
                <ul className={styles.services_list}>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                      Oil Rigs
                    </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                      Maritime Transportation
                    </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                      Convoy Escorts
                    </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                      C-Level Executives Traveling
                    </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                      Transportation of Client Materials
                    </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={7}>
            <img className={styles.armed_img} src="/img/services/armed.jpg" alt="armed" />
          </Col>
        </Row>
      </div>

      <div className={styles.security_section}>
        <Row>
          <Col lg={6}>
            <img className={styles.security_img} src="/img/services/security.jpg" alt="security" />
          </Col>
          <Col lg={6}>
            <div className={styles.security_content}>
              <h3 className="subtitle">Security Services</h3>
              <ul className={styles.services_list}>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Warehouse, Garages
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Vehicle Patrol
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Section 8-clean up task force
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Residence Security
                  </li>
                <li className={styles.services_item}>
                  <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                    Event Security
                  </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.assignment_section}>
        <Row>
          <Col lg={6} xl={5}>
            <div className="d-flex justify-content-lg-end">
              <div className={styles.assignment_content}>
                <h3 className="subtitle">Assignments</h3>
                <ul className={styles.services_list}>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Investigations
                      </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Undercover and reconnaissance
                      </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Ticket citations and criminal arrests
                      </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Searches and seizures
                      </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Weapons recoveries
                      </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Illicit money recoveries
                      </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Illicit drug recoveries
                      </li>
                  <li className={styles.services_item}>
                    <img className={styles.chevrons_right} src="/img/services/chevrons-right.png" alt="arrow" />
                        Services of process
                      </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={7}>
            <img className={styles.assignment_img} src="/img/services/assignment.jpg" alt="assignment" />
          </Col>
        </Row>
      </div>

      <div className={styles.neutralize_section}>
        <Row>
          <Col lg={5}>
            <img className={styles.neutralize_img} src="/img/services/neutralize.jpg" alt="neutralize" />
          </Col>
          <Col lg={7}>
            <div className="d-flex align-items-center h-100">
              <h3 className="subtitle mt-3 mt-lg-0">
                Neutralized workplace threats<br />
                  Workplace Discharge
                </h3>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.training_section}>
        <Row>
          <Col lg={5}>
            <div className="d-flex justify-content-lg-end align-items-center h-100">
              <div className={styles.training_title}>
                <h3 className="subtitle mb-3 mb-lg-0">Training & Courses</h3>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <img className={styles.training_img} src="/img/services/training.jpg" alt="training" />
          </Col>
        </Row>
      </div>

      <div className={styles.consulting_section}>
        <Row>
          <Col lg={6}>
            <img className={styles.consulting_img} src="/img/services/consulting.jpg" alt="consulting" />
          </Col>
          <Col lg={6}>
            <div className="d-flex align-items-center h-100">
              <div className={styles.consulting_title}>
                <h3 className="subtitle mt-3 mt-lg-0">Consulting</h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.intro_section}>
        <a className="blue_btn" href="#">Let’s talk about your Special Operation</a>
        <div className={styles.intro_content}>
          <p className={styles.intro_detail}>
            Our clients come from all over the world and a variety
            of backgrounds. Learn more about how we work with clients like you.
            </p>
          <ul className={styles.intro_list}>
            <li className={styles.intro_item}>For Organizations</li>
            <li className={styles.intro_item}>For International Situations</li>
            <li className={styles.intro_item}>For Individuals</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom_section}>
        <div className={styles.bottom_content}>
          <h3 className="subtitle">
            Our agile and flexible approach ensures that we
            evaluate your unique situation from all angles.
            </h3>
          <div className={styles.blue_btn_wrapper}>
            <a className="blue_btn float-lg-right" href="#">Contact us to discuss your situation.</a>
          </div>
        </div>
        <img className={styles.bottom_pattern} src="/img/services/bottom-pattern.svg" alt="bottom pattern" />
      </div>
    </Layout>
  );
}