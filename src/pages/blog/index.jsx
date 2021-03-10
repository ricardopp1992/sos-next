import BlogContent from '../../components/blog/Blog-content';
import Layout from '../../components/Layout/Layout';



export default function Blog (  ) {
  const articles = [
    {
    img:'/img/team/leadership.png',
    title:'Im a title'
    },
    {
    img:'/img/team/leadership.png',
    title:'Im a title'
    },
    {
    img:'/img/team/leadership.png',
    title:'Im a title'
    },
    {
    img:'/img/team/leadership.png',
    title:'Im a title'
    },
  ]
  return (
    <Layout title="Blog">
      <BlogContent  article={articles}/>

    </Layout>
  );
}
