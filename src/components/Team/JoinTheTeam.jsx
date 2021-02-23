import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../assets/styles/pages/_team.module.scss'

const JoinTheTeam = () => {
  return (
    <>
    <Container fluid className={styles.Join_content} >
      <Row >
        <Col lg={12}className="pb-5">
          <h2 className="pb-5">Do you think you have what it takes to join our team?</h2>
          <h4 className={styles.join_text}>Our company has combined over 25 years of extensive training and expertise that 
          allows us to create customized security modules per client as client's needs vary. </h4>
        </Col>
        <Row >
          <Col lg={7}>
          <h3 className="d-block pl-3">Submit your resume and cover letter to</h3>
          </Col>
          <Col lg={5}>
          <a className={styles.security_btn} href="#">Work@sosprivatesecurity.com</a>
        </Col>
        </Row>
      </Row>
    </Container>
    <img className="w-100 t-1" src="/img/team/join-pattern.svg"/>
  </>
  );
};


export default JoinTheTeam