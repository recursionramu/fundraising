// components/FeaturedCampaigns.tsx

import React from "react";
import Campaigncard from "./Campaigncard";

const campaigns = [
  {
    title: "Support Homeless Families",
    amountRaised: 8000,
    goal: 10000,
    image: "/images/home.jpeg", 
  },
  {
    title: "Fund Children’s Education",
    amountRaised: 4500,
    goal: 8000,
    image: "/images/home2.jpeg",
  },
  {
    title: "Help Build a Library",
    amountRaised: 2500,
    goal: 6000,
    image: "/images/home3.jpeg",
  },
  {
    title: "Help Build a Library",
    amountRaised: 2500,
    goal: 6000,
    image: "/images/home3.jpeg",
  },
  
  {
    title: "Help Build a Library",
    amountRaised: 2500,
    goal: 6000,
    image: "/images/home3.jpeg",
  },
  {
    title: "Support Homeless Families",
    amountRaised: 8000,
    goal: 10000,
    image: "/images/home.jpeg", 
  },
  {
    title: "Fund Children’s Education",
    amountRaised: 4500,
    goal: 8000,
    image: "/images/home2.jpeg",
  },
  {
    title: "Help Build a Library",
    amountRaised: 2500,
    goal: 6000,
    image: "/images/home3.jpeg",
  },
  
];

const FeaturedCampaigns = () => {
  return (
    <section className="py-8 px-6 bg-white">
      <h2 className="text-2xl font-bold text-blue-900 mb-8">
        Featured Campaigns
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {campaigns.map((campaign, index) => (
          <Campaigncard key={index} {...campaign} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
