import { Box, Card, Grid } from "@mui/material";

const COLUMNS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export const CalendarView = ({ data }) => {
  const parseTime = (time) => {
    const [hour, minutePart] = time.split(":");
    const minute = minutePart ? parseInt(minutePart.slice(0, 2), 10) : 0;
    const period = minutePart ? minutePart.slice(2).trim() : "";

    let hourNum = parseInt(hour, 10);
    if (period === "PM" && hourNum < 12) {
      hourNum += 12;
    }
    if (period === "AM" && hourNum === 12) {
      hourNum = 0;
    }
    return hourNum * 60 + minute;
  };

  const getMatchedCourse = (day, hour) => {
    const matchedCourses = data?.filter((course) => {
      const courseDays = course.days.split("/").map((d) => d.trim());
      const [startTime, endTime] = course.time.split(" - ");

      const isDayMatched = courseDays.includes(day.toUpperCase());

      const startHour = parseTime(startTime);
      const endHour = parseTime(endTime);
      const hourToCheck = hour * 60;

      return isDayMatched && hourToCheck >= startHour && hourToCheck < endHour;
    });

    return matchedCourses;
  };

  return (
    <Box marginTop={1} marginBottom={5}>
      <Card style={{ padding: 10 }}>
        <Grid container gap={1} justifyContent="space-between">
          <Grid item xs={1}></Grid>

          {COLUMNS.map((column) => (
            <Grid key={column} item xs={1.3}>
              <Box
                bgcolor="#333333"
                textAlign="center"
                padding={2}
                fontSize={14}
                fontWeight="bold"
                color="white"
              >
                {column}
              </Box>
            </Grid>
          ))}
          {new Array(24).fill("").map((_, hour) => {
            return (
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid xs={1} item textAlign="center" height="100%" border={1}>
                  <Box
                    bgcolor="#e0e0e0"
                    fontWeight="bold"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {hour}:00
                  </Box>
                </Grid>
                {COLUMNS.map((day) => {
                  const matchedCourses = getMatchedCourse(day, hour);

                  return (
                    <Grid
                      xs={1.3}
                      item
                      textAlign="center"
                      border={1}
                      height="100%"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.2,
                        }}
                        padding={2}
                      >
                        {matchedCourses?.length
                          ? matchedCourses?.map((course, idx) => (
                              <Box sx={{ fontWeight: 600 }} height="100%">
                                {course?.course_code +
                                  (idx < matchedCourses.length - 1 ? "," : "")}
                              </Box>
                            ))
                          : "-"}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </Box>
  );
};
