import React from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/HeroComponent';

const About = () => {
  return (
    <Layout title="About">
      <Hero title="About" image="/img/about/hero-about.png" />
    </Layout>
  );
}

export default About;
