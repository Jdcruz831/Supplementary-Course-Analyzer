import React from "react";
import './index.css'; 
import Ginkgo from './ginkgo.jpg';

const Home = () => {
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
            <button aria-expanded="false" aria-haspopup="true" aria-label="Menu" className="col14" data-bs-target="#quicklinks-modal" data-bs-toggle="modal" href="#quicklinks-modal" type="button">Menu</button>
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

export default Home;

