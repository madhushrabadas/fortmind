import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomBreadcrumbs from "../common/BreadCrumbs";
import PageHeader from "../common/PageHeader";
import { FaFacebookSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import lis1 from "../../public/lis1.png";
import lis2 from "../../public/lis2.png";
import lis3 from "../../public/lis3.png";
import lis4 from "../../public/lis4.png";
import lis5 from "../../public/lis5.png";
import lis6 from "../../public/lis6.png";
import lis7 from "../../public/lis7.png";
import lis8 from "../../public/lis8.png";

const rows = [
  {
    company: "Nike",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-01",
    status: "open",
    image: lis1,
  },
  {
    company: "Puma",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-02",
    status: "close",
    image: lis2,
  },
  {
    company: "Adidas",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-03",
    status: "open",
    image: lis3,
  },
  {
    company: "Under Armour",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-04",
    status: "close",
    image: lis4,
  },
  {
    company: "Reebok",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-05",
    status: "open",
    image: lis5,
  },
  {
    company: "CA Sports",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-06",
    status: "open",
    image: lis6,
  },
  {
    company: "Decathlon",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-07",
    status: "close",
    image: lis7,
  },
  {
    company: "New Balance",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-08",
    status: "open",
    image: lis8,
  },
  {
    company: "Nike",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-01",
    status: "open",
    image: lis1,
  },
  {
    company: "Puma",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-02",
    status: "close",
    image: lis2,
  },
  {
    company: "Nike",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-01",
    status: "open",
    image: lis1,
  },
  {
    company: "Puma",
    listing: "Fitness Influencer",
    platform: "Facebook",
    industry: "Apparel",
    savedDate: "2024-06-02",
    status: "close",
    image: lis2,
  },
];

const SavedListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="  ">
      <div className="nav">
        <PageHeader pageName={"Saved Listings"} />
      </div>
      <div className="p-5 pr-8">
        <div className="breadcrmb text-xs">
          <CustomBreadcrumbs
            child1={"Dashboard"}
            child2={"Listings"}
            child3={"Saved Listings"}
          />
        </div>
        <div className="headers my-4 flex items-center justify-between rounded-md">
          <div className="search w-[22rem] flex items-center justify-between bg-white rounded-md border">
            <div className="flex items-center gap-1">
              <CiSearch className="my-2 ml-2" />
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 text-sm rounded-l-md focus:outline-none"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="bg-blue-500 text-sm   text-white px-2 py-1 rounded-lg m-1 hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>
          <div className="flex text-sm gap-3">
            <div className="dropdowns border rounded-lg pr-1">
              <select className="px-3 py-2 rounded-md focus:outline-none">
                <option value="all">Platform</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
            <div className="dropdowns border rounded-lg pr-1 ">
              <select className="px-3 py-2 rounded-md focus:outline-none">
                <option value="all">Industry</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
            <div className="dropdowns border rounded-lg pr-1">
              <select className="px-3 py-2 rounded-md focus:outline-none">
                <option value="all">Status</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
            <div className="dropdowns border rounded-lg pr-1">
              <select className="px-3 py-2 rounded-md focus:outline-none">
                <option value="all">Sort By</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
          </div>
        </div>
        <div className="tables border mt-4 rounded-xl bg-white">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Listing</TableCell>
                <TableCell>Platform</TableCell>
                <TableCell>Industry</TableCell>
                <TableCell align="center">Saved Date</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className="flex items-center">
                      <img
                        src={row.image}
                        alt={row.company}
                        className="mr-2"
                        style={{ width: "30px", height: "30px" }}
                      />
                      {row.company}
                    </div>
                  </TableCell>
                  <TableCell>{row.listing}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <FaFacebookSquare color="blue" />
                      {row.platform}
                    </div>
                  </TableCell>
                  <TableCell>{row.industry}</TableCell>
                  <TableCell align="center">{row.savedDate}</TableCell>
                  <TableCell align="center">
                    <div className="border rounded-lg p-1">{row.status}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SavedListing;
