import React from "react";

import { useStaticQuery, graphql } from "gatsby";

type Props = {
  title?: string;
  description?: string;
  lang?: string;
  children?: React.ReactNode;
};

const SEO: React.FunctionComponent<Props> = ({ title, description, lang, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const siteTitle = defaultTitle && title ? `${defaultTitle} - ${title}` : defaultTitle;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.social?.twitter || ``} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};

export default SEO;
