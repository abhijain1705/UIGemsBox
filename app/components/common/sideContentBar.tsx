import React, { useState, useEffect } from "react";
import Link from "next/link";

type SideContentBarProp = {
  headings: Array<string>;
};

const SideContentBar = ({ headings }: SideContentBarProp) => {
  const [currentSelectedResourceLabel, setcurrentSelectedResourceLabel] =
    useState('');

  return (
    <div className="">
      <h3 className="text-[#e8ddff] text-[20px] font-bold">On this Page</h3>
      {headings.map((list, index) => (
        <p
          onClick={() => setcurrentSelectedResourceLabel(list)}
          id={list.replaceAll(" ", "_")}
          className={`text-white ${
            currentSelectedResourceLabel === list &&
            "text-purple-300 bg-purple-200/10"
          } hover:text-purple-300 my-2 hover:bg-purple-200/10 px-1 rounded-md text-[13px] py-2 cursor-pointer`}
          key={index}
        >
          <Link href={`#${list}`}>{list}</Link>
        </p>
      ))}
    </div>
  );
};

export default SideContentBar;
