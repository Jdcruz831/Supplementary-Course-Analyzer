import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TablePagination,
  TextField,
} from "@mui/material";
import DefaultLayout from "../../components/default/layout";
import SearchIcon from "@mui/icons-material/Search";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { courses } from "../../courses";

const CourseTimeAnalyzer = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = () => {
    const filtered = timeSlots.filter(
      (slot) =>
        slot.days.toLowerCase().includes(searchQuery.toLowerCase()) ||
        slot.timeSlot.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTimeSlots(filtered);
    setPage(0);
  };

  useEffect(() => {
    const analyzeCourses = () => {
      const slots = {};

      courses.forEach((course) => {
        const { days, time, students } = course;
        const key = `${days} ${time}`;

        if (!slots[key]) {
          slots[key] = { days, timeSlot: time, students: 0 };
        }

        slots[key].students += students;
      });

      const timeSlotsArray = Object.values(slots);

      setTimeSlots(timeSlotsArray);
      setFilteredTimeSlots(timeSlotsArray);
    };

    analyzeCourses();
  }, []);

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
            onChange={(e) => setSearchQuery(e.target.value)}
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
            label="Search Time Slots"
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
            <Table>
              <TableBody>
                {filteredTimeSlots
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((slot, index) => (
                    <React.Fragment key={index}>
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
                          Day(s)
                        </TableCell>
                        <TableCell
                          style={{
                            borderRight: "2px solid #E5E4E2",
                            color: "#fff",
                          }}
                        >
                          Time(s)
                        </TableCell>
                        <TableCell
                          style={{
                            borderRight: "2px solid #E5E4E2",
                            color: "#fff",
                          }}
                        >
                          # of Students In Class
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key={index}
                        style={{ backgroundColor: "#eae9e8" }}
                      >
                        <TableCell
                          style={{
                            borderRight: "2px solid #E5E4E2",
                          }}
                        >
                          {slot.days}
                        </TableCell>
                        <TableCell
                          style={{
                            borderRight: "2px solid #E5E4E2",
                          }}
                        >
                          {slot.timeSlot}
                        </TableCell>
                        <TableCell
                          style={{
                            borderRight: "2px solid #E5E4E2",
                          }}
                        >
                          {slot.students}
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
              </TableBody>
            </Table>
            <Grid item xs={12}>
              <TablePagination
                fullWidth
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredTimeSlots.length}
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

export default CourseTimeAnalyzer;
