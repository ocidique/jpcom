import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";

import { isCurrent, isPartiallyCurrent } from "../helpers/utils";

import Layout from "../components/Layout";
import WrapperBlock from "../components/WrapperBlock";
import H1 from "../components/H1";

const Tags = ({ pageContext, data }) => {
  const { tag, tags } = pageContext;
  const { edges, totalCount } = data.allMdx;

  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <WrapperBlock>
        <H1>blog</H1>
        <p className="text-xl lg:text-3xl text-zinc-900 dark:text-zinc-300 leading-normal tracking-wider">
          {tagHeader}
        </p>

        <ul className="inline-flex items-center space-x-3 -ml-3">
          <li>
            <Link
              to="/blog/"
              getProps={isCurrent}
              className="font-mono text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2"
            >
              all
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link
                to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
                getProps={isPartiallyCurrent}
                className="font-mono text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2"
              >{`${tag.fieldValue}`}</Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
          {edges.map(({ node }) => {
            const { title, slug, hero_image, hero_image_alt } = node.frontmatter;
            const postTitle = title || slug;
            return (
              <Link
                to={`/blog/${slug}`}
                key={slug}
                className="inline-block rounded-lg overflow-hidden shadow-md shadow-zinc-400 dark:shadow-black relative group col-span-4 row-span-1"
                style={{ minHeight: "300px" }}
              >
                <div
                  className={
                    hero_image
                      ? "absolute flex z-10 bg-black opacity-30 group-hover:opacity-10 transform transition-opacity w-full h-full"
                      : "absolute flex z-10 bg-gradient-to-tr from-amber-400 via-orange-300 to-orange-500 dark:hover:text-transparent dark:hover:bg-clip-text dark:bg-gradient-to-tr dark:from-orange-600 dark:via-orange-400 dark:to-amber-300 opacity-80 group-hover:opacity-100 transform transition-opacity w-full h-full"
                  }
                ></div>
                <div
                  className={
                    hero_image
                      ? "absolute flex flex-col justify-end w-full h-full p-4 z-20 text-zinc-100 space-y-1"
                      : "relative flex flex-col justify-end w-full h-full p-4 z-20 text-zinc-100 space-y-1"
                  }
                >
                  <h3 className={hero_image ? "text-xl text-white" : "text-xl text-black dark:text-white"}>
                    {postTitle}
                  </h3>
                  <p className={hero_image ? "font-mono text-sm" : "font-mono text-black dark:text-zinc-100 text-sm"}>
                    {node.frontmatter.date}
                  </p>
                </div>
                {hero_image && <GatsbyImage image={getImage(hero_image)} alt={hero_image_alt} className="h-full" />}
              </Link>
            );
          })}
        </div>
        {/* <Link to="/tags">All tags</Link> */}
      </WrapperBlock>
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
