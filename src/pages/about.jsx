import Hero from '../components/HeroComponent';
import Layout from '../components/Layout/Layout';
import ApproachSection from '../components/About/Approach-section';
import ConsultationSection from '../components/About/Consultation-section';
import ValuesSection from '../components/About/Values-section';
import SOScta from '../components/About/SOScta';
import BottomAbout from '../components/About/BottomAbout';

export default function Services() {
  return (
    <Layout title="About Us">
      <Hero title="About" image="/img/about/hero-about.png" />
      <ApproachSection />
      <ConsultationSection />
      <ValuesSection />
      <SOScta />
      <BottomAbout />
    </Layout>
  );
}
