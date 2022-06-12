import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentBlock: React.FunctionComponent<Props> = ({ children }) => {
  return <div className="max-w-5xl mx-auto">{children}</div>;
};

export default ContentBlock;
