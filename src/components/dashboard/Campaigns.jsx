import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
const Campaigns = () => {
  return (
    <div className="flex-1 border rounded-xl p-4">
      <div className="top mb-3 flex items-center justify-between">
        <div className="font-semibold text-xl">Campaigns</div>
        <div className="dropdown bg-red-800">view all</div>
      </div>
      <div className="tables">
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
  );
};

export default Campaigns;
