import React from "react";
import { Link } from "gatsby";
import { Disclosure } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import { isCurrent, isPartiallyCurrent } from "../helpers/utils";

import Logo from "../assets/logo.svg";
import ThemeSwitcher from "../components/ThemeSwitcher";

const navigation = [
  { name: "home", href: "/" },
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
  return (
    <Disclosure as="nav" className={absolute ? "absolute w-full z-20" : "relative w-full z-20"}>
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-2 sm:px-6 xl:px-0">
            <div className="relative flex items-center justify-between pt-8 pb-12">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-10 w-10 text-zinc-900 dark:text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuAlt1Icon
                      className="block h-10 w-10 text-zinc-900 dark:text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-col space-y-8">
                  <div className="hidden sm:flex sm:items-center">
                    <div
                      className={
                        isPostPage
                          ? "bg-zinc-50 dark:bg-zinc-900 rounded-full flex flex-wrap items-center space-x-5 -ml-6 px-3"
                          : "flex flex-wrap items-center space-x-5 -ml-6 px-3"
                      }
                    >
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          getProps={item.name === "home" ? isCurrent : isPartiallyCurrent}
                          className={
                            "font-mono text-zinc-900 dark:text-zinc-200 hover:underline hover:text-orange-500 dark:hover:text-orange-500 text-2sm px-3 py-2"
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                      {isPostPage ? (
                        <>
                          <div className={"font-mono text-zinc-900 dark:text-zinc-200"} aria-hidden="true">
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
                  isPostPage ? "lg:block px-4 text-zinc-200" : "lg:block px-4 text-zinc-900 dark:text-orange-600"
                }
              >
                <Link to="/">
                  <Logo />
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col space-y-2 px-2 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  getProps={item.name === "home" ? isCurrent : isPartiallyCurrent}
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
