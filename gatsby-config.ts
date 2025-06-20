import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `jpcom`,
    author: {
      name: `Juho Pekkala`,
      summary: `Creative Software Developer and Designer`,
    },
    siteUrl: `https://www.juhopekkala.com`,
    description: `A software development -oriented blog with a touch of personal life; creativity, photography, nature, adventures of any sort, metal music, and sports`,
    social: {
      twitter: `ocidique`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-VYV8KW6R4Q", // GA4 measurement ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-image",
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.juhopekkala.com",
        sitemap: "https://www.juhopekkala.com/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};

export default config;
