import * as React from "react";
import { graphql } from "gatsby";
import Page from "../components/page";
import Layout from "../components/layout";

const About = ({ data }) => {
  const mdx = data.allMdx.nodes[0];

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <Page data={mdx} />
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
