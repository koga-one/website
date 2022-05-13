import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import sun from "../images/sun.svg";

const Navbar = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-stretch gap-1 text-kami desktop:bottom-12">
      {/*<Link
        className="k-interactable-simple h-12 w-12 overflow-hidden rounded-md"
        to="/"
      >
        <StaticImage src="../images/icon.svg" alt="icon" />
  </Link>*/}
      <Link
        className="k-interactable-simple k-glassy flex h-12 rounded-md bg-katsu px-4 font-medium lowercase transition-all dark:bg-gure dark:bg-opacity-60 dark:text-katsu"
        to="/"
      >
        <p className="my-auto mx-auto">Home</p>
      </Link>
      <Link
        className="k-interactable-simple k-glassy flex h-12 rounded-md bg-katsu px-4 font-medium lowercase transition-all dark:bg-gure dark:bg-opacity-60 dark:text-katsu"
        to="/posts"
      >
        <p className="my-auto mx-auto">Posts</p>
      </Link>
      <Link
        className="k-interactable-simple k-glassy flex h-12 rounded-md bg-katsu px-4 font-medium lowercase transition-all dark:bg-gure dark:bg-opacity-60 dark:text-katsu"
        to="/about"
      >
        <p className="my-auto mx-auto">About</p>
      </Link>
      {/*<button
        className="k-interactable-simple k-glassy flex w-12 rounded-md bg-katsu font-medium lowercase transition-all dark:bg-gure dark:bg-opacity-60 dark:text-katsu"
        to="/"
      >
        <img className="my-auto mx-auto" src={sun} alt="Light Mode" />
  </button>*/}
    </nav>
  );
};

export default Navbar;
