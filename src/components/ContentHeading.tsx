import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentHeading: React.FunctionComponent<Props> = ({ children }) => {
  return <h2 className="max-w-3xl mx-auto text-xl font-semibold">{children}</h2>;
};

export default ContentHeading;
