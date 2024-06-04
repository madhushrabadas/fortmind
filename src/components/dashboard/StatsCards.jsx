import React from "react";
import { Link } from "react-router-dom";

const cardsData = [
  {
    color: "red",
    // icon: <TextsmsRoundedIcon />,
    text: "Profile Views",
    qty: 2300,
    link: "/dashboard",
  },
  {
    color: "blue",
    // icon: <ListAltIcon />,
    text: "Applied Listing",
    qty: 44,
    link: "/listing",
  },
  {
    color: "green",
    // icon: <CampaignIcon />,
    text: "Saved Listing",
    qty: 17,
    link: "/campaigns",
  },
  {
    color: "yellow",
    // icon: <ExploreIcon />,
    text: "Featured Listing",
    qty: 5295,
    link: "/explore",
  },
];

const StatsCards = () => {
  return (
    <div className=" my-10 flex gap-5 items-center justify-between">
      {cardsData.map((itm, idx) => {
        return (
          <div
            key={idx}
            className="border p-4 rounded-xl flex items-center flex-1 gap-3"
          >
            <div className="icon border rounded-lg p-3">icon</div>
            <div className="conts   ">
              <div className="p">{itm.text}</div>
              <div className="qty text-2xl font-bold">{itm.qty}</div>
              <Link to={itm.link} className="text-blue-600 text-sm">
                view all
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
