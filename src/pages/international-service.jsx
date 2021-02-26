import React from 'react';

import Layout from '../components/Layout/Layout';
import HeroComponent from '../components/HeroComponent';
import AfterHeroInternational from '../components/international/AfterHeroInternational';
import ContentInternational from '../components/international/ContentInternational';
import ContentInternational2 from '../components/international/ContentInternational2';
import QuoteAndCTA from '../components/QuoteAndCTA';

const InternationalService = () => {
  return (
    <Layout title="International Service">
      <HeroComponent title="International Service" image="/img/international/international-hero.png" />
      <AfterHeroInternational />
      <ContentInternational />
      <ContentInternational2 />
      <QuoteAndCTA backgroundColor="#C4C4C8" />
    </Layout>
  );
}

export default InternationalService;