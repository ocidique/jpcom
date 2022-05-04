import React from "react";

type Props = {
  alt: string;
  credit?: string;
  url?: string;
};

const PhotoMeta: React.FunctionComponent<Props> = ({ alt, credit, url }) => {
  return (
    <p className="text-sm text-zinc-600 dark:text-zinc-400 pl-1 py-1">
      {alt}. Photo:{" "}
      {url ? (
        <a href={url} target="_blank" className=" hover:text-orange-500 dark:hover:text-orange-500">
          {credit}
        </a>
      ) : (
        <span>{credit}</span>
      )}
    </p>
  );
};

export default PhotoMeta;
