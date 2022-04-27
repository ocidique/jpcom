import React from "react";

type Props = {
  children: React.ReactNode;
};

const StartBlock: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto text-lg first-letter:text-6xl first-letter:font-bold first-letter:mr-2">
      {children}
    </div>
  );
};

export default StartBlock;
