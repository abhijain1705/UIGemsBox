"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/landingPage/header";
import Introduction from "../components/documentation/Introduction";
import SideMenuInDocs from "../components/common/sideMenuInDocs";

type ComponentMappingProp = {
  [key: string]: React.ReactNode;
};

const Page = () => {
  const [toggleHeader, settoggleHeader] = useState(false);
  const [currentSelectedResourceLabel, setcurrentSelectedResourceLabel] =
    useState("");

  useEffect(() => {
    const href = window.location.hash.split("_");
    if (href[1]) {
      setcurrentSelectedResourceLabel(href[1]);
    }
  }, []);

  const componentMapping: ComponentMappingProp = {
    Introduction: <Introduction />,
  };

  return (
    <div className="bg-white w-full relative min-h-screen">
      <Header toggleHeader={toggleHeader} settoggleHeader={settoggleHeader} />
      {toggleHeader ? (
        <section className="bg-[#0F1729] flex flex-col w-full h-screen p-6 pt-[100px]">
          <SideMenuInDocs
            toggleHeader={toggleHeader}
            settoggleHeader={settoggleHeader}
            currentVal={currentSelectedResourceLabel}
            onChange={(value) => setcurrentSelectedResourceLabel(value)}
          />
        </section>
      ) : (
        <section className="bg-[#0F1729] flex flex-col md:grid md:grid-cols-[20%_80%] p-6 pt-[100px] w-full h-screen">
          <div className="md:block h-full overflow-auto hidden">
            <SideMenuInDocs
              toggleHeader={toggleHeader}
              settoggleHeader={settoggleHeader}
              currentVal={currentSelectedResourceLabel}
              onChange={(value) => setcurrentSelectedResourceLabel(value)}
            />
          </div>
          <div className="p-6 h-full overflow-auto">
            {componentMapping[currentSelectedResourceLabel] &&
              componentMapping[currentSelectedResourceLabel]}
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
