import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_blog.module.scss';

const BlogItems = ({ img, title, slug, excerpt }) => {

  return (
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pt-5 mt-5">
        <Col lg={10}>
          <div className="pb-3">
            <Link href={`/blog/${slug}`}><a><img className={`${styles.img} rounded-lg `} src={img} /></a></Link>
          </div>
          <Link href={`/blog/${slug}`}><a className={`${styles.titleText} text-justify `}><p>{title}</p></a></Link>
          <Link href = {`/blog/${slug}`}><a className={`${styles.text} d-block`}>{excerpt}</a></Link>
        </Col>
      </div>
  );
};

export default BlogItems;