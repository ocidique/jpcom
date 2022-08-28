import React from "react";

type Props = {
  alt: string;
  credit?: string;
  url?: string;
};

const PhotoMeta: React.FunctionComponent<Props> = ({ alt, credit, url }) => {
  return (
    <div className="max-w-2xl mx-auto text-sm text-zinc-600 dark:text-zinc-400 py-1">
      {alt}. Photo:{" "}
      {url ? (
        <a href={url} target="_blank" className=" hover:text-orange-500 dark:hover:text-orange-500">
          {credit}
        </a>
      ) : (
        <span>{credit}</span>
      )}
    </div>
  );
};

export default PhotoMeta;
