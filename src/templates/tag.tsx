import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";

import { isCurrent, isPartiallyCurrent } from "../helpers/utils";

import Layout from "../components/Layout";
import WrapperBlock from "../components/WrapperBlock";
import H1 from "../components/H1";
import SEO from "../components/SEO";

const Tags = ({ pageContext, data }) => {
  const { tag, tags } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const posts = edges;

  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  // TODO: make this view more like an archive or create separate view for that?

  return (
    <Layout>
      <WrapperBlock>
        <H1>blog</H1>
        <p className="text-xl lg:text-3xl text-zinc-900 dark:text-zinc-300 leading-normal tracking-wider">
          {tagHeader}
        </p>

        <ul className="lg:inline-flex flex-wrap lg:items-center -ml-3">
          <li className="lg:mr-3 my-2">
            <Link
              to="/blog/"
              getProps={isCurrent}
              className="font-mono text-zinc-900 dark:text-zinc-300 group-hover:underline hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2"
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

        <div className="grid grid-cols-12 gap-4">
          {posts.map(({ node }) => {
            const { title, slug, hero_image, hero_image_alt } = node.frontmatter;
            const postTitle = title || slug;
            return (
              <Link
                to={`/blog/${slug}`}
                key={slug}
                className="col-span-12 lg:col-span-4 after:content group relative after:pointer-events-none after:absolute after:inset-0 after:shadow-highlight"
              >
                <div className={"absolute flex flex-col justify-end w-full h-full p-4 z-20 text-zinc-100 space-y-2"}>
                  <h2
                    className={
                      hero_image
                        ? "text-xl text-white group-hover:underline"
                        : "text-xl text-black dark:text-white group-hover:underline"
                    }
                  >
                    {postTitle}
                  </h2>
                  <p className={hero_image ? "font-mono text-sm" : "font-mono text-black dark:text-zinc-100 text-sm"}>
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
                  <div className="bg-zinc-300 dark:bg-zinc-800 h-full w-full min-h-[220px]"></div>
                )}
              </Link>
            );
          })}
        </div>
      </WrapperBlock>
    </Layout>
  );
};

export default Tags;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMdx;

  const tagHeader = `blog posts tagged with "${tag}"`;
  return <SEO title={tagHeader} description="Juho Pekkala's personal blog" />;
};

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
