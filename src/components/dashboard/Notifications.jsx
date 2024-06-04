import React from "react";

const notifications = [
  {
    time: "Today 11:34 pm",
    text: "Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa. Tristique lobortis laoreet.",
  },
  {
    time: " Today 11:30 am",
    text: "Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa. Tristique lobortis laoreet.",
  },
  {
    time: "Today 14:15 pm",
    text: "Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa. Tristique lobortis laoreet.",
  },
  {
    time: " Today 11:30 am",
    text: "Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa. Tristique lobortis laoreet.",
  },
  {
    time: "Today 14:15 pm",
    text: "Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa. Tristique lobortis laoreet.",
  },
];

const DashNotifications = () => {
  return (
    <div className="border w-[40%] rounded-lg p-4 ">
      <div className="top mb-7 flex items-center justify-between">
        <div className="font-semibold text-xl">Notifications</div>
        <div className="dropdown bg-red-800">recents</div>
      </div>
      <div className="content  ">
        {notifications.map((notification) => (
          <div key={notification.time} className="timeline-item flex relative">
            <div className="timline mr-1">
              <div className="timeline-line absolute -z-10 left-1 bg-gray-200 w-[2px] h-20 "></div>
              <div className=" bg-blue-900 z-40 rounded-full w-2 h-2 mt-1"></div>
            </div>
            <div className="flex-col ml-3">
              <div className="time text-gray-400 text-xs">
                {notification.time}
              </div>
              <div className="text-sm mb-4">{notification.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashNotifications;
