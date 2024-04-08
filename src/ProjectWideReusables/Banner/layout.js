import React from 'react';
import Banner from './banner';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Banner />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;