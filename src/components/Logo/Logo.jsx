import React from 'react';
import Link from 'next/link';

import styles from '../Navbar/Navbar.module.scss';

const Logo = ({ className = "" }) => {
  return (
    <>
    <Link href="/">
      <a>
        <img className={`${styles.logo} ${className}`} src="/img/navbar/logo.svg" alt="logo" />
      </a>
    </Link>
    </>
  )
}

export default Logo
