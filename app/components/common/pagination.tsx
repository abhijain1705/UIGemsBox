import React, { useState, useEffect } from "react";
import { docsResource } from "@/constant/utils";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  const [documentResourceList, setdocumentResourceList] = useState<
    Array<string>
  >([]);

  useEffect(() => {
    let data: Array<string> = [];
    Object.entries(docsResource).map((itm) => {
      data.push(...itm[1]);
    });

    setdocumentResourceList(data);
  }, []);

  const pathname = usePathname();
  const option = pathname.split("/");
  const navigate = useRouter();
  const index = documentResourceList.indexOf(option[2]);

  function navigatToNext() {
    if (index < documentResourceList.length - 1 && index !== -1) {
      navigate.push(`/docs/${documentResourceList[index + 1]}`);
    }
  }

  function navigateToPrevious() {
    if (index > 0) {
      navigate.push(`/docs/${documentResourceList[index - 1]}`);
    }
  }

  return (
    <div className="w-[90%] mx-auto flex items-center justify-between my-4">
      {pathname.includes(documentResourceList[0]) ? (
        <span></span>
      ) : (
        <div
          onClick={navigateToPrevious}
          className="flex hover:text-purple-300 hover:bg-purple-200/10 p-3 rounded-md cursor-pointer items-center justify-center gap-1"
        >
          <FontAwesomeIcon
            color="#398CCB"
            fill="white"
            size="sm"
            width={20}
            height={20}
            icon={faChevronLeft}
          />
          <span className="text-white text-[20px]">
            {index > 0 && documentResourceList[index - 1]}
          </span>
        </div>
      )}
      {pathname.includes(
        documentResourceList[documentResourceList.length - 1]
      ) ? (
        <span></span>
      ) : (
        <div
          onClick={navigatToNext}
          className="flex hover:text-purple-300 hover:bg-purple-200/10 p-3 rounded-md cursor-pointer items-center justify-center gap-1"
        >
          <span className="text-white text-[20px]">
            {index < documentResourceList.length - 1 &&
              documentResourceList[index + 1]}
          </span>
          <FontAwesomeIcon
            color="#398CCB"
            fill="white"
            size="sm"
            width={20}
            height={20}
            icon={faChevronRight}
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
