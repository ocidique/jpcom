import React from "react";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import WrapperBlock from "../components/WrapperBlock";
import ContentBlock from "../components/ContentBlock";
import HighlightBlock from "../components/HighlightBlock";
import LogoBlock from "../components/LogoBlock";
import PhotoMeta from "../components/PhotoMeta";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const shortcodes = {
  WrapperBlock,
  ContentBlock,
  HighlightBlock,
  LogoBlock,
  PhotoMeta,
};

const BlogPost = ({ pageContext, data }) => {
  const { mdx } = data;
  const displayHeroImage = mdx.frontmatter.display_hero_image;
  const image = displayHeroImage && getImage(mdx.frontmatter.hero_image);
  const { previous, next } = pageContext;

  return (
    <MDXProvider components={shortcodes}>
      <div className="min-h-screen scroll-smooth relative bg-zinc-50 dark:bg-zinc-900 z-30">
        <div className="flex flex-col min-h-screen justify-between">
          <div className="relative">
            {image ? <Navigation absolute isPostPage /> : <Navigation />}
            <div className="space-y-12 -mt-12">
              <div className={image ? "flex flex-col justify-end absolute w-full h-screen z-10" : "w-full"}>
                <div className="max-w-5xl mx-auto space-y-2 mt-24 mb-12">
                  <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <h1
                      className={
                        image
                          ? "text-4xl lg:text-6xl font-medium text-zinc-100 text-shadow-xl tracking-tight"
                          : "text-4xl lg:text-6xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight"
                      }
                    >
                      {mdx.frontmatter.title}
                      {mdx.frontmatter.display_hero_image}
                    </h1>
                    <p
                      className={
                        image ? "font-mono text-zinc-100 text-shadow-xl" : "font-mono text-zinc-900 dark:text-zinc-100"
                      }
                    >
                      {mdx.frontmatter.date}
                    </p>
                    {image && (
                      <div className="flex flex-inline justify-center hover:text-red group">
                        <a href="#content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-zinc-100 group-hover:text-orange-600 filter-shadow"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {image && (
                <div>
                  <GatsbyImage image={image} alt={mdx.frontmatter.hero_image_alt} className="w-full h-screen" />
                  {mdx.frontmatter.hero_image_credit_text && (
                    <PhotoMeta
                      alt={mdx.frontmatter.hero_image_alt}
                      credit={mdx.frontmatter.hero_image_credit_text}
                      url={mdx.frontmatter.hero_image_credit_link}
                    />
                  )}
                </div>
              )}

              <div id="content" className="post-content text-zinc-900 dark:text-zinc-300 space-y-10 -mt-12 px-4">
                <MDXRenderer localImages={mdx.frontmatter.embeddedImagesLocal}>{mdx.body}</MDXRenderer>
              </div>

              <div className="px-4">
                <LogoBlock />
              </div>

              <div className="px-4">
                <WrapperBlock>
                  <div className="flex justify-between items-center space-x-6 py-6">
                    {previous && (
                      <Link
                        to={`/blog/${previous.frontmatter.slug}`}
                        rel="prev"
                        className="inline-flex w-full items-center justify-start space-x-3 font-medium text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{previous.frontmatter.title}</span>
                      </Link>
                    )}

                    {next && (
                      <Link
                        to={`/blog/${next.frontmatter.slug}`}
                        rel="next"
                        className="inline-flex w-full items-center justify-end space-x-3 font-medium text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500"
                      >
                        <span>{next.frontmatter.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0"
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
                </WrapperBlock>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </MDXProvider>
  );
};

export default BlogPost;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = ({ pageContext, data }) => {
  const { mdx } = data;
  return <SEO title={mdx.frontmatter.title} description="Juho Pekkala's personal blog" />;
};

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        display_hero_image
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 1920, placeholder: BLURRED)
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
