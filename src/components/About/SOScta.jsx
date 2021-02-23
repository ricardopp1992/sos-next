import React from 'react';

import styles from '../../assets/styles/pages/_about.module.scss';

const SOScta = () => {
  return (
    <div className={styles.connect_section}>
      <img className={styles.connect_pattern} src="/img/home/connect-pattern.svg" alt="connect" />
      <div className={styles.connect_content}>
        <h1 className="primary-title">Send us an SOS signal</h1>
        <a className="blue_btn" href="#">Connect</a>
      </div>
    </div>
  );
};


export default SOScta;