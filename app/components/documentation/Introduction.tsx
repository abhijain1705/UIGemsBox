import React from "react";
import Link from "next/link";
import introductionContent from "../../../constant/introductionContent.json";
import OnThisPage from "../common/onThisPage";
import Pagination from "../common/pagination";

const Introduction = () => {
  return (
    <div className="flex-col flex">
      <OnThisPage
        content={[
          ...Object.entries(introductionContent).map((content) => content[0]),
        ]}
      />

      <div className="flex flex-col">
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
        <Pagination />
      </div>
    </div>
  );
};

export default Introduction;
