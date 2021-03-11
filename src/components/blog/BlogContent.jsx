import React from 'react'
import { Row } from 'react-bootstrap';


import styles from '../../assets/styles/pages/_blog.module.scss';
import BlogItems from './BlogItems';

const BlogContent = ({ articles }) => {
  return(
    <div className={styles.items}>
      <div className="pt-5 pt-lg-5">
      <Row>
          {
            articles.map(article => (
              <BlogItems
                key={article.id}
                img={article.feature_image}
                title={article.title}
                slug={article.slug}
                />
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default BlogContent