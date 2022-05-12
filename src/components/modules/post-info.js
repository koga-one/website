import * as React from "react";

const PostInfo = ({ timeToRead, words }) => {
  return (
    <div className="flex gap-1 rounded-lg desktop:bg-katsu desktop:bg-opacity-5 desktop:p-8 desktop:py-4">
      <div className="rounded-md bg-moku px-4 py-1 text-kami">
        <p className="!my-0">{timeToRead} minutes to read</p>
      </div>
      <div className="rounded-md bg-moku px-4 py-1 text-kami">
        <p className="!my-0">
          {words !== 1 ? words + " words" : words + " word"}
        </p>
      </div>
    </div>
  );
};

export default PostInfo;
