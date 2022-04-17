import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";

const BlogPost = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-200">{data.mdx.frontmatter.title}</h2>
          <p className="font-mono text-sm text-zinc-600 dark:text-zinc-300">{data.mdx.frontmatter.date}</p>
        </div>
        <div className="text-zinc-900 dark:text-zinc-200">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default BlogPost;
