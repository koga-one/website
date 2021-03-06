import * as React from "react";
import { graphql } from "gatsby";
import loadable from "@loadable/component";

const Post = ({ data }) => {
  const Component = loadable(() =>
    import("../../components/styles/" + data.mdx.slug.split("/").shift())
  );

  return (
    <Component data={data} index={GetIndex(data.mdx.id, data.allMdx.edges)} />
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
    allMdx(
      sort: { order: ASC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        next {
          frontmatter {
            title
          }
          slug
        }
        previous {
          frontmatter {
            title
          }
          slug
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
        extra
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
