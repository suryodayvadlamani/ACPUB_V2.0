import React, { ReactNode } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <nav className="shadow-lg bg-skin-fill">
      <div className="flex lg:mx-24 justify-between h-14 items-center">
        <div className="flex space-x-7">
          <div>
            {/* Website Logo*/}
            <Link href="/" className="flex items-center px-2">
              VV
            </Link>
          </div>
          {/* <!-- Primary Navbar items --> */}
          <ul className="hidden md:flex gap-8 items-center space-x-1">
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            |{" "}
            <Link href="/about">
              <a>ASd</a>
            </Link>{" "}
            |{" "}
            <Link href="/users">
              <a>Users List</a>
            </Link>
          </ul>
        </div>
        {/* <!-- Secondary Navbar items --> */}
        <div className="flex flex-row-reverse justify-between gap-1 items-center space-x-3 ">
          <div className="hidden md:flex items-center flex-row-reverse">
            <div
              className={`
            group inline-flex items-center 
            rounded-md px-3 py-2 font-medium
            min-w-min hover:text-opacity-100 focus:outline-none 
             focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <img
                className="w-9 h-9 rounded"
                src={user?.image}
                referrerPolicy="no-referrer"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
