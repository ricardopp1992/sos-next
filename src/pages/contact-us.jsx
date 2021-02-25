
import Layout from '../components/Layout/Layout'
import Hero from '../components/HeroComponent';
import Contact from '../components/Contact/Contact'

export default function ContactUs () {
  return (
    <Layout title="Contact Us">
      <Hero title="About" image="/img/about/hero-about.png" />
      <Contact />
    </Layout>
  );
}