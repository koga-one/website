import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Form from "../contact";
import DisqusTemplate from "../disqus";

const DefaultStyle = ({ data, index }) => {
  const mdx = data.mdx;
  const edge = data.allMdx.edges[index];

  return (
    <article>
      <p id="top" className="invisible font-inter">
        -
      </p>
      <div className="fixed right-0 top-0 z-50 mt-4 mr-4 tablet:mt-8 tablet:ml-8 desktop:invisible desktop:m-0 desktop:h-0 desktop:p-0">
        {SimplePreviousPost(edge.previous)}
      </div>
      <div className="fixed left-0 top-0 z-50 mt-4 ml-4 tablet:mr-8 tablet:mt-8 desktop:invisible desktop:m-0 desktop:h-0 desktop:p-0">
        {SimpleNextPost(edge.next)}
      </div>
      <a
        href="#top"
        className="k-interactable-simple k-glassy fixed top-0 right-1/2 z-50 mt-4 translate-x-1/2 rounded-md bg-katsu px-4 py-1 text-kami tablet:mt-8"
      >
        top
      </a>
      <h1 className="mt-32 mb-12 text-center font-garamond text-h1 font-black text-katsu tablet:mb-20 desktop:my-28 desktop:text-d3">
        {mdx.frontmatter.title}
      </h1>

      <div className="mx-auto grid grid-cols-1 gap-1 font-inter tablet:w-[75ch]">
        <div className="flex gap-1 rounded-lg desktop:bg-katsu desktop:bg-opacity-5 desktop:p-8 desktop:py-4">
          <div className="rounded-md bg-moku px-4 py-1 text-kami">
            <p className="!my-0">{mdx.frontmatter.date}</p>
          </div>
          <div className="rounded-md bg-moku px-4 py-1 text-kami">
            <p className="!my-0">{mdx.timeToRead} minutes to read</p>
          </div>
          <div className="rounded-md bg-moku px-4 py-1 text-kami">
            <p className="!my-0">
              {mdx.wordCount.words !== 1
                ? mdx.wordCount.words + " words"
                : mdx.wordCount.words + " word"}
            </p>
          </div>
        </div>
        {TableOfContentsWrapper(mdx)}
        <div className="prose max-w-none rounded-lg bg-katsu bg-opacity-5 px-4 py-8 text-katsu prose-headings:font-garamond prose-headings:text-katsu prose-p:font-inter prose-p:text-katsu prose-a:text-aka hover:prose-a:no-underline prose-strong:text-katsu prose-code:font-fira prose-code:text-katsu prose-pre:bg-katsu prose-pre:bg-opacity-10 prose-hr:opacity-20 dark:prose-invert desktop:prose-lg desktop:p-8">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        <div className="prose max-w-none rounded-lg bg-katsu bg-opacity-5 py-8 px-4 text-katsu prose-headings:font-garamond prose-p:font-inter prose-a:font-inter prose-a:font-normal prose-a:underline-offset-1 hover:prose-a:no-underline desktop:prose-lg desktop:rounded-lg desktop:p-8">
          <h2>Comments</h2>
          <DisqusTemplate
            pathname={window.location.pathname}
            id={mdx.id}
            title={mdx.frontmatter.title}
          ></DisqusTemplate>
        </div>
        <div className="prose flex max-w-none rounded-lg bg-aka bg-opacity-10 px-4 py-8 text-katsu desktop:prose-lg desktop:p-8">
          <div className="mx-auto">
            <Form></Form>
          </div>
        </div>
        <div className="invisible desktop:visible desktop:sticky desktop:bottom-12 desktop:my-0">
          {PreviousPost(edge.previous)}
          {NextPost(edge.next)}
        </div>
      </div>
    </article>
  );
};

function TableOfContentsWrapper(mdx) {
  if (mdx.tableOfContents.hasOwnProperty("items")) {
    return (
      <div className="prose max-w-none rounded-lg bg-katsu bg-opacity-5 py-8 px-4 text-katsu prose-headings:font-garamond prose-a:font-normal prose-a:underline-offset-1 hover:prose-a:no-underline desktop:prose-lg desktop:rounded-lg desktop:p-8">
        <h2>Table of Contents</h2>
        <ul>
          {mdx.tableOfContents.items.map((item) => TableOfContents(item))}
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
      return (
        <li>
          <a>-</a>
          <ul>{object.items.map((item) => TableOfContents(item))}</ul>
        </li>
      );
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

function NextPost(next) {
  if (next !== null) {
    return (
      <Link
        to={"/posts/" + next.slug}
        className="k-interactable grow rounded-md text-right text-kami desktop:absolute desktop:-left-4 desktop:bottom-0 desktop:max-w-[20ch] desktop:-translate-x-full"
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
        className="k-interactable grow rounded-md text-left text-kami desktop:absolute desktop:bottom-0 desktop:-right-4 desktop:max-w-[20ch] desktop:translate-x-full"
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
        <p className="k-interactable-simple k-glassy rounded-md bg-katsu px-4 py-1">
          🡲
        </p>
      </Link>
    );
  }
}

function SimpleNextPost(next) {
  if (next !== null) {
    return (
      <Link to={"/posts/" + next.slug} className="text-kami">
        <p className="k-interactable-simple k-glassy rounded-md bg-katsu px-4 py-1">
          🡰
        </p>
      </Link>
    );
  }
}

export default DefaultStyle;
