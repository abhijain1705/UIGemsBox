import { docsResource } from "@/constant/utils";
import Link from "next/link";
import React from "react";

type SideMenuInDocsProp = {
  currentVal: string;
  toggleHeader: boolean;
  settoggleHeader: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (value: string) => void;
};

const SideMenuInDocs = ({
  toggleHeader,
  settoggleHeader,
  currentVal,
  onChange,
}: SideMenuInDocsProp) => {
  return (
    <div className="h-full overflow-auto flex flex-col">
      {Object.entries(docsResource).map((content, index) => (
        <div key={index}>
          <h3 className="my-2 text-white text-xl">{content[0]}</h3>
          <ul>
            {content[1].map((label, ind) => (
              <Link id={label} href={`${label}`} key={ind}>
                <li
                  onClick={() => {
                    onChange(label);
                    if (toggleHeader) {
                      settoggleHeader(false);
                    }
                  }}
                  className={`${
                    currentVal === label && "bg-purple-200/10"
                  } text-[#e8ddff] hover:text-purple-300 cursor-pointer py-2 px-3 hover:bg-purple-200/10`}
                >
                  {label.replaceAll("_", " ")}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideMenuInDocs;
