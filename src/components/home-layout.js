import * as React from "react";
import Navbar from "./navbar";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./footer";

const HomeLayout = ({ pageTitle, children }) => {
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
      <div className="flex h-screen w-full flex-col">
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

export default HomeLayout;
