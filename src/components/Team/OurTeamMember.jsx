import { Container, Row, Col } from 'react-bootstrap';


import styles from '../../assets/styles/pages/_team.module.scss'

const TeamMember = () => {
  return (
    <Container fluid >
      <Row className={styles.principal_content}>
        <h2 className="w-100 pb-5 pl-2">Our team member <span className={styles.special_color}>requiremts</span> :</h2>
        <Col lg={3} >
          <p>Pass a physical fitness test
            (State of Illinois P.O.W.E.R test
            guidelines)</p>
        </Col>
        <Col lg={3}>
          <p>Licensed through the Illinois
            Department of Financial and
            Professional Regulation</p>
        </Col>
        <Col lg={6}>
          <p >Score a minimum of 95% on both the written and shooting aspects
            of the State of Illinois approved training course for shotgun, rifle,
            revolver and semi automatic authorized weaponry.</p>
        </Col>
      </Row>
      <Row className={styles.principal_content}>
        <h5 className="w-100 pb-5 pl-2">In addition, the vast majority of S.O.S. Private Security officers have expertise above and beyond including:</h5>
        <Col lg={3}>
          <p >Have prior military experience</p>
        </Col>
        <Col lg={3}>
          <p >Are current sworn peace officers</p>
        </Col>
        <Col lg={3}>
          <p >Are current licensed paramedic/firefighters</p>
        </Col>
      </Row>
    </Container>
  );
};


export default TeamMember