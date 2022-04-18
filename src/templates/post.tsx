import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";

import Layout from "../components/Layout";

const BlogPost = ({
  data: { mdx }, // this prop will be injected by the GraphQL query below.
}) => {
  console.log(mdx);
  const image = getImage(mdx.frontmatter.hero_image);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-300">{mdx.frontmatter.title}</h2>
          <p className="font-mono text-sm text-zinc-600 dark:text-zinc-300">{mdx.frontmatter.date}</p>
          <ul className="inline-flex items-center space-x-3">
            {mdx.frontmatter.tags.map((tag) => (
              <li key={tag}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{`#${tag}`}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <GatsbyImage image={image} alt={mdx.frontmatter.hero_image_alt} />
          <p className="text-sm text-zinc-700 py-1">
            Photo Credit: <a href={mdx.frontmatter.hero_image_credit_link}>{mdx.frontmatter.hero_image_credit_text}</a>
          </p>
        </div>
        <div className="text-zinc-900 dark:text-zinc-300">
          <MDXRenderer>{mdx.body}</MDXRenderer>
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
            gatsbyImageData
          }
        }
      }
    }
  }
`;
