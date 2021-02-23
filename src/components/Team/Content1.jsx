import { Container, Row, Col } from 'react-bootstrap';


import styles from '../../assets/styles/pages/_team.module.scss'

const Content1 = () => {
  return (
    <Container>
      <Row className={styles.content_text} >
        <Col lg={2} >
          <h1> Team </h1>
        </Col>
        <Col lg={6}>
          <p>S.O.S. Private Security offers only the highest caliber of officer because your
            protection is our business. They are highly trained for every situation and are
            seasoned experts with a toolkit and experience you would not believe. We will
            work with you to put together the right team to meet your needs, appearance,
            and message you need to send for your security situation</p>
        </Col>
        <Col lg={4} >
          <h4> Licence Number: 122.001374 </h4>
        </Col>
      </Row>
      <Row className={styles.content_img1} >
        <Col lg={6} className={styles.img1} >
          <img src="/img/team/img1.png"/>
        </Col>
        <Col lg={6} className={styles.content_img2} >
          <div>
            <img src="/img/team/img2.png" />
          </div>
          <div>
            <img src="/img/team/img3.png" />
            <img src="/img/team/img4.png" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default Content1