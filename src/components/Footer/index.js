import Link from 'next/link'
import { Form, Button } from 'react-bootstrap'

import FooterServices from './FooterServices';

import styles from './Footer.module.css'

export default function Footer({ footerStyle = false, activeGoUp }) {
  let FooterEl;

  if (!footerStyle) {
    FooterEl = <FooterDefault activeGoUp={activeGoUp} />
  } else if (footerStyle === 'footer-service') {
    FooterEl = <FooterServices />
  }

  return FooterEl;
}

const FooterDefault = ({ activeGoUp }) => {
  return (
    <footer className={styles.footer}>
      { activeGoUp && <span className={styles.go_up}>Go up</span>}

      <div className={styles.footer_main}>
        <div className={`my-2 ${styles.footer_mapsite}`}>
          <Link href="/">
            <a className={styles.footer_link}>Home</a>
          </Link>
          <Link className={styles.footer_link} href="/contact-us">
            <a className={styles.footer_link}>Contact us</a>
          </Link>
        </div>
        <div className={styles.form_wrapper}>
          <span className={styles.form_label}>Stay informed</span>
          <Form className="d-flex">
            <Form.Control className={styles.email_box} type="email" placeholder="E-mail" />
            <Button className={styles.form_btn} type="submit">Sign up</Button>
          </Form>
        </div>
      </div>
      <span className={styles.copyright}>copyright @ 2021</span>
      <p className={styles.footer_licence}>Licence Number: 122.001374</p>
    </footer>
  );
}