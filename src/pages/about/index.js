import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import HeroAbout from '../../components/About/HeroAbout';
import Layout from '../../components/Layout/Layout';
import ApproachSection from '../../components/About/approach-section';
import ConsultationSection from '../../components/About/consultation-section';
import ValuesSection from '../../components/About/Values-section';
import SOScta from '../../components/About/SOScta';
import BottomAbout from '../../components/About/BottomAbout';

export default function Services() {
  return (
    <Layout title="About Us">
      {/* <img src="/testback-8.png" alt="" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}
      {/* <HeroAbout /> */}
      <ApproachSection />
      <ConsultationSection />
      <ValuesSection />
      <SOScta />
      <BottomAbout />
    </Layout>
  );
}
