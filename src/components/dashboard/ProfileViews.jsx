import { LineChart } from "@mui/x-charts";
import React from "react";

const ProfileViews = () => {
  return (
    <div className="border p-4 rounded-xl w-[60%]">
      <div className="top flex items-center justify-between">
        <div className="font-semibold text-xl">Profile Views</div>
        <div className="dropdown bg-red-800">months</div>
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
