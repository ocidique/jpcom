import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";
import classNames from "classnames";

import { isPartiallyCurrent } from "../helpers/utils";

import Layout from "../components/Layout";
import WrapperBlock from "../components/WrapperBlock";
import H1 from "../components/H1";
import SEO from "../components/SEO";

import DotPattern from "../assets/dot_pattern.svg";

const BlogList = ({ pageContext, data }) => {
  const posts = data.allMdx.edges;
  const { currentPage, numPages, tags } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <div className="space-y-6 lg:space-y-12">
        <WrapperBlock>
          <H1>blog</H1>

          <p className="text-xl lg:text-3xl text-zinc-900 dark:text-zinc-300 leading-normal tracking-wider">
            I write sometimes.
          </p>

          <ul className="lg:inline-flex flex-wrap lg:items-center -ml-3">
            <li className="lg:mr-3 my-2">
              <Link
                to="/blog/"
                getProps={isPartiallyCurrent}
                className="font-mono text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2"
              >
                all
              </Link>
            </li>
            {tags.map((tag) => (
              <li key={tag.fieldValue} className="lg:mr-3 my-2">
                <Link
                  to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
                  getProps={isPartiallyCurrent}
                  className="font-mono text-zinc-900 dark:text-zinc-300 hover:underline hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2"
                >{`${tag.fieldValue}`}</Link>
              </li>
            ))}
          </ul>
        </WrapperBlock>

        <div className="relative">
          <div className="absolute right-0 text-zinc-200 dark:text-zinc-700">
            <DotPattern />
            <DotPattern />
            {posts.length > 5 && <DotPattern />}
          </div>
          <div className="absolute left-0 bottom-0 text-zinc-200 dark:text-zinc-700">
            <DotPattern />
            <DotPattern />
            {posts.length > 5 && <DotPattern />}
          </div>

          <WrapperBlock>
            <div className="grid grid-cols-8 lg:grid-cols-12 gap-4">
              {posts.map(({ node }, i) => {
                const { title, slug, hero_image, hero_image_alt } = node.frontmatter;
                const postTitle = title || slug;
                const cardClass = classNames({
                  "after:content group relative after:pointer-events-none after:absolute after:inset-0 after:shadow-highlight":
                    true,
                  "col-span-12 lg:col-span-8 row-span-2": node.frontmatter.pin,
                  "col-span-12 lg:col-span-4 row-span-2": i === 1 && currentPage === 1,
                  "col-span-12 lg:col-span-4": i > 1 || currentPage > 1,
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
                        <path
                          fill="currentColor"
                          d="M32 32C32 14.33 46.33 0 64 0H320C337.7 0 352 14.33 352 32C352 49.67 337.7 64 320 64H290.5L301.9 212.2C338.6 232.1 367.5 265.4 381.4 306.9L382.4 309.9C385.6 319.6 383.1 330.4 377.1 338.7C371.9 347.1 362.3 352 352 352H32C21.71 352 12.05 347.1 6.04 338.7C.0259 330.4-1.611 319.6 1.642 309.9L2.644 306.9C16.47 265.4 45.42 232.1 82.14 212.2L93.54 64H64C46.33 64 32 49.67 32 32zM224 384V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V384H224z"
                        />
                      </svg>
                    )}

                    <div
                      className={"absolute flex flex-col justify-end w-full h-full p-6 z-20 text-zinc-100 space-y-2"}
                    >
                      <h2
                        className={
                          node.frontmatter.pin
                            ? "text-3xl text-shadow font-medium group-hover:underline"
                            : hero_image
                            ? "text-xl text-white text-shadow group-hover:underline"
                            : "text-xl text-black dark:text-white group-hover:underline"
                        }
                      >
                        {postTitle}
                      </h2>

                      <p className={hero_image ? "font-mono text-sm" : "font-mono text-black dark:text-white text-sm"}>
                        {node.frontmatter.date}
                      </p>
                    </div>
                    {hero_image ? (
                      <GatsbyImage
                        image={getImage(hero_image)}
                        alt={hero_image_alt}
                        className="h-full transform brightness-90 transition will-change-auto group-hover:brightness-110"
                      />
                    ) : (
                      <div className="bg-orange-200 dark:bg-zinc-800 h-full w-full min-h-[220px]"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </WrapperBlock>
        </div>

        {numPages > 1 && (
          <WrapperBlock>
            <div className="flex justify-center items-center space-x-4 font-mono">
              <div className="flex justify-end w-56">
                {!isFirst && (
                  <Link
                    to={`/blog/${prevPage}`}
                    rel="prev"
                    className="inline-flex items-center space-x-3 px-2 py-1 text-sm text-zinc-900 dark:text-zinc-300 hover:underline hover:text-orange-500 dark:hover:text-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
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
                  className={`font-mono ${
                    currentPage === i + 1
                      ? "text-orange-600 font-medium underline"
                      : "text-zinc-900 dark:text-zinc-300 hover:underline hover:text-orange-500 dark:hover:text-orange-500"
                  }`}
                >
                  <Link
                    to={`/blog/${i === 0 ? "" : i + 1}`}
                    className="flex items-center justify-center w-8 px-3 py-1"
                  >
                    {i + 1}
                  </Link>
                </div>
              ))}
              <div className="flex justify-start w-56">
                {!isLast && (
                  <Link
                    to={`/blog/${nextPage}`}
                    rel="next"
                    className="inline-flex items-center space-x-3 px-2 py-1 text-sm text-zinc-900 dark:text-zinc-300 hover:underline hover:text-orange-500 dark:hover:text-orange-500"
                  >
                    <span>Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
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
          </WrapperBlock>
        )}
      </div>
    </Layout>
  );
};

export default BlogList;

export const Head = () => <SEO title="blog" description="Juho Pekkala's personal blog" />;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___pin, frontmatter___date], order: [ASC, DESC] }
      filter: { frontmatter: { type: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
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
                gatsbyImageData(width: 1280, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
