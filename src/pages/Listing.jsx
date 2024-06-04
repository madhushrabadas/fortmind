import React from "react";
import PageHeader from "../common/PageHeader";
import CustomBreadcrumbs from "../common/BreadCrumbs";

const Listing = () => {
  return (
    <div>
      <PageHeader pageName={"Listing"} />
      <CustomBreadcrumbs />
      Listing
    </div>
  );
};

export default Listing;
