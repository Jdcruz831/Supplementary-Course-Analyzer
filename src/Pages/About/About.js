import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import DefaultLayout from "../../components/default/layout";

const AboutBackground = styled(Box)({
  width: '100%',
  minHeight: '65vh',
  backgroundColor: '#021e14',
  zIndex: 0,
  display: 'flex',
  justifyContent: 'center',
});

const AboutText = styled(Box)({
  color: 'white',
  width: '85%',
  maxWidth: 1000,
});

const About = () => {
  return (
    <DefaultLayout>
    <Box className="about-container" sx={{ width: '100%', position: 'relative' }}>
      <AboutBackground>
        <AboutText>
          <Typography sx={{height:'50px'}}>
            About Us
        </Typography>  
          <Typography>
            The CSUS PAL program aims to support students in challenging STEM courses by
            offering supplementary classes led by former students. These classes, held in person, require
            campus classrooms that do not conflict with core STEM courses. However, identifying suitable
            times and classrooms poses a challenge due to the lack of software to analyze scheduling data for
            STEM courses.
          </Typography>
          <Typography>
            The Supplementary Course Analyzer aims to solve this problem by providing a website that will analyze course times and 
            determine optimal times for supplementary courses, while minimizing interference with major courses. We aim to make PAL courses 
            more accessible to students and help the PAL program accomplish their goal of helping students learn.
          </Typography>
        </AboutText>
      </AboutBackground>
    </Box>
    </DefaultLayout>
  );
};

export default About;

