import React from "react";
import PageHeader from "../common/PageHeader";
import CustomBreadcrumbs from "../common/BreadCrumbs";
import SearchScore from "../components/dashboard/SearchScore";
import StatsCards from "../components/dashboard/StatsCards";
import ProfileViews from "../components/dashboard/ProfileViews";
import DashNotifications from "../components/dashboard/Notifications";
import ProfileActivity from "../components/dashboard/ProfileActivity";
import Campaigns from "../components/dashboard/Campaigns";

const Dashboard = () => {
  return (
    <div className="bg-  h-full ">
      <PageHeader pageName={"Dashboard"} />

      {/* <CustomBreadcrumbs /> */}
      <div className="pagecontents   p-5 py-10">
        <SearchScore />
        <StatsCards />
        <div className="section3 mb-6 flex gap-4">
          <ProfileViews />
          <DashNotifications />
        </div>
        <div className="section4 flex gap-4">
          <ProfileActivity />
          <Campaigns />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
