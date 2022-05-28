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
    <Layout pageTitle={mdx.frontmatter.title} className="dark:bg-[#010712]">
      <PostTop />
      <Header title={mdx.frontmatter.title} />
      <PostWrapper previous={edge.previous} next={edge.next}>
        <article className="k-prose k-wrapper text-center">
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <br />
        </article>
        <iframe
          className="rounded-lg"
          src={mdx.frontmatter.extra}
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <div className="k-wrapper text-center">sorry if the volume is loud</div>
      </PostWrapper>
    </Layout>
  );
};

export default PensamentosStyle;
