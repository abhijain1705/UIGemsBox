import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type BenefitCardProp = {
  icon: IconDefinition;
  label: string;
  message: string;
};

const BenefitCard = ({ icon, label, message }: BenefitCardProp) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-md border border-purple-200/20 bg-white/5 transition-colors hover:border-purple-300/50">
      <div className="flex items-center space-x-4 bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20">
        <FontAwesomeIcon
          color="#398CCB"
          fill="white"
          size="sm"
          width={20}
          height={20}
          icon={icon}
        />
        <p className="text-lg font-medium leading-6 text-purple-200 md:text-xl">
          <a
            href="#"
            className="h-full rounded-md before:absolute before:inset-0 before:content-[''] focus:no-underline hover:no-underline active:no-underline"
          >
            {label}
          </a>
        </p>
      </div>
      <div className="m-6 h-full text-sm text-purple-100 subpixel-antialiased md:text-base">
        {message}
      </div>
    </div>
  );
};

export default BenefitCard;
