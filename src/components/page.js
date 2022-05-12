import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Form from "./contact";

const Page = ({ data, styles }) => {
  return (
    <article>
      <p id="top" className="invisible h-0 font-inter">
        -
      </p>
      <a
        href="#top"
        className="k-interactable-simple k-glassy fixed top-0 right-1/2 z-50 mt-4 translate-x-1/2 rounded-md bg-katsu px-4 py-1 text-kami tablet:mt-8"
      >
        top
      </a>
      <h1 className="mt-32 mb-12 text-center font-garamond text-h1 font-black text-katsu tablet:mb-20 desktop:my-28 desktop:text-d3">
        {data.frontmatter.title}
      </h1>

      <div className="mx-auto grid grid-cols-1 gap-1 font-inter tablet:w-[75ch]">
        <div className="flex gap-1 rounded-lg desktop:bg-katsu desktop:bg-opacity-5 desktop:p-8 desktop:py-4">
          <div className="rounded-md bg-moku px-4 py-1 text-kami">
            <p className="!my-0">{data.timeToRead} minutes to read</p>
          </div>
          <div className="rounded-md bg-moku px-4 py-1 text-kami">
            <p className="!my-0">
              {data.wordCount.words !== 1
                ? data.wordCount.words + " words"
                : data.wordCount.words + " word"}
            </p>
          </div>
        </div>
        {TableOfContentsWrapper(data)}
        <div className={styles}>
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
        <div className="prose flex max-w-none rounded-lg bg-aka bg-opacity-10 px-4 py-8 text-katsu desktop:prose-lg desktop:p-8">
          <div className="mx-auto">
            <Form></Form>
          </div>
        </div>
      </div>
    </article>
  );
};

function TableOfContentsWrapper(data) {
  if (data.tableOfContents.hasOwnProperty("items")) {
    return (
      <div className="prose max-w-none rounded-lg bg-katsu bg-opacity-5 py-8 px-4 text-katsu prose-headings:font-garamond prose-a:font-normal prose-a:underline-offset-1 hover:prose-a:no-underline desktop:prose-lg desktop:rounded-lg desktop:p-8">
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

export default Page;
