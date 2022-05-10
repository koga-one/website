import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Links = ({ twitter, insta }) => {
  return (
    <div>
      <Link
        className="k-interactable mx-2 mt-2 self-end rounded-md px-2 pb-2"
        to="https://twitter.com/koga_one"
      >
        <StaticImage
          className="h-8 w-8"
          src={"../images/" + twitter}
          alt="Twitter Icon by Icons8"
        />
      </Link>
      <Link
        className="k-interactable mx-2 mt-2 self-end rounded-md px-2 pb-2"
        to="https://www.instagram.com/koga.one_/"
      >
        <StaticImage
          className="h-8 w-8"
          src={"../images/" + insta}
          alt="Instagram Icon by Icons8"
        />
      </Link>
    </div>
  );
};

export default Links;
