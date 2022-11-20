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
              className="font-mono text-zinc-900 dark:text-zinc-300 group-hover:underline :text-orange-500 dark:hover:text-orange-500 px-3 py-2"
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

        <div className="grid grid-cols-12 gap-6">
          {posts.map(({ node }) => {
            const { title, slug, hero_image, hero_image_alt } = node.frontmatter;
            const postTitle = title || slug;
            return (
              <Link
                to={`/blog/${slug}`}
                key={slug}
                className="inline-block rounded-lg overflow-hidden relative group col-span-12 md:col-span-6 lg:col-span-4 row-span-1 p-1 bg-zinc-800 dark:bg-zinc-300 min-h-[220px]"
              >
                <div
                  className={
                    hero_image
                      ? "absolute flex z-10 bg-zinc-900 opacity-20 group-hover:opacity-0 transform transition-opacity w-full h-full -m-1"
                      : "absolute flex z-10 bg-zinc-900 opacity-5 dark:opacity-30 group-hover:opacity-0 transform transition-opacity w-full h-full -m-1"
                  }
                ></div>
                <div className={"absolute flex flex-col justify-end w-full h-full p-4 z-20 text-zinc-100 space-y-2"}>
                  <h3
                    className={
                      hero_image
                        ? "text-xl text-white group-hover:underline"
                        : "text-xl text-black dark:text-white group-hover:underline"
                    }
                  >
                    {postTitle}
                  </h3>
                  <p className={hero_image ? "font-mono text-sm" : "font-mono text-black dark:text-zinc-100 text-sm"}>
                    {node.frontmatter.date}
                  </p>
                </div>
                {hero_image ? (
                  <GatsbyImage image={getImage(hero_image)} alt={hero_image_alt} className="h-full rounded-md" />
                ) : (
                  <div className="bg-white dark:bg-zinc-900 h-full w-full rounded-md min-h-[220px]"></div>
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
