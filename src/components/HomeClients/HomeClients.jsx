import React from 'react';

import styles from '../../assets/styles/index.module.css';

const HomeClients = () => {
  return (
    <div className={`${styles.partner_section} partner-section`}>
      <h3 className="subtitle">Our trusted partners and clients</h3>
      <div className={styles.partner_group}>
        <img src="/img/client-01.png" alt="" />
        <img src="/img/client-stragegos.png" alt= "" />
      </div>
    </div>
  );
};

export default HomeClients;