import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen relative bg-slate-50 dark:bg-zinc-800 z-30">
      <div className="flex flex-col min-h-screen justify-between">
        <div className="space-y-12">
          <Navigation />
          {children}
        </div>

        {window.location.pathname !== "/" && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
