import {
  Box,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";

export const ListView = ({ data }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("days");
  const [orderType, setOrderType] = useState("desc");

  const sortCourses = (courses, criteria, order = "asc") => {
    const compareFunction = (a, b) => {
      let comparison = 0;

      switch (criteria) {
        case "days":
          comparison = a.days.localeCompare(b.days);
          break;
        case "time":
          const [startA] = a.time
            .split(" - ")
            .map((time) => new Date(`1970-01-01T${time}`));
          const [startB] = b.time
            .split(" - ")
            .map((time) => new Date(`1970-01-01T${time}`));
          comparison = startA - startB; // Sorting by start time
          break;
        case "students":
          comparison = a.students - b.students;
          break;
        default:
          return 0; // No sorting
      }

      return order === "asc" ? comparison : -comparison; // Reverse for DESC
    };

    return [...courses].sort(compareFunction);
  };

  useEffect(() => {
    let transformedData = [...data];

    transformedData = sortCourses(transformedData, orderBy, orderType);

    const analyzeCourses = () => {
      const slots = {};

      transformedData.forEach((course) => {
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
  }, [data, orderBy, orderType]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = () => {
    const filtered = timeSlots.filter(
      (slot) =>
        slot.days.toLowerCase().includes(searchQuery.toLowerCase()) ||
        slot.timeSlot.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTimeSlots(filtered);
    setPage(0);
  };

  const handleSort = (property) => (event) => {
    const isAsc = orderBy === property && orderType === "asc";

    setOrderBy(property);
    setOrderType(isAsc ? "desc" : "asc");
  };

  return (
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
            <TableHead>
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
                  <TableSortLabel
                    active={orderBy === "days"}
                    direction={orderBy === "days" ? orderType : "asc"}
                    onClick={handleSort("days")}
                    style={{ color: "#fff" }}
                    sx={{
                      "& .MuiTableSortLabel-icon": {
                        color: "white !important",
                        fontSize: "12px",
                      },
                    }}
                  >
                    Day(s)
                  </TableSortLabel>
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
                  <TableSortLabel
                    active={orderBy === "students"}
                    direction={orderBy === "students" ? orderType : "asc"}
                    onClick={handleSort("students")}
                    style={{ color: "#fff" }}
                    sx={{
                      "& .MuiTableSortLabel-icon": {
                        color: "white !important",
                        fontSize: "12px",
                      },
                    }}
                  >
                    # of Students In Class
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTimeSlots
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((slot, index) => (
                  <React.Fragment key={index}>
                    <TableRow style={{ height: "10px" }}>
                      <TableCell
                        colSpan={4}
                        style={{ border: "none", padding: 0 }}
                      ></TableCell>
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
  );
};
