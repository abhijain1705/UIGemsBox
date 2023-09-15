import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchInputProp = {
  hideInSmallScreen: boolean;
};

const SearchInput = ({ hideInSmallScreen }: SearchInputProp) => {
  return (
    <div
      className={` relative h-[50px] ${
        hideInSmallScreen ? "md:flex hidden" : "flex md:hidden"
      } items-center justify-center gap-2 border-2 border-[#7a62f6] hover:border-[#a394ee] border-solid rounded-md`}
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="sm"
        width={20}
        height={20}
        className={`
        absolute left-2`}
      />
      <input
        className={`placeholder-black pl-12 bg-transparent w-full h-full p-2 focus:outline-none`}
        placeholder="Search"
      />
      <span
        className={`border-gray-700 h-[30px] p-2 border-2 text-center border-solid text-[11px] rounded-md my-2 mx-3`}
      >
        /
      </span>
    </div>
  );
};

export default SearchInput;
