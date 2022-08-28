import React from "react";
import { Link } from "gatsby";
import { Disclosure } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import { isPartiallyCurrent } from "../helpers/utils";

import Logo from "../assets/logo.svg";
import ThemeSwitcher from "../components/ThemeSwitcher";

const navigation = [
  { name: "about", href: "/about/" },
  { name: "cv", href: "/cv/" },
  // { name: "projects", href: "/projects/" },
  // { name: "portfolio", href: "/portfolio/" },
  // { name: "photography", href: "/photography/" },
  { name: "blog", href: "/blog/" },
  // { name: "resources", href: "/resources/" },
];

type Props = {
  absolute?: boolean;
  isPostPage?: boolean;
};

const Navigation: React.FC<Props> = ({ absolute = false, isPostPage = false }) => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <Disclosure as="nav" className={absolute ? "absolute w-full z-20" : "relative w-full z-20"}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 xl:px-0">
            <div className="relative flex items-center justify-between pt-8 pb-12">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-zinc-900 dark:text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuAlt1Icon
                      className="block h-6 w-6 text-zinc-900 dark:text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-col space-y-8">
                  <div className="flex items-center pl-4">
                    {pathname === "/" ? (
                      <div className="font-cursive text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-200">
                        juho pekkala
                      </div>
                    ) : (
                      <Link
                        to="/"
                        className={
                          isPostPage
                            ? "font-cursive text-4xl md:text-5xl font-semibold text-zinc-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:via-orange-600 hover:to-orange-300 dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:from-amber-400 dark:hover:via-orange-600 dark:hover:to-orange-300 p-5 -m-5"
                            : "font-cursive text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:via-orange-600 hover:to-orange-300 dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:from-amber-400 dark:hover:via-orange-600 dark:hover:to-orange-300 p-5 -m-5"
                        }
                      >
                        juho pekkala
                      </Link>
                    )}
                  </div>

                  <div className="hidden sm:flex sm:items-center">
                    <div className="flex flex-wrap items-center space-x-5 -ml-3">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          getProps={isPartiallyCurrent}
                          className={
                            isPostPage
                              ? "font-mono text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500 rounded-md text-2sm px-3 py-2"
                              : "font-mono text-zinc-900 dark:text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500 rounded-md text-2sm px-3 py-2"
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                      {isPostPage ? (
                        <>
                          <div className="font-mono text-zinc-200" aria-hidden="true">
                            /
                          </div>
                          <ThemeSwitcher isPostPage />
                        </>
                      ) : (
                        <>
                          <div className="font-mono text-zinc-900 dark:text-zinc-200" aria-hidden="true">
                            /
                          </div>
                          <ThemeSwitcher />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  isPostPage
                    ? "hidden lg:block px-4 text-zinc-200"
                    : "hidden lg:block px-4 text-zinc-900 dark:text-orange-600"
                }
              >
                <Logo />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col space-y-2 px-2 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  getProps={isPartiallyCurrent}
                  className={
                    "font-mono text-zinc-900 dark:text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2 rounded-md text-2sm"
                  }
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3">
                <ThemeSwitcher />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navigation;
