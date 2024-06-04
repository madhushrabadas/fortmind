import { Gauge } from "@mui/x-charts";
import React from "react";

const SearchScore = () => {
  return (
    <div className="  border rounded-xl p-3 flex">
      <div className="left flex-1 flex items-end justify-between mr-4">
        <div className="gauge ">
          <div className="text-lg font-semibold mb-2">Search Score</div>

          <Gauge width={110} height={110} value={90} />
        </div>
        <div className="p-2   pb-4">
          <div className="text-xl font-semibold">Great Job!</div>
          <div className="text-gray-400 text-sm">
            Your Profile is appearing in all relevant searches
          </div>
          <div className="border text-sm rounded-lg p-3 py-2 w-fit mt-3">
            Improve your Score
          </div>
        </div>
      </div>
      <div className="h-36 w-[2px]   bg-gray-100 "></div>
      <div className="right flex-1 ml-4 mt-4 p-4">
        <div className="text-xl font-semibold">Introducing Search Score</div>
        <div className="text-gray-400 text-sm">
          Search Score measures how your profile will perform in a search.
          Profiles with higher scores are more likely to get chosen by brands to
          collaborate with.
        </div>
      </div>
    </div>
  );
};

export default SearchScore;
