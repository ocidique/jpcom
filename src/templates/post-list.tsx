import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";
import classNames from "classnames";

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
        <h2 className="text-6xl font-medium text-zinc-900 dark:text-zinc-300">blog</h2>
        <p className="text-3xl text-zinc-900 dark:text-zinc-300 leading-normal tracking-wider">I write sometimes.</p>

        <ul className="inline-flex items-center space-x-6">
          <li>
            <Link
              to="/blog/"
              getProps={isCurrent}
              className="font-mono text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500"
            >
              all
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link
                to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
                getProps={isPartiallyCurrent}
                className="font-mono text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500"
              >{`${tag.fieldValue}`}</Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map(({ node }, i) => {
            const { title, slug, hero_image, hero_image_alt } = node.frontmatter;
            const postTitle = title || slug;

            const cardClass = classNames({
              "inline-block relative group": true,
              "p-1 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] transition-all col-span-2 row-span-2 box-border":
                node.frontmatter.pin,
              "h-50 col-span-1": i === 2 || i === 3 || i === 5 || i > 6 || currentPage > 1,
              "col-span-1 row-span-3": i === 1 && currentPage === 1,
              "col-span-1 row-span-2": (i === 4 || i == 6) && currentPage === 1,
            });

            return (
              <Link to={`/blog/${slug}`} key={i} className={classNames(cardClass)}>
                {node.frontmatter.pin && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="absolute text-white w-6 h-6 z-30 left-4 top-5"
                    stroke="currentColor"
                  >
                    {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
                    <path
                      fill="currentColor"
                      d="M32 32C32 14.33 46.33 0 64 0H320C337.7 0 352 14.33 352 32C352 49.67 337.7 64 320 64H290.5L301.9 212.2C338.6 232.1 367.5 265.4 381.4 306.9L382.4 309.9C385.6 319.6 383.1 330.4 377.1 338.7C371.9 347.1 362.3 352 352 352H32C21.71 352 12.05 347.1 6.04 338.7C.0259 330.4-1.611 319.6 1.642 309.9L2.644 306.9C16.47 265.4 45.42 232.1 82.14 212.2L93.54 64H64C46.33 64 32 49.67 32 32zM224 384V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V384H224z"
                    />
                  </svg>
                )}

                <div
                  className={`absolute flex z-10 bg-black opacity-25 group-hover:opacity-0 transform transition-opacity w-full h-full ${
                    node.frontmatter.pin && "-m-1"
                  }`}
                ></div>
                <div
                  className={`absolute flex flex-col justify-end w-full h-full p-5 z-20 text-zinc-100 space-y-1 ${
                    node.frontmatter.pin && "-m-1"
                  }`}
                >
                  <h3 className="text-lg text-shadow-xl text-zinc-100">{postTitle}</h3>

                  <p className="font-mono text-shadow-xl text-sm">{node.frontmatter.date}</p>
                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                  {/* <ul className="inline-flex items-center space-x-3">
                    {tags.map((tag) => (
                      <li key={tag}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{`#${tag}`}</Link>
                      </li>
                    ))}
                  </ul>*/}
                </div>
                <GatsbyImage image={getImage(hero_image)} alt={hero_image_alt} className="h-full" />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="flex justify-end w-56">
            {!isFirst && (
              <Link
                to={`/blog/${prevPage}`}
                rel="prev"
                className="inline-flex items-center space-x-3 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:text-zinc-900"
              >
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
            <div
              key={`pagination-number-${i + 1}`}
              className={`${
                currentPage === i + 1
                  ? "bg-orange-600 text-white font-medium"
                  : "text-zinc-900 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:text-zinc-900"
              }`}
            >
              <Link to={`/blog/${i === 0 ? "" : i + 1}`} className="flex items-center justify-center w-8 px-3 py-1">
                {i + 1}
              </Link>
            </div>
          ))}
          <div className="flex justify-start w-56">
            {!isLast && (
              <Link
                to={`/blog/${nextPage}`}
                rel="next"
                className="inline-flex items-center space-x-3 px-2 py-1 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:text-zinc-900"
              >
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
    allMdx(sort: { fields: [frontmatter___pin, frontmatter___date], order: [ASC, DESC] }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            title
            tags
            pin
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
              childImageSharp {
                gatsbyImageData(width: 768, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
