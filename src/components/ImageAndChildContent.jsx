import React from 'react';
import { Col } from 'react-bootstrap';


import styles from '../assets/styles/components/_imageAndContent.module.scss';

const ImageAndChildContent = ({ right, image, children }) => {
  return (
    <div className={styles.personal_content}>
      <Col lg={6} className={`${right ? styles.image_right : ''} ${styles.image} d-none d-lg-flex`}>
        <img src={image} alt="content image description" />
      </Col>
      <Col sm={12} lg={6} className={`${right ? styles.content_left : ''} ${styles.content_children}`}>
        {
          children
        }
      </Col>
    </div>
  );
};

export default ImageAndChildContent;