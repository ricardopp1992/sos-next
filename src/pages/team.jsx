import React from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/HeroComponent';
import Content1 from '../components/Team/Content1';
import TeamMember from '../components/Team/OurTeamMember';
import Leadership from '../components/Team/Leadership';
import JoinTheTeam from '../components/Team/JoinTheTeam';

export default function Team() {
  return (
    <Layout title="Team">
      <Hero title="Team" subtitle={<>We are serious about security.</>} image="/img/team/team-hero.png" />
      <Content1 />
      <TeamMember />
      <Leadership />
      <JoinTheTeam />
    </Layout>
  );
}