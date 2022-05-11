import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Disqus } from "gatsby-plugin-disqus";

const DisqusTemplate = ({ pathname, id, title }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  let disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl + pathname}`,
    identifier: id,
    title: title,
  };
  return (
    <div>
      <Disqus config={disqusConfig} />
    </div>
  );
};

export default DisqusTemplate;
