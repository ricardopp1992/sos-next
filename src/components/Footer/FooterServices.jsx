import React from "react";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

import stylesF from "./Footer.module.css";

const FooterServices = () => {
  return (
    <>
      <footer className={`${stylesF.footer} footer_service`}>
        <img
          className={`${`bottom_pattern`} z-index-2 d-none d-lg-block`}
          src="/img/services/footer-service-pattern.svg"
          alt="bottom pattern"
        />
        <img
          className={`${`bottom_pattern`} z-index-2 d-lg-none`}
          src="/img/services/patter_service_footer_mobile.png"
          alt="bottom pattern"
        />
        <div className="cta_button">
          <h3 className="subtitle ml-0 w-100 w-lg-50">
            Our agile and flexible approach ensures that we evaluate your unique
            situation from all angles.
          </h3>
          <div className="w-100 w-lg-50">
            <a className="blue_btn" href="/contact-us">
              Contact us to discuss your situation.
            </a>
          </div>
        </div>
        <div style={{ zIndex: '5' }}>
          <div className={stylesF.footer_main}>
            <div className="my-2">
              <Link href="/">
                <a className={stylesF.footer_link}>Home</a>
              </Link>
              <Link className={stylesF.footer_link} href="/contact-us">
                <a className={stylesF.footer_link}>Contact us</a>
              </Link>
            </div>
            <div className={stylesF.form_wrapper}>
              <span className={stylesF.form_label}>Stay informed</span>
              <Form className="d-flex">
                <Form.Control
                  className={stylesF.email_box}
                  type="email"
                  placeholder="E-mail"
                />
                <Button className={stylesF.form_btn} type="submit">
                  Sign up
                </Button>
              </Form>
            </div>
          </div>
          <span className={stylesF.copyright}>COPYRIGHT @ 2021</span>
        </div>
      </footer>
    </>
  );
};

export default FooterServices;
