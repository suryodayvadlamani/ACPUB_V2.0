import React, { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { ThemeContext } from "../lib/contexts/theme_context";
import { signOut } from "next-auth/react";

function UserSettings() {
  const { userProps } = useContext(ThemeContext);
  return (
    <Popover className="relative ">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
            ${open ? "" : "text-opacity-90"}
            group inline-flex items-center 
            rounded-md px-3 py-2 font-medium
            min-w-min hover:text-opacity-100 focus:outline-none `}
          >
            {userProps?.image ? (
              <img
                className="w-9 h-9 rounded-full"
                src={userProps?.image}
                referrerPolicy="no-referrer"
              />
            ) : (
              <UserCircleIcon className="text-skin-nav-base rounded-full h-9 w-9 min-w-fit hover:cursor-pointer" />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="bg-skin-nav-base absolute text-skin-inverted w-max overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <ul>
                <li>
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:text-skin-hover focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    Create User
                  </a>
                </li>
                <li>
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:text-skin-hover focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    Edit Profile
                  </a>
                </li>
                <li>
                  <div
                    onClick={() => signOut()}
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:text-skin-hover focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div className="flex justify-items-start justify-around items-center">
                      <ArrowRightOnRectangleIcon className=" h-4 w-4 hover:cursor-pointer" />
                      Log Out
                    </div>
                  </div>
                </li>
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default UserSettings;
