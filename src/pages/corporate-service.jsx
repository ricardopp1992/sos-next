import React from 'react';

import Layout from '../components/Layout/Layout';
import HeroComponent from '../components/HeroComponent';
import AfterHeroCorporate from '../components/corporate/AfterHeroCorporate';
import ContentCorporate from '../components/corporate/ContentCorporate';
import ContentCorporate2 from '../components/corporate/ContentCorporate2';
import QuoteAndCTA from '../components/QuoteAndCTA'

const CorporateService = () => {
  return (
    <Layout title="Corporate Service">
      <HeroComponent title="Corporate Service" subtitle={<>In our highly visible environment, your organization can’t afford an incident.</>} image="/img/corporate/hero-coporate.png" />
      <AfterHeroCorporate />
      <ContentCorporate />
      <ContentCorporate2 />
      <QuoteAndCTA backgroundColor="#C4C4C8" />
    </Layout>
  );
}

export default CorporateService;