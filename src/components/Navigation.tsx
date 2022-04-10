/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "gatsby";
import { Disclosure } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import Logo from "../assets/logo.svg";
import ThemeSwitcher from "../components/ThemeSwitcher";

const navigation = [
  { name: "About", href: "/about/" },
  { name: "CV", href: "/cv/" },
  { name: "Projects", href: "/projects/" },
  { name: "Portfolio", href: "/portfolio/" },
  { name: "Photography", href: "/photography/" },
  { name: "Blog", href: "/blog/" },
  { name: "Resources", href: "/resources/" },
];

const Navigation = () => {
  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? {
          className: "font-mono text-orange-700 dark:text-orange-600 font-medium rounded-md text-2sm underline",
        }
      : {};
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 xl:px-0 pt-6">
            <div className="relative flex items-center justify-between py-6">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-zinc-900 dark:text-zinc-100 hover:text-orange-700 dark:hover:text-orange-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuAlt1Icon
                      className="block h-6 w-6 text-zinc-900 dark:text-zinc-100 hover:text-orange-700 dark:hover:text-orange-600"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-col space-y-6">
                  <div className="flex-shrink-0 flex items-center">
                    {window.location.pathname === "/" ? (
                      <div className="text-xl sm:text-2xl md:text-3xl font-sans font-semibold text-zinc-900 dark:text-zinc-100">
                        juho pekkala
                      </div>
                    ) : (
                      <Link
                        to="/"
                        className="text-xl sm:text-2xl md:text-3xl font-sans font-semibold text-zinc-900 dark:text-zinc-100 hover:text-orange-700 dark:hover:text-orange-600"
                      >
                        juho pekkala
                      </Link>
                    )}
                  </div>

                  <div className="hidden sm:flex sm:items-center">
                    <div className="flex flex-wrap items-center space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          getProps={isActive}
                          className={
                            "font-mono text-zinc-900 dark:text-zinc-100 hover:text-orange-700 dark:hover:text-orange-600 rounded-md text-2sm"
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="font-mono text-zinc-900 dark:text-zinc-100" aria-hidden="true">
                        /
                      </div>
                      <ThemeSwitcher />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block px-4">
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
                  getProps={isActive}
                  className={
                    "font-mono text-zinc-900 dark:text-zinc-100 hover:text-orange-700 dark:hover:text-orange-600 px-3 py-2 rounded-md text-2sm"
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
