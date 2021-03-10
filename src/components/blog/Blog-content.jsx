import React from 'react'
import { Container } from 'react-bootstrap';

import BlogItems from './blog-items';

const BlogContent = (article) => {

  return(
    <Container className="">
      <div className="pt-13 pt-lg-16">
          <div className="row justify-content-center px-xl-0">
            <BlogItems />
            <img src={article.img} />
            <h1>{article.title}</h1>
          </div>
        </div>
    </Container>
  )
}

export default BlogContent