import React from "react";
import Logo from "../assets/logo.svg";

const LogoBlock = () => {
  return (
    <div className="max-w-2xl mx-auto border-t border-b border-zinc-300 dark:border-zinc-700 flex items-center justify-center py-12 text-zinc-900 dark:text-orange-600 px-4">
      <Logo />
    </div>
  );
};

export default LogoBlock;
