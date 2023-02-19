import React from 'react';

import config from '../config';
import Divider from './Divider';

const Testflight = () => {
  const { assetHub } = config;

  return (
    <section className={`bg-background dark:bg-slate-900 py-8`} id="assetHub">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center dark:text-white`}
        >
          <span>{assetHub?.title}</span>
        </h1>
        <Divider />
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-2/5 p-6`}>
            <img src={assetHub?.img} alt={assetHub?.title} />
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <div className={`align-middle`}>
              <p className={`text-gray-600 dark:text-white mb-8`}>
                {assetHub?.description}
              </p>
              <p className={`text-gray-600 dark:text-white mb-8`}>
                {assetHub?.description1}
              </p>
              <div className="rounded-md shadow">
                <a
                  target={'_blank'}
                  href={assetHub.primaryAction.href}
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                  rel="noreferrer"
                >
                  {assetHub.primaryAction.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testflight;
