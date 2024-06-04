import React from "react";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const PageHeader = ({ pageName }) => {
  return (
    <div className="bg-white text-black p-3 px-6 pr-12 border border-gray-300 flex justify-between items-center">
      <div className="left font-semibold text-2xl tracking-wider">
        {pageName}
      </div>
      <div className="right flex items-center gap-6">
        <div className="cha bg-gray-100 text-black rounded-lg p-1 ">
          <TextsmsRoundedIcon />
        </div>
        <div className="bell bg-gray-100 text-black rounded-lg p-1 ">
          <NotificationsNoneOutlinedIcon />
        </div>
        <div className="profile flex gap-3 items-center">
          <div className="img bg-rose-800 h-10 w-10 rounded-full">img</div>
          <div className="flex flex-col">
            <div className="name font-bold text-sm">Anette Black</div>
            <div className="name text-xs">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
