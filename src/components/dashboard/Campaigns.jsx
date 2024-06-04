import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IoLogoLinkedin } from "react-icons/io5";

import camp1 from "../../../public/camp1.png";
import camp2 from "../../../public/camp2.png";
import camp3 from "../../../public/camp3.png";
import camp4 from "../../../public/camp4.png";
import camp5 from "../../../public/camp5.png";

const rows = [
  {
    company: "Pizza Hut",
    platform: "LinkedIn",
    status: 40,
    duedate: "15 May 2020",
    designation: "Pizza Hut",
    image: camp1,
  },
  {
    company: "Gillette",
    platform: "LinkedIn",
    status: 70,
    duedate: "15 May 2020",
    designation: "Gillette",
    image: camp2,
  },
  {
    company: "Starbucks",
    platform: "LinkedIn",
    status: 50,
    duedate: "15 May 2020",
    designation: "Starbucks",
    image: camp3,
  },
  {
    company: "Louis Vuitton",
    platform: "LinkedIn",
    status: 80,
    duedate: "15 May 2020",
    designation: "Louis Vuitton",
    image: camp4,
  },
  {
    company: "Walt Disney",
    platform: "LinkedIn",
    status: 60,
    duedate: "15 May 2020",
    designation: "Walt Disney",
    image: camp5,
  },
];

const Campaigns = () => {
  return (
    <div className="flex-1 border rounded-xl p-4">
      <div className="top mb-3 flex items-center justify-between">
        <div className="font-semibold text-xl">Campaigns</div>
        <div className="dropdown text-blue-500 text-sm">view all</div>
      </div>
      <div className="tables">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align="center">Platform</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Due Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.company}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className="flex items-center">
                    <img
                      src={row.image}
                      alt={row.company}
                      className="w-10 h-10 mr-3"
                    />
                    <div>
                      <div className="font-bold">{row.company}</div>
                      <div className="text-sm text-gray-500">
                        {row.designation}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="flex items-center gap-1">
                    <IoLogoLinkedin color="blue" /> {row.platform}
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-flex",
                      width: "100%",
                    }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={row.status}
                      color="primary"
                      sx={{ width: "100%" }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="bg-blue-400 text-white p-[1px] rounded-full text-xs">{`${row.status}%`}</div>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">{row.duedate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Campaigns;
