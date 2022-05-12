import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Form from "../contact";
import PostDisqus from "../modules/post-disqus";
import PostWrapper from "../modules/post-wrapper";
import Header from "../header";
import PostTop from "../modules/post-top";
import PostInfo from "../modules/post-info";
import PostTOC from "../modules/post-toc";

const DefaultStyle = ({ data, index }) => {
  const mdx = data.mdx;
  const edge = data.allMdx.edges[index];

  return (
    <div>
      <PostTop />
      <Header title={mdx.frontmatter.title} />
      <PostWrapper previous={edge.previous} next={edge.next}>
        <PostInfo timeToRead={mdx.timeToRead} words={mdx.wordCount.words} />
        <PostTOC data={mdx} />
        <article className="k-prose-big k-wrapper">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        <PostDisqus
          id={mdx.id}
          pathname={window.location.pathname}
          title={mdx.frontmatter.title}
        />
        <Form />
      </PostWrapper>
    </div>
  );
};

export default DefaultStyle;
