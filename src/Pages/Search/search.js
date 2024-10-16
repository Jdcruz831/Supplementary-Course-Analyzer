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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import uniq from "lodash/uniq";
import CircularProgress from "@mui/material/CircularProgress";

import SearchIcon from "@mui/icons-material/Search";

import DefaultLayout from "../../components/default/layout";
import { collectionAPI } from "../../routes/collection/collection";
import { parseTime } from "../../utils/parse-time";
import { ExpandMore } from "@mui/icons-material";
import axios from "axios";

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
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [url, setURL] = useState(
    "https://www.csus.edu/class-schedule/fall-2024/MATH"
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState({
    instructor: "",
    time: "",
    days: "",
  });

  const headers =
    "Section, Seats, Days, Instructor, StartTime, EndTime, Building";

  const [data, setData] = useState([]);

  const handleSyncData = async () => {
    setLoading(true);
    try {
      const result = await axios(
        `http://localhost:5000/scrape?url=${encodeURIComponent(
          url
        )}&headers=${headers}`
      );
      setData(result.data);

      await collectionAPI.syncDataToFirebase(result?.data);

      const retrievedCourses = await collectionAPI.getCollection("courses");

      setFilteredCourses(retrievedCourses);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setFilteredCourses(allCourses);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [allCourses]);

  useEffect(() => {
    setLoading(true);
    handleFilterCourses();
  }, [filter]);

  const handleFilterCourses = () => {
    const filtered = allCourses.filter((course) => {
      const keywordMatch = course.course_name
        .toLowerCase()
        .includes(query.toLowerCase());
      const professorMatch = filter?.instructor
        ? course.instructor
            .toLowerCase()
            .includes(filter.instructor.toLowerCase())
        : true;
      const timeMatch = course.time ? course.time.includes(filter.time) : true;
      const daysMatch =
        filter.days?.length >= 1 ? course.days == filter.days : true;

      setTimeout(() => {
        setLoading(false);
      }, 500);

      return keywordMatch && professorMatch && timeMatch && daysMatch;
    });

    setFilteredCourses(filtered);
  };

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

  const handleSearchWord = (e) => {
    setQuery(e.target.value);
  };

  const handleSetURL = (e) => setURL(e.target.value);

  return (
    <DefaultLayout>
      <Stack p={3} spacing={2}>
        <Card sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                onChange={handleSearchWord}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setLoading(true);
                    handleFilterCourses(); // Trigger the filter action on Enter key press
                  }
                }}
                fullWidth
                variant="outlined"
                label="Search By Name"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleFilterCourses} position="end">
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Autocomplete
                options={dayOptions}
                renderInput={(params) => <TextField {...params} label="Day" />}
                onChange={(_, value) => handleFilterSelect("days", value)}
                plac
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Autocomplete
                options={professorOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Professor" />
                )}
                onChange={(_, value) => handleFilterSelect("instructor", value)}
              />
            </Grid>
          </Grid>
          <Accordion sx={{ boxShadow: "none", mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ width: "180px" }}
            >
              <Typography fontWeight={600}>Sync Courses</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3 }}>
              <Grid spacing={2}>
                <TextField
                  onChange={handleSetURL}
                  fullWidth
                  variant="outlined"
                  label="URL"
                  value={url}
                  placeholder="https://www.csus.edu/class-schedule/fall-2024/MATH"
                  helperText="The URL of the CSUS page to scrape course data from"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSyncData}
                        >
                          Sync Data
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* </Grid> */}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Card>
        <Card sx={{ p: 1 }}>
          {loading ? (
            <Grid item xs={12} alignItems="center" textAlign="center">
              <CircularProgress />
            </Grid>
          ) : filteredCourses?.length >= 1 ? (
            <Grid container>
              <TableContainer>
                <Table>
                  <TableBody>
                    {filteredCourses
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
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
                              {course.start_time
                                ? parseTime(course.start_time)
                                : "N/A"}
                            </TableCell>
                            <TableCell
                              style={{
                                borderRight: "2px solid #E5E4E2",
                              }}
                            >
                              {course.end_time
                                ? parseTime(course.end_time)
                                : "N/A"}
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
                  count={filteredCourses.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12} alignItems="center" textAlign="center">
              <Typography variant="h4"> No Courses Found</Typography>
            </Grid>
          )}
        </Card>
      </Stack>
    </DefaultLayout>
  );
};
