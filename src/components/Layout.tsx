import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="min-h-screen relative dark:bg-zinc-800 z-30">{children}</div>;
};

export default Layout;
