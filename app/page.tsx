"use client";
import Header from "./components/landingPage/header";
import { useState } from "react";
import {
  faChalkboard,
  faMobileAndroid,
  faArrowUpRightDots,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import HeroSection from "./components/landingPage/heroSection";
import BenefitCard from "./components/landingPage/benefitCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { discordInvitation, faqs, githubURL } from "@/constant/utils";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import SideMenuInDocs from "./components/common/sideMenuInDocs";

export default function Home() {
  const [toggleHeader, settoggleHeader] = useState(false);
  const [currentFAQ, setcurrentFAQ] = useState(-1);
  const [currentSelectedResourceLabel, setcurrentSelectedResourceLabel] =
    useState("");

  return (
    <main className="flex relative flex-col min-h-screen">
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
        <>
          <section className="h-[100vh] flex flex-col">
            <HeroSection />
          </section>
          <section className="min-h-screen lg:h-[100vh] p-6 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-[#c3b4fc] text-[25px]">
                The best of the Front-End ecosystem...
              </h3>
              <h1 className="text-center text-white text-[50px] font-bold">
                ...but ONLY the things you need
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center mt-4 justify-center gap-4 w-[80%]">
              <BenefitCard
                message="Unlock your potential with our comprehensive learning resources. Dive deep into the world of Frontend  development, from beginner tutorials to advanced techniques. Expand your knowledge, sharpen your skills, and become a proficient Frontend  developer with our curated educational content"
                label="Learn"
                icon={faChalkboard}
              />
              <BenefitCard
                message="Accelerate your development process with our extensive collection of reusable components. Access a rich library of pre-built Frontend  components, meticulously crafted and optimized for efficiency. Simplify your workflow, save time, and create stunning applications with ease."
                label="Build"
                icon={faMobileAndroid}
              />
              <BenefitCard
                message="Take the next step in your Frontend  journey and explore exciting job opportunities. Connect with top companies actively seeking talented Frontend  developers like you. Browse through our job listings, showcase your skills, and unlock new career prospects in the thriving world of Frontend  development."
                label="Get Opportunities"
                icon={faArrowUpRightDots}
              />
            </div>
          </section>
          <section
            id="faqs"
            className="flex flex-col gap-2 items-center justify-center mb-4"
          >
            <h3 className="text-center text-[#c3b4fc] text-[25px]">
              You have the Questions?
            </h3>
            <h1 className="text-center text-white text-[50px] font-bold">
              We have Answers.
            </h1>
            {faqs.map((itm, ind) => (
              <div
                onClick={() => {
                  if (ind === currentFAQ) {
                    setcurrentFAQ(-1);
                  } else {
                    setcurrentFAQ(ind);
                  }
                }}
                key={ind}
                className="w-[90%] sm:w-[70%] mx-auto relative flex flex-col justify-between overflow-hidden rounded-md border border-purple-200/20 bg-white/5 transition-colors hover:border-purple-300/50"
              >
                <div className="flex items-center space-x-4 bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20">
                  <p className="text-lg flex items-center justify-between w-full font-medium leading-6 text-purple-200 md:text-md">
                    <span className="h-full rounded-md before:absolute before:inset-0 before:content-[''] focus:no-underline hover:no-underline active:no-underline">
                      {itm.question}
                    </span>
                  </p>
                  <FontAwesomeIcon
                    color="#398CCB"
                    fill="white"
                    size="sm"
                    width={20}
                    height={20}
                    icon={faChevronDown}
                  />
                </div>
                {currentFAQ === ind && (
                  <div className="m-6 h-full text-sm text-purple-100 subpixel-antialiased md:text-base">
                    {itm.answer}
                  </div>
                )}
              </div>
            ))}
          </section>
          <section className="flex items-center justify-center self-center m-4 gap-3">
            <Link href={githubURL} target="_blank">
              <div className="relative group flex items-center justify-center flex-col">
                <p className="absolute bg-purple-200/10 text-[#e8ddff] rounded-md py-1 bottom-12 whitespace-nowrap hidden group-hover:block px-3">
                  Contribute Now!
                </p>
                <FontAwesomeIcon
                  icon={faGithub}
                  size="sm"
                  width={20}
                  height={20}
                  className="bg-purple-200/10 p-2 rounded-md text-[#171515] cursor-pointer"
                />
              </div>
            </Link>
            <Link href={discordInvitation} target="_blank">
              <div className="relative group flex items-center justify-center flex-col">
                <p className="absolute bg-purple-200/10 text-[#e8ddff] rounded-md py-1 bottom-12 whitespace-nowrap hidden group-hover:block px-3">
                  Join the community
                </p>
                <FontAwesomeIcon
                  icon={faDiscord}
                  size="sm"
                  width={20}
                  height={20}
                  className="bg-purple-200/10 p-2 rounded-md text-[#7289DA] cursor-pointer"
                />
              </div>
            </Link>
          </section>
        </>
      )}
    </main>
  );
}
