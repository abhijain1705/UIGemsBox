import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./searchInput";
import { usePathname } from "next/navigation";

type HeaderProp = {
  toggleHeader: boolean;
  whereBeingUsed: "Home" | "Docs";
  settoggleHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({
  toggleHeader,
  settoggleHeader,
  whereBeingUsed,
}: HeaderProp) => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center gap-6">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={
              whereBeingUsed === "Home" ? "/light-logo.png" : "/dark-logo.png"
            }
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <Link
          className={`${
            pathname === "/docs" && "bg-purple-200"
          } md:block hidden rounded-md p-3 ${
            whereBeingUsed === "Home"
              ? "text-[#e8ddff] hover:text-purple-300 hover:bg-purple-200/10"
              : "text-purple-800 hover:bg-purple-200"
          } cursor-pointer`}
          href={"/docs"}
        >
          DOCS
        </Link>
        <Link
          className={`md:block hidden rounded-md p-3 ${
            whereBeingUsed === "Home"
              ? "text-[#e8ddff] hover:text-purple-300 hover:bg-purple-200/10"
              : "text-purple-800 hover:bg-purple-200"
          } cursor-pointer`}
          href={"/#faqs"}
        >
          FAQS
        </Link>
      </div>

      <div className="md:hidden flex items-center justify-center gap-3">
        <FontAwesomeIcon
          icon={toggleHeader ? faXmark : faBars}
          size="sm"
          width={20}
          height={20}
          onClick={() => settoggleHeader(!toggleHeader)}
          className={`${
            whereBeingUsed === "Home"
              ? "bg-purple-200/10 text-purple-300"
              : "text-purple-800 hover:bg-purple-200"
          } cursor-pointer p-2 rounded-md`}
        />
      </div>
      <SearchInput whereBeingUsed={whereBeingUsed} hideInSmallScreen={true} />
    </nav>
  );
};

export default Header;
