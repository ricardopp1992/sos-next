import { Row, Col } from 'react-bootstrap';

import Layout from '../../components/Layout/Layout';
import HeroService from '../../components/services/HeroService';
import ServiceContent from '../../components/services/ServiceContent';
import CarsServices from '../../components/services/Card-services';

import styles from '../../assets/styles/components/services.module.scss';

export default function Services() {
  return (
    <Layout
      title="Services"
      footerStyle="footer-service"
      mainClassName="services">
      <HeroService styles={styles} />
      <ServiceContent />
      <CarsServices />     
    </Layout>
  );
}