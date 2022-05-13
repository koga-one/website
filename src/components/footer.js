import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = ({ styles }) => {
  return (
    <div
      className={"relative bg-katsu dark:bg-gure desktop:h-36" + " " + styles}
    >
      <div className="py-10 desktop:py-0">
        <div className="py-2 text-center font-medium text-kami dark:text-katsu desktop:absolute desktop:left-1/4 desktop:bottom-1/2 desktop:flex desktop:-translate-x-1/2 desktop:translate-y-1/2">
          <Link
            className="mx-2 mt-2 self-end rounded-md px-2 pb-2"
            to="https://twitter.com/koga_one"
          >
            <StaticImage
              className="h-8 w-8"
              src="../images/twitter.svg"
              alt="Twitter Icon by Icons8"
            />
          </Link>
          <Link
            className="mx-2 mt-2 self-end rounded-md px-2 pb-2"
            to="https://www.instagram.com/koga.one_/"
          >
            <StaticImage
              className="h-8 w-8"
              src="../images/insta.svg"
              alt="Instagram Icon by Icons8"
            />
          </Link>
        </div>
        <p className="py-2 text-center font-medium text-kami dark:text-katsu desktop:absolute desktop:left-3/4 desktop:bottom-1/2 desktop:flex desktop:-translate-x-1/2 desktop:translate-y-1/2">
          The moon is beautiful, isn't it?
        </p>
      </div>
      <div className="h-[1px] bg-kami bg-opacity-10 dark:bg-katsu desktop:invisible"></div>
      <div className="h-28 bg-katsu dark:bg-gure tablet:h-32"></div>
    </div>
  );
};

export default Footer;
