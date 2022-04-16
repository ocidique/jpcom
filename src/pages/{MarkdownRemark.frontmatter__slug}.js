import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
        <h2 className="text-2xl font-medium text-zinc-900">{frontmatter.title}</h2>
        <p className="font-mono text-sm text-zinc-600">{frontmatter.date}</p>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`