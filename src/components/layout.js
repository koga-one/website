import * as React from "react";
import Navbar from "./navbar";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./footer";

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
      <div className="mx-[4vw] min-h-screen overflow-hidden font-inter tablet:mx-[12vw] desktop:mx-[20vw]">
        <title>
          {pageTitle.toUpperCase()} //{" "}
          {data.site.siteMetadata.title.toUpperCase()}
        </title>
        <Navbar />
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
