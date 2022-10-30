import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Juho Pekkala's Website`,
    author: {
      name: `Juho Pekkala`,
      summary: `Creative Software Developer and Designer`,
    },
    siteUrl: `https://www.juhopekkala.com`,
    description: `From the website you can find my professional info as well as my blog. I intend to share things in a relaxed manner. I love creativity, DIY projects and adventures so I might share bits of those as well!`,
    social: {
      twitter: `ocidique`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-47396108-1",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icon.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        filename: "./gatsby-graphql.ts",
        documentPaths: ["./src/**/*.{ts,tsx}", "./node_modules/gatsby-*/**/*.js", "./gatsby-node.ts"],
      },
    },
  ],
};

export default config;
