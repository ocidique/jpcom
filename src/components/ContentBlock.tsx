import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentBlock: React.FunctionComponent<Props> = ({ children }) => {
  return <div className="max-w-3xl mx-auto text-lg space-y-3">{children}</div>;
};

export default ContentBlock;
