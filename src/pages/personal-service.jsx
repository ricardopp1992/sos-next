import React from 'react';

import Layout from '../components/Layout/Layout';
import HeroComponent from '../components/HeroComponent';
import TextAfterHero from '../components/personal/TextAfterHero';
import PersonalServiceContent from '../components/personal/PersonalServiceContent';
import QuoteAndCTA from '../components/personal/QuoteAndCTA';

const PersonalService = () => {
  return (
    <Layout title="Personal Service">
      <HeroComponent
        title="Personal Service"
        image="/img/personal-service/personal-service-hero.png" />
      <TextAfterHero />
      <PersonalServiceContent />
      <QuoteAndCTA />
    </Layout>
  );
}

export default PersonalService;
