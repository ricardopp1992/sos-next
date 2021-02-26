import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Logo from '../Logo/Logo';
import Dropdown from './Dropdown';

import styles from './Navbar.module.scss';

export default function Navmenu() {
  return (
    <Navbar className={styles.navbar} collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle className={styles.nav_toggle} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="pt-3 align-items-start justify-content-lg-end" id="responsive-navbar-nav">
        <Dropdown
          title="Services"
          className={styles.nav_link}>
          <NavDropdown.Item className={`${styles.nav_link} dropdown-item text-white`} href="/services">Services</NavDropdown.Item>
          <NavDropdown.Item className={`${styles.nav_link} dropdown-item text-white`} href="/personal-service">Personal</NavDropdown.Item>
          <NavDropdown.Item className={`${styles.nav_link} dropdown-item text-white`} href="/corporate-service">Corporate</NavDropdown.Item>
          <NavDropdown.Item className={`${styles.nav_link} dropdown-item text-white`} href="/international-service">International</NavDropdown.Item>
          <NavDropdown.Item className={`${styles.nav_link} dropdown-item text-white`} href="/training-and-courses">Training and courses</NavDropdown.Item>
        </Dropdown>
        <Dropdown
          title="About"
          className={styles.nav_link}>
          <NavDropdown.Item className={`${styles.nav_link} dropdown-item text-white`} href="/about">About</NavDropdown.Item>
          <NavDropdown.Item className={`${styles.nav_link} dropdown-item text-white`} href="/team">Team</NavDropdown.Item>
        </Dropdown>
        <Link href="/partners"><a className={`nav-link`} >Partners</a></Link>
        <Link href="/contact-us"><a className={`nav-link`} >Contact</a></Link>
        <Nav className={styles.nav_btn}>
          <Link href="#">
            <a className="blue_btn">Get Protection</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}