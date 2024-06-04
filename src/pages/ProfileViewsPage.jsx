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

import man1 from "../../public/man1.png";
import man2 from "../../public/man2.png";
import man3 from "../../public/man3.png";

const rows = [
  {
    company: "Nike",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man1,
    email: "nike@example.com",
    viewedOn: "2024-06-01 10:00 AM",
    location: "Great Falls, Maryland",
  },
  {
    company: "Puma",
    platform: "Facebook",
    industry: "Apparel",
    status: "close",
    image: man2,
    email: "puma@example.com",
    viewedOn: "2024-06-02 11:30 AM",
    location: "Lafayette, California",
  },
  {
    company: "Adidas",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man3,
    email: "adidas@example.com",
    viewedOn: "2024-06-03 09:45 AM",
    location: "Stockton, New Hampshire",
  },
  {
    company: "Under Armour",
    platform: "Facebook",
    industry: "Apparel",
    status: "close",
    image: man1,
    email: "underarmour@example.com",
    viewedOn: "2024-06-04 12:15 PM",
    location: "Great Falls, Maryland",
  },
  {
    company: "Reebok",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man2,
    email: "reebok@example.com",
    viewedOn: "2024-06-05 02:00 PM",
    location: "Syracuse, Connecticut  ",
  },
  {
    company: "CA Sports",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man3,
    email: "casports@example.com",
    viewedOn: "2024-06-06 09:30 AM",
    location: "Kent, Utah",
  },
  {
    company: "Decathlon",
    platform: "Facebook",
    industry: "Apparel",
    status: "close",
    image: man1,
    email: "decathlon@example.com",
    viewedOn: "2024-06-07 03:45 PM",
    location: "Lansing, Illinois",
  },
  {
    company: "New Balance",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man2,
    email: "newbalance@example.com",
    viewedOn: "2024-06-08 10:20 AM",
    location: "Great Falls, Maryland",
  },
  {
    company: "Reebok",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man2,
    email: "reebok@example.com",
    viewedOn: "2024-06-05 02:00 PM",
    location: "Syracuse, Connecticut  ",
  },
  {
    company: "CA Sports",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man3,
    email: "casports@example.com",
    viewedOn: "2024-06-06 09:30 AM",
    location: "Kent, Utah",
  },
  {
    company: "Decathlon",
    platform: "Facebook",
    industry: "Apparel",
    status: "close",
    image: man1,
    email: "decathlon@example.com",
    viewedOn: "2024-06-07 03:45 PM",
    location: "Lansing, Illinois",
  },
  {
    company: "New Balance",
    platform: "Facebook",
    industry: "Apparel",
    status: "open",
    image: man2,
    email: "newbalance@example.com",
    viewedOn: "2024-06-08 10:20 AM",
    location: "Great Falls, Maryland",
  },
];

const ProfileViewsTable = () => {
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
        <PageHeader pageName={"Profile Views"} />
      </div>
      <div className="p-5 pr-8">
        <div className="breadcrmb text-xs">
          <CustomBreadcrumbs child1={"Dashboard"} child2={"Profile Views"} />
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
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Industry</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="center">Viewed On</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
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
                  <TableCell>{row.location}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {row.industry}
                    </div>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell align="center">{row.viewedOn}</TableCell>
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

export default ProfileViewsTable;
