"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/landingPage/header";
import Introduction from "../../components/documentation/Introduction";
import SideMenuInDocs from "../../components/common/sideMenuInDocs";
import { usePathname } from "next/navigation";
import introductionContent from "../../../constant/introductionContent.json";
import SideContentBar from "@/app/components/common/sideContentBar";
import Head from "next/head";

type ComponentMappingProp = {
  [key: string]: React.ReactNode;
};

type ContentMappingProp = {
  [key: string]: any;
};

const contentMapping: ContentMappingProp = {
  Introduction: introductionContent,
};

const componentMapping: ComponentMappingProp = {
  Introduction: <Introduction />,
};

const Page = () => {
  const [toggleHeader, settoggleHeader] = useState(false);
  const [currentSelectedResourceLabel, setcurrentSelectedResourceLabel] =
    useState("");

  const pathname = usePathname();
  const option = pathname.split("/");
  useEffect(() => {
    if (option.length > 1) {
      setcurrentSelectedResourceLabel(option[2]);
    }
  }, [option]);

  return (
    <div>
      <Head>
        <title>{option} :Documentation</title>
      </Head>
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
          <section className="bg-[#0F1729] flex flex-col md:grid md:grid-cols-[20%_60%_20%] p-6 pt-[100px] w-full h-screen">
            <div className="md:block h-full overflow-auto hidden">
              <SideMenuInDocs
                toggleHeader={toggleHeader}
                settoggleHeader={settoggleHeader}
                currentVal={currentSelectedResourceLabel}
                onChange={(value) => setcurrentSelectedResourceLabel(value)}
              />
            </div>
            <div
              className="p-6 h-full no-scrollbar overflow-auto"
            >
              {componentMapping[currentSelectedResourceLabel] &&
                componentMapping[currentSelectedResourceLabel]}
            </div>
            <div className="md:block hidden">
              {contentMapping[currentSelectedResourceLabel] && (
                <SideContentBar
                  headings={[
                    ...Object.entries(
                      contentMapping[currentSelectedResourceLabel]
                    ).map((content) => content[0]),
                  ]}
                />
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Page;
