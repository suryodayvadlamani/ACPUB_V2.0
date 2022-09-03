import React, { useState, useContext } from "react";
import Link from "next/link";
import {
  MoonIcon,
  SunIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { ThemeContext } from "../lib/contexts/theme_context";
import NavLinks from "./NavLinks";
import UserSettings from "./UserSettings";

const Navbar = () => {
  const { userProps, setUserProps } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const updateTheme = async (theme: string) => {
    setUserProps({ ...userProps, theme });
  };
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="shadow-lg bg-skin-fill">
        <div className="flex lg:mx-24 mx-2 justify-between h-14 items-center">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo*/}
              <Link href="/" className="flex items-center px-2">
                <img
                  src={`/static/images/${userProps?.theme}.png`}
                  alt="Logo"
                  className="h-12 w-12 mr-2"
                />
              </Link>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <ul className="hidden md:flex gap-8 items-center space-x-1">
              <NavLinks />
            </ul>
          </div>
          {/* <!-- Secondary Navbar items --> */}
          <div className="flex flex-row-reverse justify-between gap-1 items-center space-x-3 ">
            <button
              onClick={() => handleNav}
              className="md:hidden pr-2 text-skin-nav-base outline-none"
            >
              {nav ? (
                <XMarkIcon className="w-7 h-7" onClick={handleNav} />
              ) : (
                <Bars3Icon className="w-7 h-7" onClick={handleNav} />
              )}
            </button>
            <div className="hidden md:flex items-center flex-row-reverse">
              <UserSettings />
              <div
                onClick={() =>
                  updateTheme(userProps.theme === "dark" ? "light" : "dark")
                }
                className="flow-root text-skin-nav-base
                    rounded-md px-2
                    transition duration-150 
                    hover:cursor-pointer
                    ease-in-out hover:text-skin-hover focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                {userProps?.theme === "dark" ? (
                  <SunIcon role="button" className="w-7 h-7" />
                ) : (
                  <MoonIcon role="button" className="w-7 h-7" />
                )}
              </div>
              {/* <Filters /> */}
            </div>
          </div>
          {/* <!-- Mobile menu button --> */}
        </div>

        {/* <!-- mobile menu --> */}
      </nav>
      <div
        className={`${
          nav ? "flex" : "hidden"
        } bg-skin-nav-base absolute w-full`}
      >
        <ul className="">
          <NavLinks />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
