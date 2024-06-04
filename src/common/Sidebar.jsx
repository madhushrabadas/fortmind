import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import acc from "../../public/acc.png";
import activity from "../../public/activity.png";
import campaigns from "../../public/campaigns.png";
import category from "../../public/category.png";
import chat from "../../public/chat.png";
import discovery from "../../public/discovery.png";
import list from "../../public/list.png";
import logout from "../../public/logout.png";
import star from "../../public/star.png";
import side from "../../public/side.png";

import { IoMdArrowDropdown } from "react-icons/io";

const sidebarData = [
  { name: "Dashboard", icon: category, path: "/dashboard" },
  {
    name: "Listings",
    icon: list,
    subItems: [
      { name: "Applied Listing", icon: list, path: "/listing/applied" },
      { name: "Saved Listings", icon: list, path: "/listing/saved" },
      { name: "Collaboration History", icon: list, path: "/history" },
    ],
  },
  { name: "Campaigns", icon: campaigns, path: "/campaigns" },
  { name: "Explore Brand Deals", icon: discovery, path: "/Explore" },
  { name: "Profile Activity", icon: activity, path: "/ProfileActivity" },
  { name: "Messages", icon: chat, path: "/Messages" },
  { name: "Reviews", icon: star, path: "/reviews" },
  { name: "Account Settings", icon: acc, path: "/AccountSettings" },
  { name: "Logout", icon: logout, path: "/Logout" },
];

function Sidebar() {
  const [isListingOpen, setIsListingOpen] = useState(false);

  const toggleSubItems = (index) => {
    if (index === 1) {
      setIsListingOpen(!isListingOpen);
    }
  };

  return (
    <div className="bg-[#FAFBFB] flex justify-between flex-col w-64 border-r-[1px]">
      <div className="top">
        <div className="logo p-6 py-2">
          <img src={logo} alt="logo" />
        </div>
        <ul className="space-y-4 py-10 px-6 h-full text-sm">
          {sidebarData.map((item, index) => (
            <li key={item.name}>
              {item.subItems ? (
                <>
                  <div
                    className="hover:bg-blue-600 hover:text-white p-2 rounded-xl flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSubItems(index)}
                  >
                    <div className="flex">
                      {" "}
                      <img src={item.icon} alt={item.name} className="mr-4  " />
                      {item.name}
                    </div>

                    <IoMdArrowDropdown />
                  </div>
                  {isListingOpen && index === 1 && (
                    <ul className="pl-8  space-y-3">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name} className="mt-3 border-l-[1px] ">
                          <Link
                            to={subItem.path}
                            className="flex items-center hover:bg-blue-600 hover:text-white p-2 rounded-xl"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-900 hover:bg-blue-600 hover:text-white p-2 rounded-xl flex items-center"
                >
                  <img src={item.icon} alt={item.name} className="mr-4" />
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="btm border p-6 py-4 mb-12 bg-blue-500 text-white m-4 rounded-xl">
        <div className="icon text-center my-3 flex items-center justify-center">
          <img src={side} />
        </div>
        <div className="text-sm">Upgrade to PRO for more resources</div>
        <button className="btn bg-white capitalize w-full rounded-lg p-2 mt-3 text-blue-600">
          upgrade now
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
