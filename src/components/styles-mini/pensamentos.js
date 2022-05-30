import * as React from "react";
import { Link } from "gatsby";

const PensamentosMini = ({ day, last, frontmatter, link }) => {
  return (
    <div className={last}>
      <Link
        className="k-interactable-simple flex grow flex-wrap gap-4 self-center rounded-lg border border-katsu bg-[#eef4ff] p-4 font-normal dark:border-gure dark:bg-[#010712]"
        to={link}
      >
        <iframe
          className="h-[88px] w-full rounded-lg tablet:-m-4 tablet:mr-0 tablet:h-[80px] tablet:w-[80px]"
          src={frontmatter.extra}
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <div className="self-center font-garamond text-h3 font-semibold text-katsu dark:text-gure">
          {day}
        </div>
        <div className="self-center text-h6 text-katsu dark:text-gure">
          {frontmatter.title}
        </div>
      </Link>
    </div>
  );
};

export default PensamentosMini;
