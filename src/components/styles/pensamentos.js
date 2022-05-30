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
        <div className="pb-4 text-center opacity-50">
          <i>
            <b>scroll down for translation.</b> volume might be loud.
          </i>
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
        <article className="k-prose k-wrapper text-center font-fira">
          <div className="py-2">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </article>
      </PostWrapper>
    </Layout>
  );
};

export default PensamentosStyle;
