import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import GridButton from "../../components/grid-button";
import GridLink from "../../components/grid-link";

const Posts = ({ data }) => {
  previousDate = [];
  currentDate = [];

  return (
    <Layout pageTitle="Posts">
      <Header title="Posts"></Header>
      <div className="k-posts-grid">
        {data.allMdx.nodes.map((node) =>
          CreateButton(node).map((item) => item)
        )}
      </div>
    </Layout>
  );
};

let previousDate = [];
let currentDate = [];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CreateButton(node) {
  currentDate = node.frontmatter.date.split("-");

  if (previousDate.length === 0 || previousDate[0] !== currentDate[0]) {
    // Different year and month
    previousDate = currentDate;
    return [
      <GridButton text={currentDate[0]} styles="k-posts-year" />,
      <GridButton
        text={months[parseInt(currentDate[1]) - 1]}
        styles="k-posts-month"
      />,
      <GridLink
        title={node.frontmatter.title}
        href={node.frontmatter.date}
        proj={node.frontmatter.hero_image}
        day={currentDate[2]}
      />,
    ];
  } else if (previousDate[1] !== currentDate[1]) {
    // Different months
    previousDate = currentDate;
    return [
      <GridButton
        text={months[parseInt(currentDate[1]) - 1]}
        styles="k-posts-month"
      />,
      <GridLink
        title={node.frontmatter.title}
        href={node.frontmatter.date}
        proj={node.frontmatter.hero_image}
        day={currentDate[2]}
      />,
    ];
  } else {
    // Only different days
    previousDate = currentDate;
    return [
      <GridLink
        title={node.frontmatter.title}
        href={node.frontmatter.date}
        proj={node.frontmatter.hero_image}
        day={currentDate[2]}
      />,
    ];
  }
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default Posts;
