import React from "react";

type Props = {
  children: React.ReactNode;
};

const H2: React.FunctionComponent<Props> = ({ children }) => {
  return <h2 className="text-4xl lg:text-6xl font-medium text-zinc-900 dark:text-zinc-300">{children}</h2>;
};

export default H2;
