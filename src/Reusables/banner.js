import React from "react";
import Ginkgo from '../img/ginkgo.jpg';
import { Typography } from '@mui/material';


const Banner = ({ color }) => {
  return (

    <div style={{ width: '100vw', marginTop: '20px', height: '15vw', position: 'relative' }}>
      <img src={Ginkgo} alt="Ginkgo" style={{ minWidth: '100%', height: '180px', objectFit: 'cover' }} /> 
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '180px', backgroundImage: 'linear-gradient(to right, #043927, rgba(255, 255, 255, 0))' }}></div>
        <div style={{display: 'flex', flexDirection: 'column',  position: 'absolute', top: '30px', }}> 
        <Typography variant="h4"  align="left" fontFamily= 'BlinkMacSystemFont'style={{color: 'rgba(255, 255, 255, 1)',textShadow: 'black 2px 2px' }}>
        Supplementary <br/> Course Analyzer
            </Typography>
            <Typography variant="h5"  align="left" fontFamily= 'BlinkMacSystemFont'style={{ color: 'rgba(196, 181, 129, 1)',textShadow: 'black 2px 2px' }}>
        Sacramento State
            </Typography>
            </div>
    </div>
  );
}

export default Banner;
