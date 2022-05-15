import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const ProjectsPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  console.log(data);
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-6xl font-medium text-zinc-900 dark:text-zinc-300">projects</h2>

        <p className="text-3xl text-zinc-900 dark:text-zinc-300 leading-normal tracking-wider">
          I do stuff sometimes.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map(({ node }) => {
            const { title, slug, tags, hero_image, hero_image_alt } = node.frontmatter;
            const postTitle = title || slug;
            return (
              <Link
                to={`/projects/${slug}`}
                key={slug}
                // className={
                //   node.frontmatter.pin
                //     ? "inline-block relative group transform hover:scale-[1.01] p-1 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] transition-all h-60 col-span-2 box-border"
                //     : "inline-block relative group transform hover:scale-[1.01] p-1 bg-gradient-to-r from-[#ff6a00] via-[#fff45f] to-[#ff82f5] transition-all h-60 col-span-1"
                // }
                className={
                  node.frontmatter.pin
                    ? "inline-block relative group transform hover:scale-[1.01] p-1 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] transition-all h-60 col-span-2 box-border"
                    : "inline-block relative group transform hover:scale-[1.01] transition-all h-60 col-span-1"
                }
              >
                {node.frontmatter.pin && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="absolute text-white w-6 h-6 z-30 left-3 top-4"
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
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query projectsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___pin, frontmatter___date], order: [ASC, DESC] }
      filter: { frontmatter: { type: { eq: "project" } } }
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
                gatsbyImageData(width: 768, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
