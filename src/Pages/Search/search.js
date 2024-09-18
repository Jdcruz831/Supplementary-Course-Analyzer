import React, { useEffect, useMemo, useState } from "react";

import {
  Card,
  Grid,
  Stack,
  TableContainer,
  TablePagination,
  TextField,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import uniq from "lodash/uniq";

import DefaultLayout from "../../components/default/layout";
import { courses } from "../../courses";

export const Search = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState({
    keyword: "",
    professor: "",
    time: "",
    day: "",
  });

  const professorOptions = useMemo(() => {
    const professors = courses.map((course) => course.professor);

    return uniq(professors);
  }, []);

  const dayOptions = useMemo(() => {
    const days = courses.map((course) => course.days);

    return uniq(days).sort();
  }, []);

  const timeOptions = useMemo(() => {
    const times = courses.map((course) => course.time);

    return uniq(times).sort();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilterSelect = (key, value) => {
    setPage(0);
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  const handleSearchWord = (e) =>
    setFilter({ ...filter, keyword: e.target.value });

  const compareTwoString = (a = "", b = "") =>
    a.toLowerCase() === b.toLowerCase();

  useEffect(() => {
    let newFilteredCourses = [...courses];

    if (filter.keyword) {
      newFilteredCourses = newFilteredCourses.filter((course) => {
        return course.course_title
          .toLowerCase()
          .includes(filter.keyword.toLowerCase());
      });
    }

    if (filter.professor) {
      newFilteredCourses = newFilteredCourses.filter((course) =>
        compareTwoString(course.professor, filter.professor)
      );
    }

    if (filter.day) {
      newFilteredCourses = newFilteredCourses.filter((course) =>
        compareTwoString(course.days, filter.day)
      );
    }

    if (filter.time) {
      newFilteredCourses = newFilteredCourses.filter((course) =>
        compareTwoString(course.time, filter.time)
      );
    }

    return setFilteredCourses(newFilteredCourses);
  }, [filter, filteredCourses]);

  return (
    <DefaultLayout>
      <Stack p={3} spacing={2}>
        <Card sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                onChange={handleSearchWord}
                fullWidth
                variant="outlined"
                label="Search By Name"
              />
            </Grid>

            <Grid item xs={3}>
              <Autocomplete
                options={dayOptions}
                renderInput={(params) => <TextField {...params} label="Day" />}
                onChange={(_, value) => handleFilterSelect("day", value)}
                plac
              />
            </Grid>

            <Grid item xs={3}>
              <Autocomplete
                options={timeOptions}
                renderInput={(params) => <TextField {...params} label="Time" />}
                onChange={(_, value) => handleFilterSelect("time", value)}
              />
            </Grid>

            <Grid item xs={3}>
              <Autocomplete
                options={professorOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Professor" />
                )}
                onChange={(_, value) => handleFilterSelect("professor", value)}
              />
            </Grid>
          </Grid>
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
                            Professor
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                              color: "#fff",
                            }}
                          >
                            Days
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                              color: "#fff",
                            }}
                          >
                            Times
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
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.professor}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.days}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.time}
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
