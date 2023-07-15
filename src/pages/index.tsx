import React, { useEffect } from 'react';

import Script from 'next/script';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import LuxuryHub from '../components/LuxuryHub';
import Main3D from '../components/Main3D';
import MainHero from '../components/MainHero';
import Product from '../components/Product';
import Squad from '../components/Squad';
import Testflight from '../components/Testflight';

const App = () => {
  useEffect(() => {
    document.title = 'Retro//vrs';
  }, []);
  return (
    <html className="dark">
      <div
        className={`bg-background dark:bg-slate-900 grid gap-y-16 overflow-hidden`}
      >
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=68df15d1-2b5f-4ca1-adb3-6ffcf25f05c9"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S8DDM05FM9"
          strategy="afterInteractive"
        />
        <Script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VLj4Qk"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S8DDM05FM9');
        `}
        </Script>
        <div className={`relative bg-background dark:bg-slate-900`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background dark:bg-slate-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <Main3D />
        </div>
        <Canvas />
        <LazyShow>
          <>
            <LuxuryHub />
            <Canvas />
          </>
        </LazyShow>
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
          <>
            <Squad />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <About />
        </LazyShow>
        <Analytics />
      </div>
    </html>
  );
};

export default App;
