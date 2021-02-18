import React from 'react';
import Head from 'next/head';

import Footer from '../Footer';
import Navbar from '../Navbar/index';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} | SOS`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/font/Aeonik-Regular.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/font/Aeonik-Bold.otf" as="font" crossOrigin="" />
      </Head>
      <Navbar />
      <main>
        {
          children
        }
      </main>
      <Footer />
    </>
  );
}

export default Layout;
