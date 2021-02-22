import { Container, Row, Col } from 'react-bootstrap';


import styles from '../../assets/styles/pages/_team.module.scss'

const JoinTheTeam = () => {
  return (
    <Container fluid className={styles.Join_content} >
      <Row >
        <Col lg={12}className="pb-5">
          <h2 className="pb-5">Do you think you have what it takes to join our team?</h2>
          <p className="fs-1">Our company has combined over 25 years of extensive training and expertise that 
          allows us to create customized security modules per client as client's needs vary. </p>
        </Col>
        <Col lg={12}>
          <h3>Submit your resume and cover letter to</h3>
          <a>Work@sosprivatesecurity.com</a>
        </Col>
      </Row>
    </Container>
  );
};


export default JoinTheTeam