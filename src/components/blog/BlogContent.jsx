import React from 'react'
import { Container, Row } from 'react-bootstrap';

import BlogItems from './BlogItems';

const BlogContent = ({ articles }) => {
  return (
    <Container className="pt-5">
      <h2 className="pt-5 mt-5">Articles</h2>
      <Row>
        {
          articles.map(article => (
            <BlogItems
              key={article.id}
              img={article.feature_image}
              title={article.title}
              slug={article.slug}
              excerpt={article.excerpt}
            />
          ))
        }
      </Row>
    </Container>
  )
}

export default BlogContent