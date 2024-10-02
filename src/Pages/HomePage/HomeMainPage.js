import React from "react";
import Button from "@mui/material/Button";
import { Grid, Stack, Typography } from "@mui/material";
import DefaultLayout from "../../components/default/layout";

function HomeMainPage() {
  const buttonStyle = {
    p: 2,
    justifyContent: "left",
    textTransform: "none",
    '&:hover': {
      backgroundColor: 'rgba(0, 100, 0, 0.7)', // Dark green on hover
    },
    fontWeight: 'medium',
    fontSize:"1.2em",
    boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.2)",
    bgcolor: "#0c3a2b", // Dark background for buttons
    color: "white", // Text color
    width: '100%',
  };

  return (
    <DefaultLayout>
      <Grid
        container
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
            background:'#D8D2BA',
          },
        }}
      >
        <Grid item md={6} sx={{ p: 8 }} container>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h6" fontWeight="bold" bgcolor='#E6DF79' p={2} borderRadius={1} textAlign="left">
              Access Analyzer
            </Typography>
            <Button component="a" href="/#/search" sx={buttonStyle}>
              Search Courses
            </Button>
            <Button component="a" href="/#/StudentEnrollmentAnalyzer" sx={buttonStyle}>
              Student Enrollment Analyzer
            </Button>
            <Button component="a" href="/#/CourseTimeAnalyzer" sx={buttonStyle}>
              Course Time Analyzer
            </Button>
            <Typography variant="h6" fontWeight="bold" bgcolor='#E6DF79' p={2} borderRadius={1} textAlign="left">
              About Analyzer
            </Typography>
            <Button component="a" href="/#/Creators" sx={buttonStyle}>
              Creators
            </Button>
            <Button component="a" href="/#/SourceData" sx={buttonStyle}>
              Source Data
            </Button>
            <Button component="a" href="/#/About" sx={buttonStyle}>
              About Us
            </Button>
          </Stack>
        </Grid>
        
        <Grid
          item
          md={6}
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            minHeight: "750px",
            p: 3,
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h3" sx={{ fontSize: "3.0em", fontWeight:'medium',color: '#E6DF79' }}>
              About Our Course Analyzer
            </Typography>
            <Typography variant="body1" sx={{ color: "white", fontSize: "1.6em" }}>
              The CSUS PAL program aims to support students in challenging STEM courses by
            offering supplementary classes led by former students. These classes, held in person, require
            campus classrooms that do not conflict with core STEM courses. However, identifying suitable
            times and classrooms poses a challenge due to the lack of software to analyze scheduling data for
            STEM courses.
          </Typography>
          <Typography variant="body1" sx={{ color: "white", fontSize: "1.6em" }}>
            The Supplementary Course Analyzer aims to solve this problem by providing a website that will analyze course times and 
            determine optimal times for supplementary courses, while minimizing interference with major courses. We aim to make PAL courses 
            more accessible to students and help the PAL program accomplish their goal of helping students learn.
            </Typography>
            {/* ...possibly more content... */}
          </Stack>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default HomeMainPage;

