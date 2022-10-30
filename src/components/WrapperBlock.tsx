import React from "react";

type Props = {
  children: React.ReactNode;
};

const WrapperBlock: React.FunctionComponent<Props> = ({ children }) => {
  return <div className="max-w-5xl mx-auto space-y-6 lg:space-y-12">{children}</div>;
};

export default WrapperBlock;
