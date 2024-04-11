import React from 'react';
import Button from '@mui/material/Button';
import Ginkgo from './img/ginkgo.jpg';
import { Typography } from '@mui/material';

function HomeMainPage() {
  return (
    <div className="App">
        
        
    
        <Button
            href="/#/CourseTimeAnalyzer"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}
          >
          Course Time Analyzer 
          </Button>

          <Button
            href="/#/Creators"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}
          >
          Creators
          </Button>

          <Button
            href="/#/SourceData"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}
          >
          SourceData 
          </Button>

          <Button
            href="/#/StudentEnrolmentAnalyzer"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}
          >
         Student Enrolment Analyzer
          </Button>

          <Button
            href="/#/SupCourseAnalyzer"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}
          >
          Sup Course Analyzer 
          </Button>



          <div>
    </div>
  

  <h1><span>HomeMainPage</span></h1>

    </div>

  );
}

export default HomeMainPage;