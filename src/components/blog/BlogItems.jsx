import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_blog.module.scss';

const BlogItems = ({ img, title, slug, excerpt }) => {

  return (
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pt-5 mt-5">
        <Col lg={10}>
            <img className={styles.img} src={img} />
          <Link href={`/blog/${slug}`}><a className="text-justify fw-normal">{title}</a></Link>
        </Col>
      </div>
  );
};

export default BlogItems;