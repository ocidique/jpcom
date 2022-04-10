import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen relative dark:bg-zinc-800 z-30">
      <div className="max-w-5xl mx-auto flex flex-col min-h-screen justify-between">
        <div className="space-y-12">
          <Navigation />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
