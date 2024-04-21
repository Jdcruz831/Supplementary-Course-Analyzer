import React from "react";
import Button from "@mui/material/Button";
import Ginkgo from "./img/ginkgo.jpg";
import { Grid, Stack, Typography } from "@mui/material";
import DefaultLayout from "../../components/default/layout";

function HomeMainPage() {
  return (
    <DefaultLayout>
      <Grid
        container
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Grid item md={6} sx={{ flexDirection: "column", p: 7 }} container>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "left",
              bgcolor: (theme) => theme.palette.secondary.hornet,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Access Analyzer
            </Typography>
          </Grid>
          <Grid
            item
            component={Button}
            href="/#/search"
            sx={{
              p: 2,
              justifyContent: "left",
              bgcolor: (theme) => theme.palette.grey.main,
            }}
          >
            <Typography fontWeight="bold">Search Courses</Typography>
          </Grid>
          <Grid
            item
            component={Button}
            href="/#/StudentEnrollmentAnalyzer"
            sx={{
              p: 2,
              justifyContent: "left",
              bgcolor: (theme) => theme.palette.grey.main,
            }}
          >
            <Typography fontWeight="bold">
              Student Enrollment Anlayzer
            </Typography>
          </Grid>
          <Grid
            item
            component={Button}
            href="/#/CourseTimeAnalyzer"
            sx={{
              p: 2,
              justifyContent: "left",
              bgcolor: (theme) => theme.palette.grey.main,
            }}
          >
            <Typography fontWeight="bold">Course Time Analyzer</Typography>
          </Grid>
          <Grid
            item
            href="/"
            sx={{
              p: 2,
              textAlign: "left",
              bgcolor: (theme) => theme.palette.secondary.hornet,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              About Analyzer
            </Typography>
          </Grid>
          <Grid
            item
            component={Button}
            href="/#/Creators"
            sx={{
              p: 2,
              justifyContent: "left",
              bgcolor: (theme) => theme.palette.grey.main,
            }}
          >
            <Typography fontWeight="bold">Creators</Typography>
          </Grid>
          <Grid
            item
            component={Button}
            href="/#/SourceData"
            sx={{
              p: 2,
              justifyContent: "left",
              bgcolor: (theme) => theme.palette.grey.main,
            }}
          >
            <Typography fontWeight="bold">Source Data</Typography>
          </Grid>
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
            <Typography variant="h3" sx={{ color: "white" }}>
              About Our Course Analyzer
            </Typography>
            <Typography variant="p" sx={{ color: "white", fontSize: "1.2em" }}>
              This course analyzer is used for various purposes including...
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default HomeMainPage;
