import React from 'react'

const HeroService = ({ styles }) => {
  return (
    <div className={styles.top_section}>
    <div className={styles.top_content}>
      <h1 className="primary-title">Services</h1>
    </div>
    <img className={styles.top_pattern} src="/img/services/top-pattern-bg.svg" alt="top pattern" />
  </div>
  )
}

export default HeroService
