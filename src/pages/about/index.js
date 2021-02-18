import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './about.module.css'

export default function Services() {
  return (
    <div>
      {/* <img src="/testback-8.png" alt="" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

      <Head>
        <title>About - SOS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/font/Aeonik-Regular.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/font/Aeonik-Bold.otf" as="font" crossOrigin="" />
      </Head>

      <Navbar />

      <main>
        <div className={styles.top_section}>
          <div className={styles.top_content}>
            <h1 className="primary-title">About</h1>
            <h4 className={styles.top_subtitle}>We go beyond security.</h4>
            <p className={styles.top_detail}>
              SOS Private Security offers consulting, operations, events, and ongoing relationships with our clients to
              address their security needs and concerns. Our list of services is extensive and we are always working
              with clients to create a security experience that matches their needs.
            </p>
          </div>
          <img className={styles.top_pattern} src="/img/services/top-pattern.svg" alt="top pattern" />
        </div>

        <div className={styles.approach_section}>
          <h4 className={styles.approach_title}>Licence Number: 122.001374</h4>
          <Row>
            <Col lg={6}>
              <div className={styles.approach_content}>
                <h3 className="subtitle">Approach</h3>
                <p className={styles.approach_detail}>
                  Our military expertise allows us to act as your security partner to design a
                  solution right for your needs. We work with clients within their budgets and
                  uniquely provide any information requested pertaining to team members assigned
                  to deter and protect their assets.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <img className={styles.approach_img} src="/img/about/approach.jpg" alt="approach" />
            </Col>
          </Row>
        </div>

        <div className={styles.consult_section}>
          <Row>
            <Col lg={4}>
              <h4 className={styles.consult_title}>Consultations</h4>
              <p className={styles.consult_detail}>
                Let our team of experts guide you towards the appropriate solution to fit your needs. We are
                dead serious about protecting your assets and bring creative solutions to ensure success.
              </p>
            </Col>
            <Col lg={4}>
              <h4 className={styles.consult_title}>Not every situation calls for a show of force.</h4>
              <p className={styles.consult_detail}>
                Our customizable approach and expertise allow us to be the message you need for the situation.
                We are there to set the tone you are looking for and match the style of the situation. Whether
                we are blending into a crowd, professionally concealed, or in full tactical attire, our mission
                never wavers. Let us build you a perfect team and create the plans we hope to never have to execute.
              </p>
            </Col>
            <Col lg={4}>
              <h4 className={styles.consult_title}>We have the power</h4>
              <p className={styles.consult_detail}>
                Our incredible team is more than capable to handle any situation thrown at them. We are always striving
                to avoid situations, however when the indeed arises we are capable of XYZ. Have the right to detain, cuff,
                and use gas canisters when necessary. Our team is expertly trained on the porper show of force.
              </p>
            </Col>
          </Row>
          <div className={styles.blue_btn_wrapper}>
            <a className="blue_btn" href="#">See Our Security Services</a>
          </div>
        </div>

        <div className={styles.value_section}>
          <h3 className="subtitle">Values</h3>
          <Row className={styles.value_row}>
            <Col lg={3}>
              <h4 className={styles.value_title}>Loyalty</h4>
              <p className={styles.value_detail}>
                Our clients have our devoted loyalty and full commitment to safety. Our expertise is focused on one mission: You.
              </p>
            </Col>
            <Col lg={3}>
              <h4 className={styles.value_title}>Order</h4>
              <p className={styles.value_detail}>
                We create order in every situation no matter the circumstances. We have trained, prepared, and planned for every
                possible scenario and are the leaders you need to avoid a crisis.
              </p>
            </Col>
            <Col lg={3}>
              <h4 className={styles.value_title}>Professionalism</h4>
              <p className={styles.value_detail}>
                We hold ourselves to the highest professional standards that ensure your experience is exemplary.
                Professionalism shows up in how we approach our work, our expertise, and our composure.
              </p>
            </Col>
            <Col lg={3}>
              <h4 className={styles.value_title}>Confidence</h4>
              <p className={styles.value_detail}>
                Confidence comes from knowing your safety and security is ensured. We earn your confidence
                not just in our experience, but in every interaction.
              </p>
            </Col>
          </Row>
        </div>

        <div className={styles.connect_section}>
          <img className={styles.connect_pattern} src="/img/home/connect-pattern.svg" alt="connect" />
          <div className={styles.connect_content}>
            <h1 className="primary-title">Send us an SOS signal</h1>
            <a className="blue_btn" href="#">Connect</a>
          </div>
        </div>

        <div className={styles.bottom_section}>
          <h3 className="subtitle">SOS is a little different than your typical options. See how we stack up.</h3>
        </div>
      </main>

      <Footer />
    </div>
  )
}