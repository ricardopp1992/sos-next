import React from 'react';
import { Container } from 'react-bootstrap';


import styles from '../../assets/styles/pages/_about.module.scss'
const BottomAbout = () => {
  return (
    <Container fluid className={styles.bottom_section}>
      <h3 className="subtitle">SOS is a little different than your typical options. See how we stack up.</h3>
    </Container>  
  );
};


export default BottomAbout