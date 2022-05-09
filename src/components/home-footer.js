import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const HomeFooter = () => {
  return (
    <div className="relative bg-katsu tablet:h-36">
      <div className="py-10 tablet:py-0">
        <div className="py-1 text-center font-medium text-kami tablet:absolute tablet:left-1/4 tablet:bottom-1/2 tablet:flex tablet:-translate-x-1/2 tablet:translate-y-1/2">
          <Link
            className="k-interactable mx-4 py-2"
            to="https://twitter.com/koga_one"
          >
            <StaticImage
              className="h-8 w-8"
              src="../images/twitter.svg"
              alt="Twitter Icon by Icons8"
            />
          </Link>
          <Link
            className="k-interactable mx-4 py-2"
            to="https://www.instagram.com/koga.one_/"
          >
            <StaticImage
              className="h-8 w-8"
              src="../images/insta.svg"
              alt="Instagram Icon by Icons8"
            />
          </Link>
        </div>
        <p className="py-1 text-center font-medium text-kami tablet:absolute tablet:left-3/4 tablet:bottom-1/2 tablet:flex tablet:-translate-x-1/2 tablet:translate-y-1/2">
          The moon is beautiful, isn't it?
        </p>
      </div>
      <div className="h-[1px] bg-kami bg-opacity-10 tablet:invisible"></div>
      <div className="h-28 bg-katsu"></div>
    </div>
  );
};

export default HomeFooter;
