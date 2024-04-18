import React from "react";
import { Footer } from "./footer";
import { TopNav } from "./top-nav";
import { Grid } from "@mui/material";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <Grid container justifyContent="center">
        <Grid item sx={{ width: "1140px" }}>
          {children}
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
