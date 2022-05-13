import * as React from "react";
import DisqusTemplate from "../disqus";

const PostDisqus = ({ id, pathname, title }) => {
  return (
    <div className="k-wrapper k-prose dark:bg-gure">
      <h2 className="!text-katsu">Comments</h2>
      <DisqusTemplate
        pathname={pathname}
        id={id}
        title={title}
      ></DisqusTemplate>
    </div>
  );
};

export default PostDisqus;
