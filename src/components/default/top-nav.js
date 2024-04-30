import { Box, Button, Stack, useTheme, List, ListItem, ListItemButton, ListItemText, autocompleteClasses } from "@mui/material";
import React from "react";
import Ginkgo from "../../img/ginkgo.jpg";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

export const TopNav = () => {
  const buttonStyle = {
    p: 1,
    textTransform: "none",
    '&:hover': {
      backgroundColor: 'rgba(0, 100, 0, 0.7)', 
    },
    fontWeight: "bold",
    boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.2)",
    bgcolor: "#c7e5c1",
    color: "#0c3a2b", 
    width: '100%',
    borderRadius: '4px',
  };
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
        <Button components = "a" href="/" sx={ buttonStyle}
        >
          Home
        </Button>
        <Button component="a"
          href="/#/search"
          sx={ buttonStyle}
        >
          Search
        </Button>
        <Button component="a"
          href="/#/CourseTimeAnalyzer"
  
          sx={ buttonStyle}
        >
          Course Time Analyzer
        </Button>

        <Button component="a"
          href="/#/Creators"
          sx={ buttonStyle}
        >
          Creators
        </Button>

        <Button component="a"
          href="/#/SourceData"
          sx={buttonStyle}
        >
          Source Data
        </Button>

        <Button component="a"
          href="/#/StudentEnrollmentAnalyzer"
          sx={ buttonStyle}
        >
          Student Enrollment Analyzer
        </Button>

        <Button component="a"
          href="/#/SupCourseAnalyzer"
          sx={ buttonStyle}
        >
          Sup Course Analyzer
        </Button>
      </Stack>
      {/* <Stack> */}
      <Box sx={{ height: "100px", display: "flex", justifyContent: "space-between", alignItems: "center", px: 20 }}>
    <RouterLink to="https://www.csus.edu">
      <img
        src="https://www.csus.edu/NewCSUS2019-global-assets/_internal/images/logo-horizontal.png"
        alt="Sac State logo"
        style={{ maxWidth: '250px', height: 'auto' }}
      />
    </RouterLink>

    <List component="nav" aria-labelledby="primary-navigation"
      sx={{
        display: 'flex',
        width: 'auto',
        marginRight: 20, 
        height: "60px",
        justifyContent: "space-between",
        p: 2,
      }}
      role="menu">
      <ListItem role="menuitem" disablePadding sx={{ marginRight: 2 }}>
        <RouterLink to="https://www.csus.edu/apply/index.html">
          <ListItemText primary="APPLY" />
        </RouterLink>
      </ListItem>
      <ListItem role="menuitem" disablePadding sx={{ marginRight: 2 }}>
        <RouterLink to="https://www.csus.edu/experience/index.html">
          <ListItemText primary="EXPERIENCE" />
        </RouterLink>
      </ListItem>
      <ListItem role="menuitem" disablePadding>
        <RouterLink to="https://www.csus.edu/giving"sx={{ marginRight: 2 }}>
          <ListItemText primary="GIVE" />
        </RouterLink>
      </ListItem>
    </List>
  </Box>



      <Box
        xs={12}
        sx={{
          backgroundImage: `url(${Ginkgo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
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
            pl: 20,
          }}
        >
          <Stack>
            <Link to="/" style={{ textDecoration: 'none' }}>
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
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
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
            </Link>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};
