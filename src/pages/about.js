import * as React from "react";
import { graphql } from "gatsby";
import Page from "../components/page";
import Layout from "../components/layout";

const About = ({ data }) => {
  const mdx = data.allMdx.nodes[0];

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <Page
        data={mdx}
        styles="prose max-w-none rounded-lg bg-katsu bg-opacity-5 px-4 py-8 font-inter text-katsu prose-headings:font-garamond prose-headings:text-katsu prose-p:font-inter prose-p:text-katsu prose-a:text-aka hover:prose-a:no-underline prose-strong:text-katsu prose-code:font-fira prose-code:text-katsu prose-pre:bg-katsu prose-pre:bg-opacity-10 prose-hr:opacity-20 dark:prose-invert prose-lg tablet:prose-xl desktop:prose-2xl desktop:p-8"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(filter: { slug: { eq: "about" } }) {
      nodes {
        id
        frontmatter {
          title
        }
        tableOfContents
        timeToRead
        wordCount {
          words
        }
        body
      }
    }
  }
`;

export default About;
