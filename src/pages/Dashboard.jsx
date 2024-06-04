import React from "react";
import PageHeader from "../common/PageHeader";
import CustomBreadcrumbs from "../common/BreadCrumbs";
import SearchScore from "../components/dashboard/SearchScore";
import StatsCards from "../components/dashboard/StatsCards";

const Dashboard = () => {
  return (
    <div className="bg-  h-full ">
      <PageHeader pageName={"Dashboard"} />

      {/* <CustomBreadcrumbs /> */}
      <div className="pagecontents   p-5 py-10">
        <SearchScore />
        <StatsCards />
      </div>
    </div>
  );
};

export default Dashboard;
