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
        <Nav.Link><Link href="/services"><a className={styles.nav_link} >Services</a></Link></Nav.Link>
        <Nav.Link><Link href="#"><a className={styles.nav_link} >About</a></Link></Nav.Link>
        <Nav.Link><Link href="#"><a className={styles.nav_link} >Contact</a></Link></Nav.Link>
        <Nav.Link><Link href="#"><a className={styles.nav_link} >Resources</a></Link></Nav.Link>
        <Nav.Link className={styles.nav_btn}>
          <Link href="#">
            <a className="blue_btn">Get Protection</a>
          </Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}