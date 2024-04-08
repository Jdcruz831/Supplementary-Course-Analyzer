import React from "react";
import { Footer } from "./footer";
import { TopNav } from "./top-nav";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
