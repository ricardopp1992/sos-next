

import Layout from '../../components/Layout/Layout';
import Content1 from '../../components/Team/content1';
import TeamMember from '../../components/Team/OurTeamMember';
import Leadership from '../../components/Team/Leadership';
import JoinTheTeam from '../../components/Team/JoinTheTeam';



export default function Team () {
  return (
    <Layout>
      <Content1 />
      <TeamMember />
      <Leadership />
      <JoinTheTeam />
    </Layout>
  );
}