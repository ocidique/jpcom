import React from "react";

type Props = {
  children: React.ReactNode;
};

const WrapperBlock: React.FunctionComponent<Props> = ({ children }) => {
  return <div className="max-w-7xl mx-auto space-y-12">{children}</div>;
};

export default WrapperBlock;
