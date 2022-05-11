import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import sun from "../images/sun.svg";

const Navbar = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-stretch gap-1 font-inter text-kami desktop:bottom-12">
      <Link
        className="k-interactable h-12 w-12 overflow-hidden rounded-md"
        to="/"
      >
        <StaticImage src="../images/icon.svg" alt="icon" />
      </Link>
      <Link className="k-interactable k-bar-button k-glassy px-4" to="/posts">
        <p>Posts</p>
      </Link>
      <Link className="k-interactable k-bar-button k-glassy px-4" to="/about">
        <p>About</p>
      </Link>
      <button className="k-interactable k-bar-button k-glassy w-12" to="/">
        <img src={sun} alt="Light Mode" />
      </button>
    </nav>
  );
};

export default Navbar;
