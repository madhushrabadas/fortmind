import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomBreadcrumbs from "../common/BreadCrumbs";
import PageHeader from "../common/PageHeader";

const rows = [
  {
    company: "Pizza hut",
    platform: "New York, NY",
    status: "40%",
    duedate: "2024-06-03",
  },
  {
    company: "Pizza hut",
    platform: "New York, NY",
    status: "40%",
    duedate: "2024-06-03",
  },
  {
    company: "Pizza hut",
    platform: "New York, NY",
    status: "40%",
    duedate: "2024-06-03",
  },
  {
    company: "Pizza hut",
    platform: "New York, NY",
    status: "40%",
    duedate: "2024-06-03",
  },
  {
    company: "Pizza hut",
    platform: "New York, NY",
    status: "40%",
    duedate: "2024-06-03",
  },
];

const SavedListing = () => {
  return (
    <div className="  bg-sky-400">
      <div className="nav">
        <PageHeader pageName={"Dashboard"} />
      </div>
      <div className="p-5 pr-8">
        <div className="breadcrmb">
          <CustomBreadcrumbs />
        </div>
        <div className="headers bg-rose-800 flex items-center justify-between">
          <div className="search">
            <input type="text" />
          </div>
          <div className="dropdowns">
            <select>hygtfrd</select>
          </div>
        </div>
        <div className="tables border mt-4 rounded-xl">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell align="right">Platform</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Due Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.company}
                  </TableCell>
                  <TableCell align="right">{row.platform}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.duedate}</TableCell>
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
