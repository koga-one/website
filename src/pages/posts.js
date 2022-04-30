import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Posts = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Posts;
