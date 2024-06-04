import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isListingOpen, setIsListingOpen] = useState(false);

  return (
    <div className="bg-gray-200 text-white h-screen w-64">
      <div className="logo">logo</div>
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/dashboard" className="text-gray-900 hover:text-white">
            Dashboard
          </Link>
        </li>
        <li>
          <div
            className="text-gray-900 hover:text-white"
            onClick={() => setIsListingOpen(!isListingOpen)}
          >
            Listing
          </div>
          {isListingOpen && (
            <ul className="pl-4 space-y-2">
              <li>
                <Link to="/listing" className="text-gray-900 hover:text-white">
                  Add Listing
                </Link>
              </li>
              <li>
                <Link to="/listing" className="text-gray-900 hover:text-white">
                  Manage Listings
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/campaigns" className="text-gray-900 hover:text-white">
            Campaigns
          </Link>
        </li>
        <li>
          <Link to="/Explore" className="text-gray-900 hover:text-white">
            Explore Brand Deals
          </Link>
        </li>
        <li>
          <Link
            to="/ProfileActivity"
            className="text-gray-900 hover:text-white"
          >
            Profile Activity
          </Link>
        </li>
        <li>
          <Link to="/Messages" className="text-gray-900 hover:text-white">
            Messages
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="text-gray-900 hover:text-white">
            reviews
          </Link>
        </li>
        <li>
          <Link
            to="/Account Settings"
            className="text-gray-900 hover:text-white"
          >
            Account Settings
          </Link>
        </li>
        <li>
          <Link to="/Logout" className="text-gray-900 hover:text-white">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
