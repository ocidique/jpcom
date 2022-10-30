import type { GatsbyNode } from "gatsby";

const path = require("path");
const kebabCase = require("lodash.kebabcase");

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("src/templates/post.tsx");
  const tagTemplate = path.resolve("src/templates/tag.tsx");

  const result: {
    errors?: any;
    data?: {
      allMdx: {
        edges: {
          node: {
            id: string;
            excerpt: string;
            frontmatter: {
              date: Date;
              slug: string;
              title: string;
              type: string;
              tags: [string];
            };
          };
        };
      };
      tagsGroup: {
        allMdx: {
          group: {
            fieldValue: string;
          };
        };
      };
    };
  } = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              type
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { allMdx, tagsGroup } = result.data;

  const posts = allMdx.edges;
  const tags = tagsGroup.group;

  // Create paginated posts pages
  const postsPerPage = 9;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/post-list.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        tags,
      },
    });
  });

  // Create post detail pages
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/blog/${post.node.frontmatter.slug}/`,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
        previous,
        next,
      },
    });
  });

  // Create tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/blog/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
        tags,
      },
    });
  });
};
