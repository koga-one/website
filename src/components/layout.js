import * as React from "react";
import Navbar from "./navbar";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./footer";

const Layout = ({ pageTitle, children, className }) => {
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
    <div className={className}>
      <div className="min-h-screen px-[4vw] tablet:px-[12vw] desktop:px-[20vw]">
        <title>
          {pageTitle.toUpperCase()} //{" "}
          {data.site.siteMetadata.title.toUpperCase()}
        </title>
        <Navbar />
        {children}
      </div>
      <Footer styles="mt-8 desktop:mt-24"></Footer>
    </div>
  );
};

export default Layout;
