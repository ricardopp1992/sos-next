import BlogContent from '../../components/blog/BlogContent';
import Layout from '../../components/Layout/Layout';
import { getArticles } from '../../lib/ghostClient';

export default function Blog({ articles }) {
  console.log(articles)
  return (
    <Layout title="Blog">
      <BlogContent articles={articles} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const articles = await getArticles();

  console.log(articles);
  return { props: { articles } }
}
