import React from 'react';

import styles from '../../assets/styles/index.module.css'

const HomeAbout = () =>{
  return(
    <Hero
      image="/img/about/Hero-About.png"
      pattern="/img/services/top-pattern.svg"
    />
  )
}


const Hero = ({image, pattern}) => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_img_wrapper}>
        <img className={styles.hero_img} src={image} alt="hero img" />
        <img className={styles.hero_pattern}  src={pattern} alt="hero pattern" />
      </div>
    </div>
  );
};
export default HomeAbout
