import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import loadable from "@loadable/component";

const Post = ({ data }) => {
  const Component = loadable(() =>
    import("../../components/styles/" + data.mdx.slug.split("/").shift())
  );

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Component data={data} index={GetIndex(data.mdx.id, data.allMdx.edges)} />
    </Layout>
  );
};

function GetIndex(id, edges) {
  for (let i = 0; i < edges.length; i++) {
    const element = edges[i];

    if (element.node.id === id) return i;
  }
}

export const query = graphql`
  query ($id: String) {
    allMdx(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        next {
          frontmatter {
            date
            title
          }
        }
        previous {
          frontmatter {
            date
            title
          }
        }
        node {
          id
        }
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
      tableOfContents
      slug
      body
      wordCount {
        words
      }
      id
    }
  }
`;

export default Post;
