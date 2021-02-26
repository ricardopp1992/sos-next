import Layout from '../components/Layout/Layout'
import Contact from '../components/Contact/Contact'
import HeroPattern from '../components/HeroPattern';

export default function ContactUs () {
  return (
    <Layout title="Contact Us">
      <HeroPattern title="Contact Us" backgroundColor="#fff" />
      <Contact />
    </Layout>
  );
}