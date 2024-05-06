import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TableContainer,
  TablePagination,
  TextField,
} from "@mui/material";
import DefaultLayout from "../../components/default/layout";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";
import { courses } from "../../courses";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = () => {
    const filtered = courses.filter(
      (course) =>
        course.course_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.course_code.toString().includes(searchQuery.toLowerCase()) ||
        course.time.toString().includes(searchQuery.toLowerCase()) ||
        course.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.days.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
            <TableContainer>
              <Table>
                <TableBody>
                  {filteredCourses
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((course, index) => (
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
                            Section
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                              color: "#fff",
                            }}
                          >
                            Type
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                              color: "#fff",
                            }}
                          >
                            Days & Time(s)
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                              color: "#fff",
                            }}
                          >
                            Student(s) Enrolled
                          </TableCell>
                        </TableRow>
                        <TableRow
                          key={course.course_code}
                          style={{ backgroundColor: "#eae9e8" }}
                        >
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.course_code}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.course_title}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.section}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.type}
                          </TableCell>
                          <TableCell>
                            {course.days} {course.time}
                          </TableCell>
                          <TableCell>{course.students}</TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Grid item xs={12}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredCourses.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Grid>
          </Grid>
        </Card>
      </Stack>
    </DefaultLayout>
  );
};
