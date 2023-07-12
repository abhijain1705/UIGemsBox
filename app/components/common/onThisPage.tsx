import Link from "next/link";
import React, { useState } from "react";

type OnThisPageProp = {
  content: Array<string>;
};

const OnThisPage = ({ content }: OnThisPageProp) => {
  const [toggleDropdown, settoggleDropdown] = useState(false);

  return (
    <div className="relative md:hidden inline-block text-left max-w-[250px]">
      <div>
        <button
          type="button"
          onClick={() => settoggleDropdown(!toggleDropdown)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-purple-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-purple-300"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          On This Page
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {toggleDropdown && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-purple-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {content.map((itm, index) => (
              <Link
                key={index}
                onClick={() => settoggleDropdown(false)}
                href={`#Welcome_Introduction_${itm}`}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {itm}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OnThisPage;
