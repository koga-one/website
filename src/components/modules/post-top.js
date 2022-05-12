import * as React from "react";

const PostTop = () => {
  return (
    <div>
      <p id="top" className="invisible h-0 font-inter">
        -
      </p>
      <a
        href="#top"
        className="k-interactable-simple k-glassy fixed top-0 right-1/2 z-50 mt-4 translate-x-1/2 rounded-md bg-katsu px-4 py-1 text-kami tablet:mt-8"
      >
        top
      </a>
    </div>
  );
};

export default PostTop;
