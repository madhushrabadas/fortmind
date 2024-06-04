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
    name: "John Doe",
    location: "New York, NY",
    viewedOn: "2024-06-03",
  },
  {
    name: "Jane Smith",
    location: "Los Angeles, CA",
    viewedOn: "2024-06-01",
  },
  {
    name: "Michael Chen",
    location: "Chicago, IL",
    viewedOn: "2024-05-30",
  },
  {
    name: "Jane Smith",
    location: "Los Angeles, CA",
    viewedOn: "2024-06-01",
  },
  {
    name: "Michael Chen",
    location: "Chicago, IL",
    viewedOn: "2024-05-30",
  },
];

const ProfileActivity = () => {
  return (
    <div className="flex-1  border rounded-xl p-4">
      <div className="top mb-3 flex items-center justify-between">
        <div className="font-semibold text-xl">Profile Activity</div>
        <div className="dropdown bg-red-800">view all</div>
      </div>
      <div className=" ">
        {/* <TableContainer component={Paper}> */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Viewed On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.viewedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </TableContainer> */}
      </div>
    </div>
  );
};

export default ProfileActivity;
