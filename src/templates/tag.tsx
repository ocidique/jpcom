import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import PostLink from "../components/PostLink";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug, title } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={`/blog/${slug}/`}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
