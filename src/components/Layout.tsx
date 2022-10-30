import React from "react";
import { MDXProvider } from "@mdx-js/react";

import WrapperBlock from "./WrapperBlock";
import ContentBlock from "./ContentBlock";
import HighlightBlock from "./HighlightBlock";
import LogoBlock from "./LogoBlock";
import PhotoMeta from "./PhotoMeta";
import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};

const shortcodes = {
  WrapperBlock,
  ContentBlock,
  HighlightBlock,
  LogoBlock,
  PhotoMeta,
};

const Layout: React.FC<Props> = ({ children }) => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <MDXProvider components={shortcodes}>
      <div className="min-h-screen scroll-smooth relative bg-zinc-50 dark:bg-zinc-900 z-30">
        <div className="flex flex-col min-h-screen justify-between">
          <div className="relative">
            <Navigation />
            <div className="px-4 lg:px-0">{children}</div>
          </div>
          {pathname !== "/" && <Footer />}
        </div>
      </div>
    </MDXProvider>
  );
};

export default Layout;
