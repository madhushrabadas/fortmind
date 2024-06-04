import { LineChart } from "@mui/x-charts";
import React from "react";
import { PiCopyThin } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

const ProfileViews = () => {
  return (
    <div className="border p-4 rounded-xl w-[65%]">
      <div className="top flex items-center justify-between">
        <div className="font-semibold text-xl">Profile Views</div>
        <div className="dropdown border flex gap-1 items-center text-xs p-2 rounded-lg">
          <PiCopyThin color="blue" />
          Monthly
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="chart">
        <LineChart
          xAxis={[{ data: [2, 3, 4, 6, 7, 9] }]}
          series={[{ curve: "linear", data: [2, 5, 2, 6, 3, 9.3] }]}
          height={500}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </div>
    </div>
  );
};

export default ProfileViews;
