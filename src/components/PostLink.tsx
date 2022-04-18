import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import CTA from "./CTA";

const PostLink = ({ post }) => {
  const { title, date, tags, slug } = post.frontmatter;
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="font-medium text-lg text-zinc-900 dark:text-zinc-300">{title}</h2>
        <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{date}</p>

        <ul className="inline-flex items-center space-x-3">
          {tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{`#${tag}`}</Link>
            </li>
          ))}
        </ul>
      </div>
      <CTA to={slug}>Read this post</CTA>
    </div>
  );
};

export default PostLink;
