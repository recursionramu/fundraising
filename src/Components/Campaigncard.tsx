

import React from "react";

type CampaignCardProps = {
  title: string;
  amountRaised: number;
  image: string;
  goal: number;
};

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  amountRaised,
  image,
  goal,
}) => {
  const percentageRaised = Math.min((amountRaised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-xs">
      <img
        src={image}
        alt={title}
        className="rounded-md w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-black border-b-2 border-black pb-2 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">${amountRaised.toLocaleString()} raised</p>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-900 h-2.5 rounded-full"
          style={{ width: `${percentageRaised}%` }}
        />
      </div>

      <button className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">
        Donate
      </button>
    </div>
  );
};

export default CampaignCard;
