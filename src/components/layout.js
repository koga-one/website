import * as React from "react";
import Navbar from "./navbar";
import { graphql, useStaticQuery } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle.toUpperCase()} //{" "}
        {data.site.siteMetadata.title.toUpperCase()}
      </title>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
