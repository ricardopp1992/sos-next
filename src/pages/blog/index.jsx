import BlogContent from '../../components/blog/BlogContent';
import Layout from '../../components/Layout/Layout';
import { getArticles } from '../../lib/ghostClient';

export default function Blog({ articles }) {
  return (
    <Layout title="Blog">
      <BlogContent articles={articles} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  let articles;

  try {
    articles = await getArticles();
  } catch (err) {
    articles = []
    console.error(err);
  }

  if (!articles) articles = [];

  return { props: { articles } }
}
