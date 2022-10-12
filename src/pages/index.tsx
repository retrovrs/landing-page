import React, { useEffect } from 'react';

import Script from 'next/script';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';
import Testflight from '../components/Testflight';

const App = () => {
  useEffect(() => {
    document.title = 'Retro//vrs';
  }, []);
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S8DDM05FM9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S8DDM05FM9');
        `}
      </Script>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Testflight />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
