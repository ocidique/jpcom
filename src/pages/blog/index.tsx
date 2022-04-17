import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import PostLink from "../../components/PostLink";

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-12">
          <div className="space-y-4 text-zinc-900 dark:text-zinc-200">
            <h1 className="text-2xl font-medium">I write sometimes</h1>
            <p>
              I intend write large variety of things. Blogs can be from substance content focusing around IT, design
              and worklife or more relaxed lifestyle writings.
            </p>
          </div>
          {Posts}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
