import {
  Box,
  Button,
  Stack,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  autocompleteClasses,
  IconButton,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import Ginkgo from "../../img/ginkgo.jpg";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const menuOptions = [
  { label: "Home", path: "/" },
  { label: "Search", path: "/search" },
  { label: "Couse Time Analyzer", path: "/CourseTimeAnalyzer" },
  { label: "Creators", path: "/Creators" },
  { label: "Source Data", path: "/SourceData" },
  {
    label: "Student Enrollment Analyzer",
    path: "/StudentEnrollmentAnalyzer",
  },
  { label: "Sup. Course Analyzer", path: "/SupCourseAnalyzer" },
  { label: "Login", path: "/login" },
];

export const TopNav = () => {
  const buttonStyle = {
    p: 1,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 100, 0, 0.7)",
    },
    fontWeight: "bold",
    boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.2)",
    bgcolor: "#c7e5c1",
    color: "#0c3a2b",
    width: "100%",
    borderRadius: "4px",
  };
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Stack direction="column">
      <Box
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,
        }}
      >
        <Box>
          <RouterLink to="https://www.csus.edu">
            <img
              src="https://www.csus.edu/NewCSUS2019-global-assets/_internal/images/logo-horizontal.png"
              alt="Sac State logo"
              style={{ maxWidth: "210px", height: "auto" }}
            />
          </RouterLink>
        </Box>

        <List
          component="nav"
          aria-labelledby="primary-navigation"
          sx={{
            display: "flex",
            width: "auto",
            // marginRight: 20,
            height: "60px",
            justifyContent: "space-between",
            p: 2,
          }}
          role="menu"
        >
          <ListItem role="menuitem" disablePadding sx={{ marginRight: 2 }}>
            <RouterLink to="https://www.csus.edu/apply/index.html">
              <ListItemText
                primary="APPLY"
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "black",
                  fontWeight: 550,
                }}
              />
            </RouterLink>
          </ListItem>
          <ListItem role="menuitem" disablePadding sx={{ marginRight: 2 }}>
            <RouterLink to="https://www.csus.edu/experience/index.html">
              <ListItemText
                primary="EXPERIENCE"
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "black",
                  fontWeight: 550,
                }}
              />
            </RouterLink>
          </ListItem>
          <ListItem role="menuitem" disablePadding>
            <RouterLink
              to="https://www.csus.edu/giving"
              sx={{ marginRight: 2 }}
            >
              <ListItemText
                primary="GIVE"
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "black",
                  fontWeight: 550,
                }}
              />
            </RouterLink>
          </ListItem>
          <ListItem>
            <IconButton onClick={toggleMenu}>
              <MenuIcon
                fontSize="large"
                sx={{
                  stroke: (theme) => theme.palette.primary.main,
                  strokeWidth: 1,
                }}
              />
            </IconButton>
          </ListItem>
        </List>
        <Drawer
          PaperProps={{
            sx: {
              bgcolor: (theme) => theme.palette.primary.main,
              color: "white",
            },
          }}
          open={menuOpen}
          anchor="right"
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <Box
            sx={{
              width: "200px",
            }}
          >
            <List>
              {menuOptions?.map((option) => (
                <ListItem
                  disablePadding
                  component={RouterLink}
                  to={option.path}
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: (theme) => theme.palette.secondary.hornet,
                    },
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary={option.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
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
            <Link to="/" style={{ textDecoration: "none" }}>
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
            <Link to="/" style={{ textDecoration: "none" }}>
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
