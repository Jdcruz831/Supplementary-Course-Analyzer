import React from 'react';
import './About.css';
import Ginkgo from '../../img/ginkgo.jpg';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-header'>
        <img src={Ginkgo} alt='Ginkgo' className='header-image' />
        <div className='image-overlay'></div>
        <div className='title'>
          <Typography variant='h2' align='center' className='about-typography-h2'>
            About Us
          </Typography>
        </div>
        <div className='header-text'>
          <Typography variant='h3' align='left' className='about-typography-h3'>
            Supplementary <br/> Course Analyzer
          </Typography>
          <Typography variant='h4' align='left' className='about-typography-h4'>
            Sacramento State
          </Typography>
        </div>
      </div>
      <div className='about-background'>
        <div className='about-text'>
          <p>
            The CSUS PAL program aims to support students in challenging STEM courses by
            offering supplementary classes led by former students. These classes, held in person, require
            campus classrooms that do not conflict with core STEM courses. However, identifying suitable
            times and classrooms poses a challenge due to the lack of software to analyze scheduling data for
            STEM courses.
          </p>
          <p>
            The Supplementary Course Analyzer aims to solve this problem by providing a website that will analyze course times and 
            determine optimal times for supplementary courses, while minimizng interference with major courses. We aim to make PAL courses 
            more accessible to students and help the PAL program accomplish their goal of helping students learn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
