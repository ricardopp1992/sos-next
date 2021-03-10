import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import styles from '../../assets/styles/pages/_blog.module.scss';

const BlogItems = ({ img, title }) => {

  return (
    <Container className="">
      <div className="article-item col-lg-4 col-md-5 col-sm-7 col-xs-8 my-5">
        <div className=" h-50 d-flex flex-column justify-content-evenly rounded-15 px-5 py-5 gr-hover-3 mb-9 ">
          <div className="mb-14">
            <img className={` ${styles.img} rounded-lg`} src={img} />
          </div>
          <Link href={''}><a className="text-justify pt-2 fw-normal">{title}</a></Link>
        </div>
      </div>
    </Container>
  );
};

export default BlogItems;