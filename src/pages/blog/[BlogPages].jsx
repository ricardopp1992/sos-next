import React from 'react';
import Link from 'next/link'
import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout/Layout';

import { getPost } from '../../lib/ghostClient';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_blog.module.scss';

const BlogPages = ({ articles }) => {
  if (!articles.html) {
    return (
      <Layout title="Blog">
        <Container className={styles.Nosection}>
          <h3 className="text-center py-5">No Article Found.</h3>
          <p className="text-center">please go to the <Link href="/blog"><a>blog section</a></Link> to find more articles.</p>
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout title="Blog">
        <img className={styles.imgArticle} src={articles.feature_image} alt="" />
        <Container className={styles.section}>
          <Row>
            <Col sm={12} className="pr-0">
              <h1 className="pb-5 pt-5">{articles.title}</h1>
              <div className={styles.articleHtml} dangerouslySetInnerHTML={{ __html: articles.html }} />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
export const getServerSideProps = async ({ params }) => {
  const route = params.BlogPages || '404';
  let articles;

  try {
    articles = await getPost(route);
  } catch (err) {
    console.log(err);
  }

  if (!articles) articles = {};

  return { props: { articles } };
};

export default BlogPages;