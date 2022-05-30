import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostWrapper from "../modules/post-wrapper";
import Header from "../header";
import PostTop from "../modules/post-top";
import Layout from "../layout";

const PensamentosStyle = ({ data, index }) => {
  const mdx = data.mdx;
  const edge = data.allMdx.edges[index];

  return (
    <Layout
      pageTitle={mdx.frontmatter.title}
      className="bg-[#eef4ff] dark:bg-[#010712]"
    >
      <PostTop />
      <Header title={mdx.frontmatter.title} />
      <PostWrapper previous={edge.previous} next={edge.next}>
        <div className="pb-4 text-center">
          <i>volume might be loud</i>
        </div>
        <iframe
          className="rounded-lg"
          src={mdx.frontmatter.extra}
          width="100%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <article className="k-prose k-wrapper text-center">
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <br />
        </article>
      </PostWrapper>
    </Layout>
  );
};

export default PensamentosStyle;
