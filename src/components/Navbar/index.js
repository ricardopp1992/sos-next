import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap'

import Logo from '../Logo/Logo';

import styles from './Navbar.module.scss'

export default function Navmenu() {
  return (
    <Navbar className={styles.navbar} collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle className={styles.nav_toggle} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="pt-3 justify-content-end" id="responsive-navbar-nav">
        <Nav className="dropdown" className={styles.sub_menu}>
          <Link href="/#"  >
          <a className={styles.nav_link}>Services</a>
          </Link>
          <Nav className="dropdown-menu navbar bg-dark" className={styles.sub_menu_content}>
            <Link href="/services">
              <a className={`${styles.nav_link} dropdown-item text-white`}>Services</a>
            </Link>
            <Link href="/#">
              <a className={`${styles.nav_link} dropdown-item text-white`}>Personal</a>
            </Link>
            <Link href="/#">
              <a className={`${styles.nav_link} dropdown-item text-white`}>Corporate</a>
            </Link>
            <Link href="/#">
              <a className={`${styles.nav_link} dropdown-item text-white`}>International</a>
            </Link>
            <Link href="/#">
              <a className={`${styles.nav_link} dropdown-item text-white`}>Trainings and courses</a>
            </Link>
          </Nav>
        </Nav>
        <Nav className="dropdown" className={styles.sub_menu}>
          <Link href="/#" className="dropdown-toggle">
          <a className={styles.nav_link} >About</a>
          </Link>
          <Nav className="dropdown-menu navbar bg-dark" className={styles.sub_menu_content}>
            <Link href="/about">
              <a className={`${styles.nav_link} dropdown-item text-white`}>About</a>
            </Link>
            <Link href="/#">
              <a className={`${styles.nav_link} dropdown-item text-white`}>Team</a>
            </Link>
          </Nav>
        </Nav>
        <Nav><Link href="/#"><a className={styles.nav_link} >Partners</a></Link></Nav>
        <Nav><Link href="/#"><a className={styles.nav_link} >Contact</a></Link></Nav>
        <Nav className={styles.nav_btn}>
          <Link href="#">
            <a className="blue_btn">Get Protection</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}