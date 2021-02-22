import React from 'react';

import styles from '../assets/styles/index.module.css';

const HeroComponent = ({ title, image }) => {
  return (
    <div className={`hero_section hero-2`}>
      <div className={`hero_content`}>
        <h1 className="primary-title">{ title }</h1>
        {/* <a className={`black_btn`} href="#">Get Protection</a> */}
      </div>
      <div className={`hero_img_wrapper`}>
        <img className={`hero_img`} src={image} alt="hero img" />
        <img className={`hero_pattern`} src="/img/hero-2-patter.svg" alt="hero pattern" />
      </div>
    </div>
  );
};

export default HeroComponent;