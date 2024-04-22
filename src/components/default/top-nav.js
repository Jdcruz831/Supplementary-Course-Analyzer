import { Box, Button, Stack, useTheme } from "@mui/material";
import React from "react";
import Ginkgo from "../../img/ginkgo.jpg";
import { Typography } from "@mui/material";

export const TopNav = () => {
  const theme = useTheme();
  return (
    <Stack direction="column">
      <Stack
        spacing={{
          xs: 1,
          md: 1,
        }}
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{
          p: 1,
        }}
      >
        <Button
          href="/"
          variant="contained"
          size="small"
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            color: "white",
            "&:hover": { backgroundColor: "#124459" },
          }}
        >
          Home
        </Button>
        <Button
          href="/#/search"
          variant="contained"
          size="small"
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            color: "white",
            "&:hover": { backgroundColor: "#124459" },
          }}
        >
          Search
        </Button>
        <Button
          href="/#/CourseTimeAnalyzer"
          variant="contained"
          size="small"
          sx={{
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
          size="small"
          sx={{
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
          size="small"
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            color: "white",
            "&:hover": { backgroundColor: "#124459" },
          }}
        >
          Source Data
        </Button>

        <Button
          href="/#/StudentEnrollmentAnalyzer"
          variant="contained"
          size="small"
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            color: "white",
            "&:hover": { backgroundColor: "#124459" },
          }}
        >
          Student Enrollment Analyzer
        </Button>

        <Button
          href="/#/SupCourseAnalyzer"
          variant="contained"
          size="small"
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            color: "white",
            "&:hover": { backgroundColor: "#124459" },
          }}
        >
          Sup Course Analyzer
        </Button>
      </Stack>
      {/* <Stack> */}
      <Box
        xs={12}
        sx={{
          backgroundImage: `url(${Ginkgo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "175px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, #043927, rgba(255, 255, 255, 0))",
            justifyContent: "left",
            alignItems: "center",
            textAlign: "center",
            pl: 2,
          }}
        >
          <Stack>
            <Typography
              variant="h4"
              align="left"
              fontFamily="BlinkMacSystemFont"
              style={{
                color: "rgba(255, 255, 255, 1)",
                textShadow: "black 2px 2px",
              }}
            >
              Supplementary <br /> Course Analyzer
            </Typography>
            <Typography
              variant="h5"
              align="left"
              fontFamily="BlinkMacSystemFont"
              style={{
                color: "rgba(196, 181, 129, 1)",
                textShadow: "black 2px 2px",
              }}
            >
              Sacramento State
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};
