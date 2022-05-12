import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Form from "./contact";
import PostTop from "./modules/post-top";
import Header from "./header";
import PostInfo from "./modules/post-info";
import PageWrapper from "./modules/page-wrapper";
import PostTOC from "./modules/post-toc";

const Page = ({ data }) => {
  return (
    <div>
      <PostTop />
      <Header title={data.frontmatter.title} />
      <PageWrapper>
        <PostInfo timeToRead={data.timeToRead} words={data.wordCount.words} />
        <PostTOC data={data} />
        <article className="k-prose-big k-wrapper">
          <MDXRenderer>{data.body}</MDXRenderer>
        </article>
        <Form></Form>
      </PageWrapper>
    </div>
  );
};

export default Page;
