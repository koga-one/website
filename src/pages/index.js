import * as React from "react";
import { graphql } from "gatsby";
import HomeLayout from "../components/home-layout";
import DayWrapper from "../components/wrapper-day";

const Index = ({ data }) => {
  const latest = data.allMdx.nodes[0];

  return (
    <HomeLayout pageTitle="Home">
      <h1 className="mt-32 text-center font-garamond text-d3 font-black tablet:text-d2 desktop:text-d1">
        koga
        <span className="text-aka">.</span>
        one
      </h1>
      <div className="mx-auto mb-20 flex grow place-items-center justify-center px-4">
        <DayWrapper
          node={latest}
          day={latest.frontmatter.date.split("-")[2]}
          last="true"
        ></DayWrapper>
      </div>
    </HomeLayout>
  );
};

export const query = graphql`
  {
    allMdx(
      limit: 1
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

export default Index;
