import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GridLink = ({ title, text, href, day, proj }) => {
  const image = getImage(proj);
  return (
    <Link
      className="k-interactable-simple k-posts-day k-button tablet:max-w-min"
      to={href}
    >
      <div className="box bg-katsu">
        <h2 className="font-garamond text-h4 tablet:whitespace-nowrap">
          {title}
        </h2>
        <p className="text-txt tablet:whitespace-nowrap">{text}</p>
      </div>
      <div className="box bg-moku">
        <p className="font-garamond text-h2 font-bold">{day}</p>
      </div>
      <GatsbyImage
        className="box col-span-2 max-h-4 border border-katsu border-opacity-25"
        image={image}
        alt="Project"
      />
    </Link>
  );
};

export default GridLink;
