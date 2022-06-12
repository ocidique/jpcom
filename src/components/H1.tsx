import React from "react";

type Props = {
  children: React.ReactNode;
};

const H1: React.FunctionComponent<Props> = ({ children }) => {
  return <h1 className="text-4xl lg:text-6xl font-medium text-zinc-900 dark:text-zinc-300">{children}</h1>;
};

export default H1;
