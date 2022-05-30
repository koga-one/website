import * as React from "react";
import loadable from "@loadable/component";

const DayWrapper = ({ day, node, last }) => {
  const Component = loadable(() =>
    import("./styles-mini/" + node.slug.split("/").shift())
  );

  return (
    <Component
      day={day}
      last={"newpost-" + last}
      frontmatter={node.frontmatter}
      link={"/posts/" + node.slug}
    ></Component>
  );
};

export default DayWrapper;
