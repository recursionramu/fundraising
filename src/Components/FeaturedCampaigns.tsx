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
    <section className="pt-20 pb-30 px-30 bg-white">
      <h2 className="text-2xl font-bold text-blue-900 mb-8 px-20">
        Featured Campaigns
      </h2>
      {/* Wrapper div with left padding */}
      <div className="pl-6">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {campaigns.map((campaign, index) => (
            <Campaigncard key={index} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
