import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Several People Are Talking" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <div>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
