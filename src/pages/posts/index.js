import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import YearWrapper from "../../components/wrapper-year";
import MonthWrapper from "../../components/wrapper-month";
import DayWrapper from "../../components/wrapper-day";
import GridWrapper from "../../components/wrapper-grid";

const Posts = ({ data }) => {
  currentIndex = 0;

  return (
    <Layout pageTitle="Posts">
      <Header title="Posts"></Header>
      <GridWrapper>
        {YearGrid(data.allMdx.nodes).map((item) => item)}
      </GridWrapper>
    </Layout>
  );
};

let currentIndex = 0;

function YearGrid(nodes) {
  let listOfYears = [];

  // Loop through all years
  while (currentIndex < nodes.length) {
    let chosenYear = nodes[currentIndex].frontmatter.date.split("-")[0];

    listOfYears.push(
      <YearWrapper year={chosenYear}>
        {MonthGrid(nodes, chosenYear).map((item) => item)}
      </YearWrapper>
    );
  }

  return listOfYears;
}

function MonthGrid(nodes, chosenYear) {
  let listOfMonths = [];

  // While the month is still inside the chosen year
  while (
    currentIndex < nodes.length &&
    nodes[currentIndex].frontmatter.date.split("-")[0] === chosenYear
  ) {
    let chosenMonth = nodes[currentIndex].frontmatter.date.split("-")[1];

    listOfMonths.push(
      <MonthWrapper month={chosenMonth}>
        {DayGrid(nodes, chosenMonth).map((item) => item)}
      </MonthWrapper>
    );
  }

  return listOfMonths;
}

function DayGrid(nodes, chosenMonth) {
  let listOfDays = [];

  // While the day is still inside the chosen month
  while (
    currentIndex < nodes.length &&
    nodes[currentIndex].frontmatter.date.split("-")[1] === chosenMonth
  ) {
    listOfDays.push(
      <DayWrapper
        last={currentIndex === 0}
        day={nodes[currentIndex].frontmatter.date.split("-")[2]}
        node={nodes[currentIndex]}
      />
    );
    currentIndex++;
  }

  return listOfDays;
}

export const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      nodes {
        frontmatter {
          date
          title
          extra
        }
        id
        slug
      }
    }
  }
`;

export default Posts;
