import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";

import { isCurrent, isPartiallyCurrent } from "../helpers/utils";

import Layout from "../components/Layout";

const BlogList = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const { currentPage, numPages, tags } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-2">
          <div className="space-y-4 text-zinc-900 dark:text-zinc-300">
            <h2 className="text-2xl font-semibold">Blog</h2>
            <p>
              I write large variety of things. Blogs can be from substance content focusing around IT, design and
              worklife or more relaxed lifestyle writings.
            </p>
          </div>
        </div>

        <ul className="inline-flex items-center space-x-6">
          <li>
            <Link
              to="/blog/"
              getProps={isCurrent}
              className="font-mono text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 rounded-md text-2sm"
            >
              all
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link
                to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
                getProps={isPartiallyCurrent}
                className="font-mono text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 rounded-md text-2sm"
              >{`${tag.fieldValue}`}</Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map(({ node }) => {
            const { title, slug, tags, hero_image, hero_image_alt } = node.frontmatter;
            const postTitle = title || slug;
            return (
              <Link
                to={slug}
                key={slug}
                className="inline-block relative group transform hover:scale-[1.01] transition-all h-56 shadow-lg"
              >
                <div className="absolute flex z-10 bg-black opacity-20 group-hover:opacity-10 transform transition-opacity w-full h-full rounded-xl"></div>

                <div className="absolute flex flex-col justify-end w-full h-full p-4 z-20 text-zinc-100 space-y-1">
                  <h3 className="text-lg text-zinc-100">{postTitle}</h3>

                  <p className="font-mono text-xs">{node.frontmatter.date}</p>
                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                  {/* <ul className="inline-flex items-center space-x-3">
                    {tags.map((tag) => (
                      <li key={tag}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{`#${tag}`}</Link>
                      </li>
                    ))}
                  </ul>*/}
                </div>
                <GatsbyImage image={getImage(hero_image)} alt={hero_image_alt} className="h-full rounded-xl" />
              </Link>
            );
          })}
        </div>
        <ul className="flex justify-center items-center space-x-6 text-zinc-900 dark:text-zinc-300">
          <div className="flex justify-end w-56">
            {!isFirst && (
              <Link to={`/blog/${prevPage}`} rel="prev" className="inline-flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Previous Page</span>
              </Link>
            )}
          </div>
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              className={`rounded px-2 py-1 ${currentPage === i + 1 ? "bg-orange-600 text-white font-medium" : ""}`}
            >
              <Link to={`/blog/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
            </li>
          ))}
          <div className="flex justify-start w-56">
            {!isLast && (
              <Link to={`/blog/${nextPage}`} rel="next" className="inline-flex items-center space-x-3">
                <span>Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </div>
        </ul>
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
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
