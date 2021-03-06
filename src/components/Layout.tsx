import React from "react";
import { MDXProvider } from "@mdx-js/react";

import WrapperBlock from "./WrapperBlock";
import ContentHeading from "./ContentHeading";
import StartBlock from "./StartBlock";
import ContentBlock from "./ContentBlock";
import HighlightBlock from "./HighlightBlock";
import QuoteBlock from "./QuoteBlock";
import LogoBlock from "./LogoBlock";
import PhotoMeta from "./PhotoMeta";
import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};

const shortcodes = {
  WrapperBlock,
  ContentHeading,
  StartBlock,
  ContentBlock,
  HighlightBlock,
  QuoteBlock,
  LogoBlock,
  PhotoMeta,
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <div className="min-h-screen relative bg-slate-50 dark:bg-zinc-900 z-30">
        <div className="absolute w-full z-20 bg-gradient-to-r from-amber-400 via-orange-600 to-orange-300 h-1"></div>
        <div className="flex flex-col min-h-screen justify-between">
          <Navigation />
          <div className="px-4 sm:px-6 xl:px-0">{children}</div>

          {window.location.pathname !== "/" && <Footer />}
        </div>
      </div>
    </MDXProvider>
  );
};

export default Layout;
