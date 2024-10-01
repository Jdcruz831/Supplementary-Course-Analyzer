import React from "react";
import DefaultLayout from "../../components/default/layout";
import { Grid, Stack,  Typography, Box } from "@mui/material";
import scripters from "../../img/scripters.jpg";

function CreatorsMainPage() {
  return (
    <DefaultLayout>
      <div className="App">
        <h1>
          <span>CreatorsMainPage</span>
        </h1>
      <Grid
        container
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
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
              Creators
            </Typography>
            <Typography variant="body1" sx={{ color: "white", fontSize: "1.4em" }}>
              We are a group of passionate Computer Science students at the California State University of Sacramento, driven by our desires to learn, innovate, and to achieve our goals.
              Together, we are committed to turning our ideas into reality and creating an app that reflects our hard work to help our fellow professors and students to improve
              their experience every semester in scheduling PAL sessions. We believe that through our hard work and collaboration, we can make a significant difference in the 
              ease of creating schedules to help our fellow students, and are excited to see how our app can be used to save time and resources so that our professors can focus
              on what they do best, teaching our fellow students.
          </Typography>
          </Stack>
        </Grid>
        <Grid
            item
            md={6}
            sx={{
              minHeight: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
               
            }}
          >
            <Box
              component="img"
              src={scripters}  
              alt="Creators Image"
              sx={{
                width: "100%",
                height: "auto",
                position: "relative",
                top: "-120px",
                right: "-80px",
              }}
            />
          </Grid>
      </Grid>
      </div>
    </DefaultLayout>
  );
}

export default CreatorsMainPage;
