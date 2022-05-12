import * as React from "react";
import { Link } from "gatsby";

const DayWrapper = ({ day, node, last }) => {
  let wrapperDay = " wrapper-day-" + node.slug.split("/").shift();
  let newPost = " new-post-" + last;

  return (
    <Link
      className={
        "k-interactable-simple flex grow flex-wrap gap-4 self-center rounded-lg p-4 font-normal" +
        wrapperDay +
        newPost
      }
      to={"/posts/" + node.slug}
    >
      <div className="self-center font-garamond text-h3 font-semibold text-kami">
        {day}
      </div>
      <div className="self-center text-h6 text-kami">
        {node.frontmatter.title}
      </div>
    </Link>
  );
};

export default DayWrapper;
