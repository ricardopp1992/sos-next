import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../assets/styles/pages/_team.module.scss'

const JoinTheTeam = () => {
  return (
    <>
    <div className={styles.Join_content}>
      <Container>
        <Row >
          <Col lg={12}className="pb-5">
            <h2 className="pb-5">Do you think you have what it takes to join our team?</h2>
            <p className={styles.join_text}>Our company has combined over 25 years of extensive training and expertise that 
              allows us to create customized security modules per client as client's needs vary.</p>
          </Col>
          <Row className={styles.bottom_cta}>
            <Col lg={6}className="pb-5">
              <h4 className="d-block pb-5">Submit your resume and cover letter to</h4>
            </Col>
            <Col lg={6}className="pb-5">
              <a className={styles.security_btn} href="mailto:work@sosprivatesecurity.com">Work@sosprivatesecurity.com</a>
            </Col>
          </Row>
        </Row>
      </Container>
      <img className={styles.join_pattern_bottom} src="/img/team/team-pattern-bottom.svg"/>
      <div className={styles.join_content_bottom} />
    </div>
  </>
  );
};


export default JoinTheTeam