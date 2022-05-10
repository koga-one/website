import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";

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
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
    </div>
  );
};

export default DisqusTemplate;
