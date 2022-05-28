import * as React from "react";
import DisqusTemplate from "../disqus";

const PostDisqus = ({ id, pathname, title }) => {
  return (
    <div className="k-wrapper k-prose">
      <h2>Comments</h2>
      <DisqusTemplate
        pathname={pathname}
        id={id}
        title={title}
      ></DisqusTemplate>
    </div>
  );
};

export default PostDisqus;
