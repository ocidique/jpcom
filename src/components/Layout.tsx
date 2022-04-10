import React from "react";
import Navigation from "./Navigation";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen relative dark:bg-zinc-800 z-30">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
