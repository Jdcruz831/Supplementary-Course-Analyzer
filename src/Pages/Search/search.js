import React, { useCallback, useEffect, useMemo, useState } from "react";

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
  Button,
} from "@mui/material";
import uniq from "lodash/uniq";

import DefaultLayout from "../../components/default/layout";
import { courses } from "../../courses";
import { collectionAPI } from "../../routes/collection/collection";
import { parseTime } from "../../utils/parse-time";

const useGetCourses = (params) => {
  const [courses, setCourses] = useState([]);

  const handleGetCourses = useCallback(async () => {
    const retrievedCourses = await collectionAPI.getCollection("courses");

    setCourses(retrievedCourses);
  }, []);

  useEffect(() => {
    handleGetCourses();
  }, []);

  return courses;
};

export const Search = () => {
  const allCourses = useGetCourses();
  // Get all courses from the custom hook
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState({
    keyword: "",
    professor: "",
    time: "",
    day: "",
  });

  console.log(allCourses);

  useEffect(() => {
    const filtered = allCourses.filter((course) => {
      const keywordMatch = course.course_name
        .toLowerCase()
        .includes(filter.keyword.toLowerCase());
      const professorMatch = course.instructor
        .toLowerCase()
        .includes(filter.professor.toLowerCase());
      const timeMatch = course.time ? course.time.includes(filter.time) : true;
      const buildingMatch = course.day ? course.day.includes(filter.day) : true;

      return keywordMatch && professorMatch && timeMatch && buildingMatch;
    });

    setFilteredCourses(filtered);
  }, [allCourses, filter]);

  const professorOptions = useMemo(() => {
    const professors = allCourses.map((course) => course.instructor);

    return uniq(professors);
  }, [allCourses]);

  const dayOptions = useMemo(() => {
    const days = allCourses.map((course) => course.days);

    return uniq(days).sort();
  }, [allCourses]);

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

  console.log("r");

  const handleSearchWord = (e) =>
    setFilter({ ...filter, keyword: e.target.value });

  const compareTwoString = (a = "", b = "") =>
    a.toLowerCase() === b.toLowerCase();

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
                            Building
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                              color: "#fff",
                            }}
                          >
                            Course Name
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
                            Start Time
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                              color: "#fff",
                            }}
                          >
                            End Time
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
                            Seats (available)
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
                            {course.building}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.course_name}
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
                            {parseTime(course.start_time)}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {parseTime(course.end_time)}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.instructor}
                          </TableCell>
                          <TableCell
                            style={{
                              borderRight: "2px solid #E5E4E2",
                            }}
                          >
                            {course.days}
                          </TableCell>
                          <TableCell>{course.seats}</TableCell>
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
                count={courses.length}
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
