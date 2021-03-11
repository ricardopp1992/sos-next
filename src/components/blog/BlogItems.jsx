import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_blog.module.scss';

const BlogItems = ({ img, title, slug, excerpt }) => {
  return (
    <Col sm={12} md={6} lg={4} className="mt-5 px-lg-5">
      <div className="pb-3">
        <Link href={`/blog/${slug}`}><a><img className={`${styles.img} rounded-lg `} src={img} /></a></Link>
      </div>
      <Link href={`/blog/${slug}`}><a className={`${styles.titleText} text-justify `}><p>{title}</p></a></Link>
      <Link href={`/blog/${slug}`}><a className={`${styles.text} d-block`}>{excerpt}</a></Link>
    </Col>
  );
};

export default BlogItems;