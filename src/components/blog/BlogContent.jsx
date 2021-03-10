import React from 'react'
import { Container, Row } from 'react-bootstrap';

import BlogItems from './BlogItems';

const BlogContent = ({ articles }) => {
  return(
    <Container className="">
      <div className="pt-13 pt-lg-16">
          <Row className="justify-content-center px-xl-0">
            <BlogItems />
          </Row>
        </div>
    </Container>
  )
}

export default BlogContent