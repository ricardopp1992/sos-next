import Link from 'next/link'
import { Form, Button } from 'react-bootstrap'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.go_up}>Go up</span>

      <div className={styles.footer_main}>
        <div className="my-2">
          <Link href="/">
            <a className={styles.footer_link}>Home</a>
          </Link>
          <Link className={styles.footer_link} href="#">
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

      <span className={styles.copyright}>COPYRIGHT @ 2021</span>
    </footer>
  )
}