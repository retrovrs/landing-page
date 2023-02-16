import React from 'react';

import config from '../config';
import Divider from './Divider';

const Squad = () => {
  const { squad } = config;
  const { title, items: squadList } = squad;
  return (
    <div className={`py-12 bg-background robots-nocontent`} id="squad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center`}
        >
          <span>{title}</span>
        </h1>
        <Divider />
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {squadList.map((person) => (
              <div key={person.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary`}
                  >
                    <img src={person.icon} alt={person.name} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {person.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {person.title}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {person.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Squad;
