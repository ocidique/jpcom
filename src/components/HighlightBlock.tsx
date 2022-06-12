import React from "react";

type Props = {
  children: React.ReactNode;
};

const HighlightBlock: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="max-w-2xl mx-auto border-t border-b border-zinc-300 dark:border-zinc-700 text-center text-2xl lg:text-3xl font-medium py-10 px-12 lg:px-24">
      {children}
      {/* “{children}” */}
    </div>
  );
};

export default HighlightBlock;
