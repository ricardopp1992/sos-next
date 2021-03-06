import React from 'react';

const HeroComponent = ({ title, subtitle = '', image }) => {
  return (
    <div className={`hero_section hero-2`}>
      <div className={`hero_content`}>
        <h1 className="primary-title">{title}</h1>
        <h3>{ subtitle }</h3>
      </div>
      <img className={`hero_img`} src={image} alt="hero img" />
      <img className={`hero_pattern`} src="/img/hero-2-patter.svg" alt="hero pattern" />
    </div>
  );
};

export default HeroComponent;