import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import man1 from "../../../public/man1.png";
import man2 from "../../../public/man2.png";
import man3 from "../../../public/man3.png";
import { FaArrowTrendUp } from "react-icons/fa6";

const rows = [
  {
    name: "Jacob Jones",
    location: "Mesa, New Jersey ",
    viewedOn: "24 Mar, 2024",
    designation: "Acme Co.",
    image: man1,
  },
  {
    name: "Robert Fox",
    location: "Inglewood, Maine ",
    viewedOn: "1 Feb, 2024",
    designation: "Big Kahuna Burger Ltd.  ",
    image: man2,
  },
  {
    name: "Arlene McCoy",
    location: "Mesa, New Jersey ",
    viewedOn: "17 Oct, 2023 ",
    designation: "Barone LLC. ",
    image: man3,
  },
  {
    name: "Jane Cooper",
    location: "St. Celina, Delaware ",
    viewedOn: "22 Oct, 2023",
    designation: "Abstergo Ltd. ",
    image: man2,
  },
  {
    name: "Floyd Miles",
    location: "Shiloh, Hawaii",
    viewedOn: "21 Sep, 2023 ",
    designation: "Binford Ltd.",
    image: man1,
  },
];

const ProfileActivity = () => {
  return (
    <div className="flex-1  border rounded-xl p-4">
      <div className="top mb-3 flex items-center justify-between">
        <div className="font-semibold text-xl">Profile Activity</div>
        <div className="dropdown text-blue-500 text-sm">view all</div>
      </div>
      <div className=" ">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Viewed On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className="flex items-center">
                    <img
                      src={row.image}
                      alt={row.company}
                      className="w-10 h-10 mr-1"
                    />
                    <div className="">
                      <div className="font-bold">{row.name}</div>
                      <div className="flex items-center gap-1 text-blue-500 text-xs mt-1 ">
                        {row.designation} <FaArrowTrendUp />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.viewedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProfileActivity;
