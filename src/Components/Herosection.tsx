// components/HeroSection.tsx

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="text-center pt-32 pb-16 px-4 bg-gradient-to-t from-white via-orange-100 to-orange-300">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Welcome  <br /> Heroes of Change ,
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Start your campaign or support a cause you care about.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/start">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium">
            Start a Campaign
          </button>
        </Link>
        <Link href="/campaigns">
          <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded-lg font-medium">
            View Campaigns
          </button>
        </Link>
        <Link href="/donate">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium">
            Donate
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
