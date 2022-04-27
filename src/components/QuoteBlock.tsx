import React from "react";

type Props = {
  children: React.ReactNode;
};

const QuoteBlock: React.FunctionComponent<Props> = ({ children }) => {
  return <div className="max-w-3xl mx-auto text-lg pl-6 py-1 border-l-4 border-orange-600">{children}</div>;
};

export default QuoteBlock;
