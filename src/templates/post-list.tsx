import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

const BlogList = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const { currentPage, numPages } = pageContext;

  console.log(pageContext);

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-12">
          <div className="space-y-4 text-zinc-900 dark:text-zinc-300">
            <h1 className="text-3xl font-semibold">Blog</h1>
            <p>
              I write large variety of things. Blogs can be from substance content focusing around IT, design and
              worklife or more relaxed lifestyle writings.
            </p>
          </div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.frontmatter.slug;
            return (
              <div key={node.frontmatter.slug}>
                <h3>
                  <Link to={node.frontmatter.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            );
          })}
          <ul className="flex items-center space-x-6">
            {!isFirst && (
              <Link to={`/blog/${prevPage}`} rel="prev" className="inline-flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span>Previous Page</span>
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                className={`rounded px-2 py-1 ${currentPage === i + 1 ? "bg-orange-600 text-white font-medium" : ""}`}
              >
                <Link to={`/blog/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
              </li>
            ))}
            {!isLast && (
              <Link to={`/blog/${nextPage}`} rel="next" className="inline-flex items-center space-x-3">
                <span>Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`;
