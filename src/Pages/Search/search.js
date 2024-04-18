import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import DefaultLayout from "../../components/default/layout";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";

const courses = [
  {
    name: "MATH100",
    code: 25233,
    sched: "MoWeFr 11:00AM - 11:50AM",
  },
  {
    name: "CSC190",
    code: 26553,
    sched: "TuTh 11:00AM - 11:50AM",
  },
  {
    name: "CSC137",
    code: 94446,
    sched: "Fr 11:00AM - 4:00PM",
  },
  {
    name: "CSC137",
    code: 94456,
    sched: "Fr 11:00AM - 4:00PM",
  },
  {
    name: "CSC139",
    code: 85531,
    sched: "TuTh 1:45PM - 2:00PM",
  },
  {
    name: "CHEM1A",
    code: 98864,
    sched: "MoWeFr 11:00AM - 11:50AM",
  },
  {
    name: "CHEM1A",
    code: 98865,
    sched: "MoWeFr 8:00AM - 9:50AM",
  },
];

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = () => {
    const filtered = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toString().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <DefaultLayout>
      <Stack p={3} spacing={2}>
        <Card sx={{ p: 1 }}>
          <TextField
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            sx={{
              width: {
                xs: "100%",
                md: "300px",
              },
            }}
            variant="outlined"
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
                handleSearch();
              }
            }}
            label="Search Courses"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    onClick={handleSearch}
                    sx={{
                      backgroundColor: "#e0e0e0",
                      height: "40px",
                      width: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Card>
        <Card sx={{ p: 1 }}>
          <Grid container>
            <Table></Table>
            <Table>
              <TableBody>
                {filteredCourses.map((course, index) => (
                  <React.Fragment key={course.id}>
                    <TableRow style={{ height: "20px" }}>
                      <TableCell
                        colSpan={4}
                        style={{ border: "none", padding: 0 }}
                      ></TableCell>
                    </TableRow>
                    <TableRow
                      style={{
                        backgroundColor: "#333333",
                      }}
                    >
                      <TableCell
                        style={{
                          borderRight: "2px solid #E5E4E2",
                        }}
                      ></TableCell>
                      <TableCell
                        style={{
                          borderRight: "2px solid #E5E4E2",
                          color: "#fff",
                        }}
                      >
                        Course Code
                      </TableCell>
                      <TableCell
                        style={{
                          borderRight: "2px solid #E5E4E2",
                          color: "#fff",
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        style={{
                          borderRight: "2px solid #E5E4E2",
                          color: "#fff",
                        }}
                      >
                        Days & Time(s)
                      </TableCell>
                    </TableRow>
                    <TableRow
                      key={course.code}
                      style={{ backgroundColor: "#eae9e8" }}
                    >
                      <TableCell
                        style={{
                          borderRight: "2px solid #E5E4E2",
                        }}
                      >
                        <Button variant="contained">Select</Button>
                      </TableCell>
                      <TableCell
                        style={{
                          borderRight: "2px solid #E5E4E2",
                        }}
                      >
                        {course.code}
                      </TableCell>
                      <TableCell
                        style={{
                          borderRight: "2px solid #E5E4E2",
                        }}
                      >
                        {course.name}
                      </TableCell>
                      <TableCell>{course.sched}</TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Card>
      </Stack>
    </DefaultLayout>
  );
};
