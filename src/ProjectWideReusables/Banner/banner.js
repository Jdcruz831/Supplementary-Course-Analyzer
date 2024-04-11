import React, { useState } from 'react';
import './banner.css'; 
import Ginkgo from '../../img/ginkgo.jpg';
import hamburgerIcon from '../../img/hamburgerIcon.jpg';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
  
const Banner = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="grid">
      <h2 hidden id="primary-navigation">Primary Navigation</h2>
        <a className="col1" href="https://www.csus.edu">
          <img className="topLogo" alt="Sac State logo" src="https://www.csus.edu/NewCSUS2019-global-assets/_internal/images/logo-horizontal.png" />
        </a>
      <div className="col2">
          <div className="grid2">
              <ul aria-labelledby="primary-navigation" className="nav justify-content-end" role="menu" style={{listStyle: 'none', padding: 0, display: 'contents'}}>
                <li role="menuitem" className="col11"><a href="https://www.csus.edu/apply/index.html">APPLY</a></li>
                <li role="menuitem" className="col12"><a href="https://www.csus.edu/experience/index.html">EXPERIENCE</a></li>
                <li role="menuitem" className="col13"><a href="https://www.csus.edu/giving">GIVE</a></li>
              </ul>
              {/* Menu Button */}
          <img src={hamburgerIcon} className="hamburgerIcon" alt="menu"
            onClick={handleClick}
            variant="contained"
            sx={{ backgroundColor: '#486b7a', color: 'white', '&:hover': { backgroundColor: '#124459' } }}
          />
          {/* Dropdown Menu */}
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Button href="/#/CourseTimeAnalyzer" variant="contained" sx={{backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}>Course Time Analyzer </Button>
            <Button href="/#/Creators" variant="contained" sx={{backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}>Creators </Button>
            <Button href="/#/SourceData" variant="contained" sx={{backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}>Source Data </Button>
            <Button href="/#/StudentEnrolmentAnalyzer" variant="contained" sx={{backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}>Student Enrolment Analyzer </Button>
            <Button href="/#/SupCourseAnalyzer" variant="contained" sx={{backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}>Sup Course Analyzer</Button>
            <Button href=" " variant="contained" sx={{backgroundColor: '#486b7a', color: 'white', '&:hover': {backgroundColor: '#124459',} }}>Home</Button>

          </Menu>
            
          </div>
      </div>
      <div className="imageContainer">
        <img className="row2" src={Ginkgo} alt="Ginkgo" />
        <div className="greenOverlay">
          <span className="overlayText">Supplementary Course Analyzer</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;

