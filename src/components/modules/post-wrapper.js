import * as React from "react";
import { Link } from "gatsby";

const PostWrapper = ({ children, previous, next }) => {
  return (
    <div className="mx-auto grid gap-1 tablet:w-[75ch]">
      {children}
      <div className="fixed right-0 top-0 z-50 mt-4 mr-4 tablet:mt-8 tablet:ml-8 desktop:invisible desktop:m-0 desktop:h-0 desktop:p-0">
        {SimplePreviousPost(previous)}
      </div>
      <div className="fixed left-0 top-0 z-50 mt-4 ml-4 tablet:mr-8 tablet:mt-8 desktop:invisible desktop:m-0 desktop:h-0 desktop:p-0">
        {SimpleNextPost(next)}
      </div>
      <div className="invisible desktop:visible desktop:sticky desktop:bottom-12 desktop:my-0">
        {PreviousPost(previous)}
        {NextPost(next)}
      </div>
    </div>
  );
};

function NextPost(next) {
  if (next !== null) {
    return (
      <Link
        to={"/posts/" + next.slug}
        className="k-interactable-simple grow rounded-md text-right text-kami desktop:absolute desktop:-left-4 desktop:bottom-0 desktop:max-w-[20ch] desktop:-translate-x-full"
      >
        <p className="prose-lg my-0 rounded-md bg-katsu px-4 py-1 font-garamond">
          {next.frontmatter.title}
        </p>
      </Link>
    );
  }
}

function PreviousPost(previous) {
  if (previous !== null) {
    return (
      <Link
        to={"/posts/" + previous.slug}
        className="k-interactable-simple grow rounded-md text-left text-kami desktop:absolute desktop:bottom-0 desktop:-right-4 desktop:max-w-[20ch] desktop:translate-x-full"
      >
        <p className="prose-lg my-0 rounded-md bg-katsu px-4 py-1 font-garamond">
          {previous.frontmatter.title}
        </p>
      </Link>
    );
  }
}

function SimplePreviousPost(previous) {
  if (previous !== null) {
    return (
      <Link to={"/posts/" + previous.slug} className="text-kami">
        <p className="k-interactable-simple k-glassy rounded-md bg-katsu px-4 py-1 font-fira">
          -{">"}
        </p>
      </Link>
    );
  }
}

function SimpleNextPost(next) {
  if (next !== null) {
    return (
      <Link to={"/posts/" + next.slug} className="text-kami">
        <p className="k-interactable-simple k-glassy rounded-md bg-katsu px-4 py-1 font-fira">
          {"<"}-
        </p>
      </Link>
    );
  }
}

export default PostWrapper;
