import React from 'react';
import BlogItems from '../../components/blog/blog-items';
import Layout from '../../components/Layout/Layout';

const BlogPages = () => {
  return (
    <Layout title="Blog">
      <div>
        <h3 className="text-center">Articles</h3>
        <div className="row justify-content-center px-xl-0">
          {/* {
            articles.map(article => (
              <BlogItems
                img={article.img}
                title={article.title}
              />
            ))
          } */}
        </div>
      </div>
    </Layout>
  );
}

export default BlogPages;