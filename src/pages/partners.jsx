import React from 'react';

import Layout from '../components/Layout/Layout';
import HeroPattern from '../components/HeroPattern';
import PartnersContent from '../components/partnets/PartnersContet';
import CTACourses from '../components/trainining-and-courses/CTACourses';

const Partners = () => {
  return (
    <Layout title="Partners">
      <HeroPattern title="Partners" content="We build relationships with the most trusted, professional and decorated teams in the world." />
      <PartnersContent />
      <CTACourses text="Contact us to be part of our network." />
    </Layout>
  );
};

export default Partners;