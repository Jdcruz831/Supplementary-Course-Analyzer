import React from "react";
import { Footer } from "./footer";
import { TopNav } from "./top-nav";
import { Grid, useMediaQuery } from "@mui/material";

const DefaultLayout = ({ children }) => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const containerWidth = isLargeScreen ? "1140px" : "100%";

  return (
    <div>
      <TopNav />
      <Grid container justifyContent="center">
        <Grid item sx={{ width: containerWidth }}>
          {children}
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
