import React from 'react';

import styles from '../../assets/styles/index.module.css'

const Hero = ({title, button, image, pattern}) => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h1 className="primary-title">
          {title}
            </h1>
        <a className={styles.black_btn} href="/contact-us">{button}</a>
      </div>
      <div className={styles.hero_img_wrapper}>
        <img className={styles.hero_img} src={image} alt="hero img" />
        <img className={styles.hero_pattern}  src={pattern} alt="hero pattern" />
      </div>
    </div>
  );
};

export default Hero;