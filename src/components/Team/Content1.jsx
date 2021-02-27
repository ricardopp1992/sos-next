import { Container, Row, Col } from 'react-bootstrap';


import styles from '../../assets/styles/pages/_team.module.scss'

const Content1 = () => {
  return (
    <Container>
      <Row className={styles.content_text} >
        <Col sm={12} lg={2} >
          <h1 className="pb-sm-4 pb-md-4"> Team </h1>
        </Col>
        <Col sm={12} lg={6}>
          <p >S.O.S. Private Security offers only the highest caliber of officer because your
            protection is our business. They are highly trained for every situation and are
            seasoned experts with a toolkit and experience you would not believe. We will
            work with you to put together the right team to meet your needs, appearance,
            and message you need to send for your security situation</p>
        </Col>
        <Col sm={12} lg={4} >
          <h4 className="py-4 pt-md-4"> Licence Number: 122.001374 </h4>
        </Col>
      </Row>
      <Row className="pr-xs-0 pr-md-2 pr-lg-5" >
        <Col sm={12} lg={6} >
          <img className="w-100" src="/img/team/img1.png"/>
        </Col>
        <Col sm={12} lg={6} >
          <div className="w-100">
            <img className="w-100" src="/img/team/img2.png" />
          </div>
          <div className={styles.small_img}>
            <img src="/img/team/img3.png" />
            <img src="/img/team/img4.png" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default Content1