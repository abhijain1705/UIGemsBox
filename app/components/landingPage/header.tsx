import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./searchInput";
import { usePathname } from "next/navigation";

type HeaderProp = {
  toggleHeader: boolean;
  settoggleHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ toggleHeader, settoggleHeader }: HeaderProp) => {
  const pathname = usePathname();
  return (
    <nav className="flex fixed p-4 items-center bg-white justify-between w-full">
      <div className="flex items-center justify-center gap-6">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/logo.png"}
            width={200}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <Link
          className={`${
            pathname.includes("/docs") && "bg-purple-200/10"
          } md:block hidden rounded-md p-3 hover:text-purple-700 hover:bg-purple-800/10 cursor-pointer`}
          href={"/docs/Introduction"}
        >
          DOCS
        </Link>
        <Link
          className={`md:block hidden rounded-md p-3 hover:text-purple-700 hover:bg-purple-800/10 cursor-pointer`}
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
          className={`bg-purple-800/10 text-purple-700 cursor-pointer p-2 rounded-md`}
        />
      </div>
      <SearchInput hideInSmallScreen={true} />
    </nav>
  );
};

export default Header;
