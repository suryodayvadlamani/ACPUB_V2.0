import React from "react";
function NavLinks() {
  return (
    <>
      <li className="mx-4 my-6 md:my-0">
        <a
          href="Market"
          className="text-xl sm:text-skin-inverted md:text-skin-nav-base hover:text-skin-hover duration-500"
        >
          Market
        </a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a
          href="Publisher"
          className="text-xl sm:text-skin-inverted md:text-skin-nav-base hover:text-skin-hover duration-500"
        >
          Publisher
        </a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a
          href="/"
          className="text-xl sm:text-skin-inverted md:text-skin-nav-base hover:text-skin-hover duration-500"
        >
          Title
        </a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a
          href="/"
          className="text-xl sm:text-skin-inverted md:text-skin-nav-base hover:text-skin-hover duration-500"
        >
          School
        </a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a
          href="/"
          className="text-xl sm:text-skin-inverted md:text-skin-nav-base hover:text-skin-hover duration-500"
        >
          Adoption Report
        </a>
      </li>
    </>
  );
}

export default NavLinks;
