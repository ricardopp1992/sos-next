import React from 'react';

import styles from '../../assets/styles/index.module.css';

const HomeHero = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h1 className="primary-title">
          When life is on the line, we are there to <br className="d-none d-lg-block" />
              defend and protect.
            </h1>
        <a className={styles.black_btn} href="#">Get Protection</a>
      </div>
      <div className={styles.hero_img_wrapper}>
        <img className={styles.hero_img} src="/img/home/hero-1.png" alt="hero img" />
        <img className={styles.hero_pattern}  src="/img/home/hero-pattern-1.svg" alt="hero pattern" />
      </div>
    </div>
  );
};

export default HomeHero;