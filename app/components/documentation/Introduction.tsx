import React, { useState } from "react";
import Link from "next/link";
import introductionContent from "../../../constant/introductionContent.json";
import SideContentBar from "../common/sideContentBar";

const Introduction = () => {
  const [toggleDropdown, settoggleDropdown] = useState(false);

  return (
    <div
      onClick={() => {
        if (toggleDropdown) {
          settoggleDropdown(false);
        }
      }}
      className="md:grid flex-col flex md:grid-cols-[75%_25%]"
    >
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
              {Object.entries(introductionContent).map((itm, index) => (
                <Link
                  key={index}
                  href={`/docs#Welcome_Introduction_${itm[0]}`}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  {itm[0]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        {Object.entries(introductionContent).map((content, index) => (
          <div key={index}>
            <h3
              id={content[0]}
              className="my-4 cursor-pointer text-[#e8ddff] text-[25px] font-bold hover:underline"
            >
              <Link href={`#${content[0]}`}>{content[0]}</Link>
            </h3>
            <p className="text-white">{content[1]}</p>
          </div>
        ))}
      </div>
      <div className="md:block hidden">
        <SideContentBar
          currentTab="Welcome_Introduction"
          headings={[
            ...Object.entries(introductionContent).map((content) => content[0]),
          ]}
        />
      </div>
    </div>
  );
};

export default Introduction;
