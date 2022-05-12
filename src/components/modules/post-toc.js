import * as React from "react";

const PostTOC = ({ data }) => {
  return TableOfContentsWrapper(data);
};

function TableOfContentsWrapper(data) {
  if (data.tableOfContents.hasOwnProperty("items")) {
    return (
      <div className="k-wrapper k-prose rounded-lg prose-a:text-katsu">
        <h2>Table of Contents</h2>
        <ul>
          {data.tableOfContents.items.map((item) => TableOfContents(item))}
        </ul>
      </div>
    );
  }
}

function TableOfContents(object) {
  if (object.hasOwnProperty("items")) {
    if (object.hasOwnProperty("title")) {
      return (
        <li>
          <a
            href={
              "#" +
              object.title
                .toLowerCase()
                .replace(/[|[\]&;$%@"<>()+,!?.]/g, "")
                .replace(/ /g, "-")
            }
          >
            {object.title}
          </a>
          <ul>{object.items.map((item) => TableOfContents(item))}</ul>
        </li>
      );
    } else {
      return object.items.map((item) => TableOfContents(item));
    }
  } else {
    return (
      <li>
        <a
          href={
            "#" +
            object.title
              .toLowerCase()
              .replace(/[|[\]&;$%@"<>()+,!?.]/g, "")
              .replace(/ /g, "-")
          }
        >
          {object.title}
        </a>
      </li>
    );
  }
}

export default PostTOC;
