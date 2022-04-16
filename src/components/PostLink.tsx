import React from "react";
import CTA from "./CTA";

const PostLink = ({ post }) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <h2 className="font-medium text-lg text-zinc-900">{post.frontmatter.title}</h2>
      <p className="font-mono text-sm text-zinc-600">{post.frontmatter.date}</p>
    </div>
    <CTA to={post.frontmatter.slug}>Read this post</CTA>
  </div>
);

export default PostLink;
