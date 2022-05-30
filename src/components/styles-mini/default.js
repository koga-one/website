import * as React from "react";
import { Link } from "gatsby";

const DefaultMini = ({ day, last, frontmatter, link }) => {
  return (
    <Link
      className={
        "k-interactable-simple flex grow flex-wrap gap-4 self-center rounded-lg bg-gure p-4 font-normal" +
        last
      }
      to={link}
    >
      <div className="self-center font-garamond text-h3 font-semibold text-katsu">
        {day}
      </div>
      <div className="self-center text-h6 text-katsu">{frontmatter.title}</div>
    </Link>
  );
};

export default DefaultMini;
