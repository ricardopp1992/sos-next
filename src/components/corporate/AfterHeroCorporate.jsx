import React from 'react';
import TextAfterHero from '../TextAfterHero';

import styles from '../../assets/styles/pages/_corporate.module.scss';

const AfterHeroCorporate = () => {
  return (
    <TextAfterHero sm={12} lg={12}>
      <div className={styles.after_hero}>
        <h5>When it comes to maintaining order or creating it, the SOS team is an invaluable resource and partner for your organization.</h5>
        <p>From intense tactical missions of reconnaissance, undercover, and search and seizure to neutralizing workplace threats we make sure your mission stays on track. Plus, we consistently assist federal, state and local law enforcement agencies in ticket citations and several criminal arrests.</p>
      </div>
    </TextAfterHero>
  );
};

export default AfterHeroCorporate;