import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import sun from "../images/sun.svg";

const Navbar = () => {
  return (
    <nav className="fixed bottom-12 left-1/2 flex -translate-x-1/2 transform flex-row font-inter text-sm text-light">
      <Link className="k-bar-icon mr-4" to="/">
        <StaticImage src="../images/icon.png" />
      </Link>
      <div className="k-bar flex">
        <Link className="k-bar-button" to="/posts">
          Posts
        </Link>
        <Link className="k-bar-button" to="/about">
          About
        </Link>
      </div>
      <button className="k-bar-icon ml-4" to="/">
        <img className="fill-rose" src={sun} />
      </button>
    </nav>
  );
};

export default Navbar;
