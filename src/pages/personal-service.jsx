import React from 'react';

import Layout from '../components/Layout/Layout';
import HeroComponent from '../components/HeroComponent';
import AfterHeroService from '../components/personal/AfterHeroService';
import PersonalServiceContent from '../components/personal/PersonalServiceContent';
import QuoteAndCTA from '../components/QuoteAndCTA';

const PersonalService = () => {
  return (
    <Layout title="Personal Service">
      <HeroComponent
        title="Personal Service"
        image="/img/personal-service/personal-service-hero.png" />
      <AfterHeroService />
      <PersonalServiceContent />
      <QuoteAndCTA quote={<>“The best lightning rod for your protection is your own spine.”<br/> ― Ralph Waldo Emerson</>} />
    </Layout>
  );
}

export default PersonalService;
