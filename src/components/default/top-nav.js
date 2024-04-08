import { Button, Stack } from "@mui/material";

export const TopNav = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ p: 1 }}>
      <Button
        href="/#/CourseTimeAnalyzer"
        variant="contained"
        sx={{
          // backgroundColor: "#486b7a",
          bgcolor: (theme) => theme.palette.primary.main,
          color: "white",
          "&:hover": { backgroundColor: "#124459" },
        }}
      >
        Course Time Analyzer
      </Button>

      <Button
        href="/#/Creators"
        variant="contained"
        sx={{
          // backgroundColor: "#486b7a",
          bgcolor: (theme) => theme.palette.primary.main,
          color: "white",
          "&:hover": { backgroundColor: "#124459" },
        }}
      >
        Creators
      </Button>

      <Button
        href="/#/SourceData"
        variant="contained"
        sx={{
          // backgroundColor: "#486b7a",
          bgcolor: (theme) => theme.palette.primary.main,
          color: "white",
          "&:hover": { backgroundColor: "#124459" },
        }}
      >
        SourceData
      </Button>

      <Button
        href="/#/StudentEnrolmentAnalyzer"
        variant="contained"
        sx={{
          // backgroundColor: "#486b7a",

          bgcolor: (theme) => theme.palette.primary.main,
          color: "white",
          "&:hover": { backgroundColor: "#124459" },
        }}
      >
        Student Enrolment Analyzer
      </Button>

      <Button
        href="/#/SupCourseAnalyzer"
        variant="contained"
        sx={{
          // backgroundColor: "#486b7a",
          bgcolor: (theme) => theme.palette.primary.main,
          color: "white",
          "&:hover": { backgroundColor: "#124459" },
        }}
      >
        Sup Course Analyzer
      </Button>
    </Stack>
  );
};
