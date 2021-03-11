import React from 'react';
import Link from 'next/link'
import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout/Layout';

import { getPost, getrelatedPost } from '../../lib/ghostClient';
import { Container } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_blog.module.scss';

const BlogPages = ({articles, relatedPost}) => {
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
      <div className={styles.section}>
        <img className={styles.imgArticle} src={articles.feature_image} alt="" />
        <div>
          <div>
            <div className="row justify-content-center">
              <div className="col-10">
                <h1 className="pb-5 pt-5">{articles.title}</h1>
                <div className={styles.articleHtml}  dangerouslySetInnerHTML={{ __html: articles.html }} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}}
export const getServerSideProps = async ({ params }) => {
  const route = params.BlogPages || '404';
  let articles, relatedPost;

  try {
    articles = await getPost (route);
    relatedPost = await getrelatedPost(article.primary_tag.slug);
  } catch (err) {
    console.log(err);
  }

  if (!articles) articles = {};
  if (!relatedPost) relatedPost = [];

  return { props: { articles, relatedPost } };
};

export default BlogPages;