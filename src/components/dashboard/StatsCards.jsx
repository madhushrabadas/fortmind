import React from "react";
import { Link } from "react-router-dom";
import dash1 from "../../../public/dash1.svg";
import dash2 from "../../../public/dash2.svg";
import dash3 from "../../../public/dash3.svg";
import dash4 from "../../../public/dash4.svg";

const cardsData = [
  {
    color: "bg-purple-100",
    image: dash1,
    text: "Profile Views",
    qty: "2,300",
    link: "/profile/views",
  },
  {
    color: "bg-red-100",
    image: dash2,
    text: "Applied Listing",
    qty: 44,
    link: "/",
  },
  {
    color: "bg-green-100",
    image: dash3,
    text: "Saved Listing",
    qty: 17,
    link: "/",
  },
  {
    color: "bg-blue-100",
    image: dash4,
    text: "Featured Listing",
    qty: 5295,
    link: "/",
  },
];
const StatsCards = () => {
  return (
    <div className=" mb-10 mt-8 flex gap-1 items-center justify-between">
      {cardsData.map((itm, idx) => {
        return (
          <div key={idx}>
            <Link
              to={itm.link}
              className="border p-4 rounded-xl flex items-center flex-1 gap-4 w-full"
            >
              <div className={`icon   rounded-xl p-4 ${itm.color}`}>
                <img
                  src={itm.image}
                  alt={`${itm.text} icon`}
                  className="w-10 h-10"
                />
              </div>
              <div className="conts   ">
                <div className="p">{itm.text}</div>
                <div className="qty text-2xl font-bold">{itm.qty}</div>
                <Link to={itm.link} className="text-blue-600 text-sm">
                  view all
                </Link>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
