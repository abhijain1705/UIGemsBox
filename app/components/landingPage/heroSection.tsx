import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { githubURL } from "@/constant/utils";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center m-auto flex-col">
      <h1 className="font-extrabold text-[35px] sm:text-[45px] md:text-[55px] w-[90%] lg:w-[60%] text-white leading-0 tracking-tighter text-center">
        The only place to learn, build and get hired as a Frontend developer
      </h1>
      <div className="flex items-center justify-center gap-3">
        <Link
          href={"/docs/Introduction"}
          className="text-[#e8ddff] flex items-center justify-center gap-3 p-3 rounded-2xl bg-[#7a62f6]"
        >
          <span>Documentation</span>
          <FontAwesomeIcon
            size="sm"
            width={20}
            height={20}
            icon={faArrowUpRightFromSquare}
          />
        </Link>
        <Link
          href={githubURL}
          target="_blank"
          className="text-[#e8ddff] flex items-center justify-center gap-3 p-3 rounded-2xl bg-[#7a62f6]"
        >
          <span>Github</span>
          <FontAwesomeIcon
            size="sm"
            width={20}
            height={20}
            icon={faArrowUpRightFromSquare}
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
