import React from 'react';

const HeroPattern = ({ title, content = '', backgroundColor = false }) => {
  return (
    <div className={`hero_section`}>
      <div className={`hero_content hero_2`}>
        <h1 style={{ paddingTop: content ? false : '5rem' }} className="primary_title_2">{title}</h1>
        <p className="hero_text">{ content }</p>
      </div>
      <img className={`hero_pattern pattern_2`} src="/hero-patter-2.svg" alt="hero pattern" />
      <div style={{ backgroundColor }} className="hero_background_2" />
    </div>
  );
}

export default HeroPattern;