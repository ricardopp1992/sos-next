import { Container, Row, Col } from 'react-bootstrap';


import styles from '../../assets/styles/pages/_team.module.scss'

const Leadership = () => {
  return (
    <Container fluid >
      <Row className={styles.leadership_content}>
        <h1 className="w-100 pb-5 pl-2" >Leadership</h1>
        <Col lg={4} >
          <h2 className={styles.title_color}>Robert J. Orseske, Jr.</h2>
          <p className={styles.leadership_text}>Robert brings a professional decorum providing
            security operations in protecting your assets and
            personnel. His educational and professional
            financial background will ensure that security
            operations will not exceed any clients annualized
            budget while providing superior security services.
            Robert s career began as an Accountant and he
            quickly ascended the ranks of the corporate
            ladder at both private and publicly traded firms.
            Robert abetted the creation and implementation of
            the S.O.S. Private Security State of Illinois approved
            firearm, baton, handcuff, and scenario based
            training exercises. </p>
        </Col>
        <Col lg={4}>
          <img  src="/img/team/leadership.png" />
        </Col>
        <Col lg={4}>
          <h2 className={styles.title_color}>Geno W. Frenzel, Jr.</h2>
          <p>Our company has combined over 25 years of
            extensive training and expertise that allows us to
            create customized security modules per client as
            client's needs vary. </p>
        </Col>
      </Row>
      <Row className={styles.leadership_content}>
      <LeadershipList 
        title="Credentials"
        arrow="/img/services/chevrons-right.png"
        list={credentials}
      />
      <LeadershipList 
        title="Awards"
        arrow="/img/services/chevrons-right.png"
        list={awards}
      />
      </Row>
    </Container>
  );
};

const credentials = [
  "Illinois licensures for Permanent Employee Registration Card,",
  "Firearm Training Certificate",
  "Firearm Control Card in Shotgun, Rifle, Revolver and Semi Automatic weaponry.",
  "University of Illinois at Chicago; Summa Cum Laude",
  "Robert was a member of many honorary societies, most notably Phi Kappa Phi, Golden Key International Honor Society, The National Society of Collegiate Scholars, and Outstanding Honor Society. ",
];

const awards = [
  "Purple Heart",
  "Combat Action Medal",
  "Bronze Star",
  "Army Commendation Medal",
  "Joint Service Achievement Medal",
  "Legion of Merit Medal",
  "Army Achievement Medal",
];

const LeadershipList = ({ title, list,arrow, children}) =>{
  return(
      <Col lg={6} className="d-block ">
      <h1 className="w-100 pb-5 pt-5">{title}</h1>
      <ul className={styles.leadership_list}>
        {list &&
          list.map((item) => (
            <li  key={item} >
              <img
                src={arrow}
                alt="arrow"
                />
                {item}
            </li>
          ))}
        {children && children}
      </ul>
      </Col>
  )
}

export default Leadership