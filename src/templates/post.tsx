import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";

import Layout from "../components/Layout";
import PhotoMeta from "../components/PhotoMeta";

const BlogPost = ({ pageContext, data }) => {
  const { mdx } = data;
  const image = getImage(mdx.frontmatter.hero_image);
  const { previous, next } = pageContext;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-2">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-300">{mdx.frontmatter.title}</h2>
            <p className="font-mono text-sm text-zinc-600 dark:text-zinc-300">{mdx.frontmatter.date}</p>
          </div>
          <ul className="inline-flex items-center space-x-3">
            {mdx.frontmatter.tags.map((tag) => (
              <li key={tag} className="text-orange-600 hover:text-orange-500">
                <Link to={`/blog/tags/${kebabCase(tag)}/`}>{`#${tag}`}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <GatsbyImage image={image} alt={mdx.frontmatter.hero_image_alt} className="" />
          <PhotoMeta
            alt={mdx.frontmatter.hero_image_alt}
            credit={mdx.frontmatter.hero_image_credit_text}
            url={mdx.frontmatter.hero_image_credit_link}
          />
        </div>

        <div className="post-content text-zinc-900 dark:text-zinc-300 space-y-10">
          <MDXRenderer localImages={mdx.frontmatter.embeddedImagesLocal}>{mdx.body}</MDXRenderer>
        </div>

        <div className="flex justify-center items-center space-x-6 py-12">
          {previous && (
            <Link
              to={`/blog/${previous.frontmatter.slug}`}
              rel="prev"
              className="inline-flex items-center space-x-3 text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
              className="inline-flex items-center space-x-3 text-zinc-900 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 font-medium"
            >
              <span>{next.frontmatter.title}</span>
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
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 1280, placeholder: BLURRED)
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
